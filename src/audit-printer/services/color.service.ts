export default class ColorService {
  isWindows = process.platform === 'win32'

  get green(): string {
    return '\x1B[32m'
  }

  get red(): string {
    return '\x1B[31m'
  }

  get yellow(): string {
    return '\x1b[33m'
  }

  get purple(): string {
    return '\x1b[95m'
  }

  get reset(): string {
    return '\x1B[0m'
  }

  get bold(): string {
    return '\x1b[1m'
  }

  get dim(): string {
    return '\x1b[2m'
  }

  get tick(): string {
    return this.isWindows ? '\u221A' : '✓'
  }

  get cross(): string {
    return this.isWindows ? '\u00D7' : '✘'
  }

  get whiteSmallSquare(): string {
    return this.isWindows ? '\u0387' : '▫'
  }

  get heavyHorizontal(): string {
    return this.isWindows ? '\u2500' : '━'
  }

  get heavyVertical(): string {
    return this.isWindows ? '\u2502' : '┃'
  }

  get heavyUpAndRight(): string {
    return this.isWindows ? '\u2514' : '└'
  }

  get heavyUpAndLeft(): string {
    return this.isWindows ? '\u2518' : '┘'
  }

  get heavyDownAndRight(): string {
    return this.isWindows ? '\u250c' : '┌'
  }

  get heavyDownAndLeft(): string {
    return this.isWindows ? '\u2510' : '┐'
  }

  get heavyVerticalAndRight(): string {
    return this.isWindows ? '\u251C' : '┣'
  }

  get heavyDownAndHorizontal(): string {
    return this.isWindows ? '\u252C' : '┳'
  }

  get doubleLightHorizontal(): string {
    return '──'
  }

  get space(): string {
    return '\u0020'
  }

  get break(): string {
    return this.isWindows ? '\r\n' : '\n'
  }
}
