import { ENCODING } from '../enums/encoding.enum'

export default interface FileContentInterface {
  filePath: string
  fileContent: Blob
  fileEncoding: ENCODING
}
