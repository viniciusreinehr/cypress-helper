export default class HelperService {
  convertSize(size: number): number {
    return parseFloat((size / 1024).toFixed(1))
  }

  convertTime(size: number): number {
    return parseFloat((size / 1000).toFixed(2))
  }

  convertScore(val: number): number {
    return parseInt(`${val * 100}`)
  }
}
