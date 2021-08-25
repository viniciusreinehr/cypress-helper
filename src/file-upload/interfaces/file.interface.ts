import { ENCODING } from "../enums/encoding.enum";

export default interface FileInterface {
  fileName?: string,
  fileContent?: Blob,
  mimeType?: string,
  encoding?: ENCODING | '',
  window?: Cypress.AUTWindow,
  lastModified?: number,
  filePath?: string
}