"use strict";
exports.__esModule = true;
var mime_1 = require("mime");
var encoding_enum_1 = require("../enums/encoding.enum");
var file_extension_enum_1 = require("../enums/file-extension.enum");
var FileService = /** @class */ (function () {
    function FileService() {
        var _a;
        this.EXTENSION_TO_ENCODING = (_a = {},
            _a[file_extension_enum_1.FILE_EXTENSION.JSON] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.JS] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.COFFEE] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.HTML] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.TXT] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.CSV] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.PNG] = encoding_enum_1.ENCODING.BASE64,
            _a[file_extension_enum_1.FILE_EXTENSION.JPG] = encoding_enum_1.ENCODING.BASE64,
            _a[file_extension_enum_1.FILE_EXTENSION.JPEG] = encoding_enum_1.ENCODING.BASE64,
            _a[file_extension_enum_1.FILE_EXTENSION.GIF] = encoding_enum_1.ENCODING.BASE64,
            _a[file_extension_enum_1.FILE_EXTENSION.TIF] = encoding_enum_1.ENCODING.BASE64,
            _a[file_extension_enum_1.FILE_EXTENSION.TIFF] = encoding_enum_1.ENCODING.BASE64,
            _a[file_extension_enum_1.FILE_EXTENSION.ZIP] = encoding_enum_1.ENCODING.BASE64,
            _a[file_extension_enum_1.FILE_EXTENSION.PDF] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.VCF] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.SVG] = encoding_enum_1.ENCODING.UTF8,
            _a[file_extension_enum_1.FILE_EXTENSION.XLS] = encoding_enum_1.ENCODING.BINARY,
            _a[file_extension_enum_1.FILE_EXTENSION.XLSX] = encoding_enum_1.ENCODING.BINARY,
            _a[file_extension_enum_1.FILE_EXTENSION.DOC] = encoding_enum_1.ENCODING.BINARY,
            _a[file_extension_enum_1.FILE_EXTENSION.DOCX] = encoding_enum_1.ENCODING.BINARY,
            _a[file_extension_enum_1.FILE_EXTENSION.MP3] = encoding_enum_1.ENCODING.BINARY,
            _a);
        this.DEFAULT_ENCODING = encoding_enum_1.ENCODING.UTF8;
        this.UNIX_SEP = '/';
        this.WIN_SEP = '\\';
    }
    FileService.prototype.wrapBlob = function (blob) {
        if (blob instanceof Cypress.Promise) {
            return blob;
        }
        return Cypress.Promise.resolve(blob);
    };
    FileService.prototype.getFileBlobAsync = function (params) {
        var _this = this;
        var fileContent = params.fileContent, mimeType = params.mimeType, encoding = params.encoding;
        var getBlob;
        getBlob = this.defineGetBlob(encoding);
        if (typeof fileContent === 'string') {
            return getBlob(fileContent, mimeType).then(function (blob) { return _this.resolveBlob(blob, params); });
        }
        getBlob = this.defineGetBlob(encoding);
        return getBlob(fileContent).then(function (blob) { return _this.resolveBlob(blob, params); });
    };
    FileService.prototype.getFileContent = function (params) {
        var filePath = params.filePath, fileContent = params.fileContent, fileEncoding = params.fileEncoding;
        if (fileContent) {
            return this.wrapBlob(fileContent);
        }
        return new Promise(function (resolve) { return cy.fixture(filePath, fileEncoding).then(resolve); });
    };
    FileService.prototype.getFileEncoding = function (filePath) {
        var extension = this.getFileExt(filePath);
        var encoding = this.EXTENSION_TO_ENCODING[extension];
        return encoding || this.DEFAULT_ENCODING;
    };
    FileService.prototype.getFileExt = function (filePath) {
        if (!filePath) {
            return '';
        }
        var pos = filePath.lastIndexOf('.');
        if (pos === -1) {
            return '';
        }
        return filePath.slice(pos + 1);
    };
    FileService.prototype.getFileMimeType = function (filePath) {
        var extension = this.getFileExt(filePath);
        var mimeType = mime_1.getType(extension);
        return mimeType;
    };
    FileService.prototype.getFileName = function (filePath) {
        if (!filePath) {
            return '';
        }
        var indexSep = filePath.lastIndexOf(this.UNIX_SEP);
        if (indexSep === -1) {
            indexSep = filePath.lastIndexOf(this.WIN_SEP);
        }
        if (indexSep === -1) {
            return filePath;
        }
        return filePath.slice(indexSep + 1);
    };
    FileService.prototype.resolveFile = function (fixture, window) {
        var _this = this;
        var filePath = fixture.filePath, encoding = fixture.encoding, mimeType = fixture.mimeType, fileName = fixture.fileName, lastModified = fixture.lastModified;
        var fileMimeType = mimeType || this.getFileMimeType(filePath);
        var fileEncoding = encoding || this.getFileEncoding(filePath);
        var fileLastModified = lastModified || Date.now();
        return new Cypress.Promise(function (resolve) {
            return _this.getFileContent({
                filePath: filePath,
                fileContent: fixture.fileContent,
                fileEncoding: fileEncoding
            })
                .then(function (fileContent) {
                return _this.getFileBlobAsync({
                    fileContent: fileContent,
                    fileName: fileName,
                    mimeType: fileMimeType,
                    encoding: fileEncoding,
                    lastModified: fileLastModified,
                    window: window
                });
            })
                .then(resolve);
        });
    };
    FileService.prototype.defineGetBlob = function (encoding) {
        var _this = this;
        if (encoding === encoding_enum_1.ENCODING.BASE64)
            return function (fileContent, mimeType) {
                return _this.wrapBlob(Cypress.Blob.base64StringToBlob(fileContent, mimeType));
            };
        if (encoding === encoding_enum_1.ENCODING.BINARY)
            return function (fileContent, mimeType) {
                return _this.wrapBlob(Cypress.Blob.binaryStringToBlob(fileContent, mimeType));
            };
        return function (fileContent) { return Cypress.Promise.resolve(fileContent); };
    };
    FileService.prototype.resolveBlob = function (blob, params) {
        var fileName = params.fileName, fileContent = params.fileContent, mimeType = params.mimeType, window = params.window, lastModified = params.lastModified;
        var blobContent = blob;
        if (this.getFileExt(fileName) === file_extension_enum_1.FILE_EXTENSION.JSON) {
            blobContent = JSON.stringify(fileContent, null, 2);
        }
        var file = new window.File([blobContent], fileName, {
            type: mimeType,
            lastModified: lastModified
        });
        return file;
    };
    return FileService;
}());
exports["default"] = FileService;
