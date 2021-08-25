import { ERR_TYPES } from '../constants/err-types.const'
import { SUBJECT_TYPE } from '../constants/subject-type.const'
import { ENCODING } from '../enums/encoding.enum'
import FileInterface from '../interfaces/file.interface'
import OptionsInterface from '../interfaces/options.interface'
import InternalError from './error.service'

export default class ValidatorService {
  static file(file: File, allowEmpty: boolean): boolean {
    if (!allowEmpty) {
      const { size } = file

      if (size === 0) {
        throw new InternalError(ERR_TYPES.INVALID_FILE)
      }
    }

    return true
  }

  static fixtures(fixture: FileInterface): boolean {
    const {
      filePath,
      fileName,
      encoding,
      mimeType,
      fileContent,
      lastModified,
    } = fixture

    if (encoding && !ENCODING[encoding]) {
      throw new InternalError(ERR_TYPES.INVALID_FILE_ENCODING)
    }

    if (typeof filePath !== 'string' && !fileContent) {
      throw new InternalError(ERR_TYPES.INVALID_FILE_PATH)
    }

    if (typeof mimeType !== 'string') {
      throw new InternalError(ERR_TYPES.INVALID_MIME_TYPE)
    }

    if (!filePath && !fileName) {
      throw new InternalError(ERR_TYPES.MISSING_FILE_NAME_OR_PATH)
    }

    if (lastModified && typeof lastModified !== 'number') {
      throw new InternalError(ERR_TYPES.INVALID_LAST_MODIFIED)
    }

    return true
  }

  static options(opts: OptionsInterface): boolean {
    const { subjectType, force, allowEmpty } = opts
    if (Object.values(SUBJECT_TYPE).indexOf(subjectType) === -1) {
      throw new InternalError(ERR_TYPES.INVALID_SUBJECT_TYPE)
    }

    if (typeof force !== 'boolean') {
      throw new InternalError(ERR_TYPES.INVALID_FORCE)
    }

    if (typeof allowEmpty !== 'boolean') {
      throw new InternalError(ERR_TYPES.INVALID_ALLOW_EMPTY)
    }

    return true
  }
}
