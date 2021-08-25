import { getType } from 'mime'
import { ENCODING } from '../enums/encoding.enum'
import { FILE_EXTENSION } from '../enums/file-extension.enum'
import FileContentInterface from '../interfaces/file-content.interface'
import FileInterface from '../interfaces/file.interface'

export default class FileService {
  EXTENSION_TO_ENCODING = {
    [FILE_EXTENSION.JSON]: ENCODING.UTF8,
    [FILE_EXTENSION.JS]: ENCODING.UTF8,
    [FILE_EXTENSION.COFFEE]: ENCODING.UTF8,
    [FILE_EXTENSION.HTML]: ENCODING.UTF8,
    [FILE_EXTENSION.TXT]: ENCODING.UTF8,
    [FILE_EXTENSION.CSV]: ENCODING.UTF8,
    [FILE_EXTENSION.PNG]: ENCODING.BASE64,
    [FILE_EXTENSION.JPG]: ENCODING.BASE64,
    [FILE_EXTENSION.JPEG]: ENCODING.BASE64,
    [FILE_EXTENSION.GIF]: ENCODING.BASE64,
    [FILE_EXTENSION.TIF]: ENCODING.BASE64,
    [FILE_EXTENSION.TIFF]: ENCODING.BASE64,
    [FILE_EXTENSION.ZIP]: ENCODING.BASE64,
    [FILE_EXTENSION.PDF]: ENCODING.UTF8,
    [FILE_EXTENSION.VCF]: ENCODING.UTF8,
    [FILE_EXTENSION.SVG]: ENCODING.UTF8,
    [FILE_EXTENSION.XLS]: ENCODING.BINARY,
    [FILE_EXTENSION.XLSX]: ENCODING.BINARY,
    [FILE_EXTENSION.DOC]: ENCODING.BINARY,
    [FILE_EXTENSION.DOCX]: ENCODING.BINARY,
    [FILE_EXTENSION.MP3]: ENCODING.BINARY,
  }

  DEFAULT_ENCODING = ENCODING.UTF8

  UNIX_SEP = '/'
  WIN_SEP = '\\'

  wrapBlob(blob: Blob): Promise<Blob> {
    if (blob instanceof Cypress.Promise) {
      return blob
    }

    return Cypress.Promise.resolve(blob)
  }

  getFileBlobAsync(params: FileInterface): Promise<File> {
    const { fileContent, mimeType, encoding } = params
    let getBlob
    getBlob = this.defineGetBlob(encoding)

    if (typeof fileContent === 'string') {
      return getBlob(fileContent, mimeType).then((blob: Blob | string) =>
        this.resolveBlob(blob, params),
      )
    }

    getBlob = this.defineGetBlob(encoding)
    return getBlob(fileContent).then((blob: Blob | string) =>
      this.resolveBlob(blob, params),
    )
  }

  getFileContent(params: FileContentInterface): Promise<Blob> {
    const { filePath, fileContent, fileEncoding } = params
    if (fileContent) {
      return this.wrapBlob(fileContent)
    }

    return new Promise(resolve =>
      cy.fixture(filePath, fileEncoding).then(resolve),
    )
  }

  getFileEncoding(filePath: string): ENCODING {
    const extension = this.getFileExt(filePath)
    const encoding = this.EXTENSION_TO_ENCODING[extension]

    return encoding || this.DEFAULT_ENCODING
  }

  getFileExt(filePath: string): string {
    if (!filePath) {
      return ''
    }

    const pos = filePath.lastIndexOf('.')

    if (pos === -1) {
      return ''
    }

    return filePath.slice(pos + 1)
  }

  getFileMimeType(filePath: string): string {
    const extension = this.getFileExt(filePath)
    const mimeType = getType(extension)

    return mimeType
  }

  getFileName(filePath: string): string {
    if (!filePath) {
      return ''
    }

    let indexSep = filePath.lastIndexOf(this.UNIX_SEP)
    if (indexSep === -1) {
      indexSep = filePath.lastIndexOf(this.WIN_SEP)
    }

    if (indexSep === -1) {
      return filePath
    }

    return filePath.slice(indexSep + 1)
  }

  resolveFile(
    fixture: FileInterface,
    window: Cypress.AUTWindow,
  ): Promise<File> {
    const { filePath, encoding, mimeType, fileName, lastModified } = fixture

    const fileMimeType = mimeType || this.getFileMimeType(filePath)
    const fileEncoding = encoding || this.getFileEncoding(filePath)
    const fileLastModified = lastModified || Date.now()

    return new Cypress.Promise(resolve =>
      this.getFileContent({
        filePath,
        fileContent: fixture.fileContent,
        fileEncoding,
      })
        .then(fileContent =>
          this.getFileBlobAsync({
            fileContent,
            fileName,
            mimeType: fileMimeType,
            encoding: fileEncoding,
            lastModified: fileLastModified,
            window,
          }),
        )
        .then(resolve),
    )
  }

  private defineGetBlob(encoding: ENCODING | '') {
    if (encoding === ENCODING.BASE64)
      return (fileContent: string, mimeType: string): Promise<Blob> =>
        this.wrapBlob(Cypress.Blob.base64StringToBlob(fileContent, mimeType))

    if (encoding === ENCODING.BINARY)
      return (fileContent: string, mimeType: string): Promise<Blob> =>
        this.wrapBlob(Cypress.Blob.binaryStringToBlob(fileContent, mimeType))

    return (fileContent: Blob): Promise<Blob> =>
      Cypress.Promise.resolve(fileContent)
  }

  private resolveBlob(blob: Blob | string, params: FileInterface): File {
    const { fileName, fileContent, mimeType, window, lastModified } = params
    let blobContent = blob

    if (this.getFileExt(fileName) === FILE_EXTENSION.JSON) {
      blobContent = JSON.stringify(fileContent, null, 2)
    }

    const file = new window.File([blobContent], fileName, {
      type: mimeType,
      lastModified,
    })
    return file
  }
}
