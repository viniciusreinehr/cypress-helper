import { OpportunitiesInterface, ScoreInterface } from "../interfaces/printer.interface";
import ColorService from "./color.service"
import HelperService from "./helper.service";

export default class PrinterService {
  private SIZE = 100;
  private OP_SIZE = 130;

  constructor(
    private readonly color = new ColorService(),
    private readonly helper = new HelperService()
  ) {}

  text(text: string): void {
    console.log(`${text}`)
  }

  score(text: ScoreInterface[]): void {
    const bar = this.replicate(this.color.heavyHorizontal, this.SIZE)
    const pipe = this.color.heavyVertical
    const topR = this.color.heavyDownAndRight
    const topL = this.color.heavyDownAndLeft
    const bottomR = this.color.heavyUpAndRight
    const bottomL = this.color.heavyUpAndLeft

    console.log(`${this.pad(topR, 4, 0)}${this.pad(bar, 0, 4)}${topL}`)
    console.log(`${this.pad(pipe, 4, 0)}${this.color.bold}${this.pad(`Pontuação geral do Lighthouse`, 0, this.SIZE)}${this.color.reset}${this.pad(pipe, 0, 4)}`)
    text.forEach((score: ScoreInterface) => {
      let scorePoints = this.helper.convertScore(score.value)
      let logger = this.pad(pipe, 4, 0);
      logger+= this.pad(`${score.name}:`, 0, 30)
      if (scorePoints < 50) {
        logger+= this.color.red
        logger+= this.pad(`${scorePoints}`, 0, 70)
        logger+= this.color.reset
      } else if (scorePoints >= 50 && scorePoints < 90){
        logger+= this.color.yellow
        logger+= this.pad(`${scorePoints}`, 0, 70)
        logger+= this.color.reset
      } else {
        logger+= this.color.green
        logger+= this.pad(`${scorePoints}`, 0, 70)
        logger+= this.color.reset
      }
      logger+= this.pad(pipe, 0, 4)
      console.log(logger)
    })
    console.log(`${this.pad(bottomR, 4, 0)}${this.pad(bar, 0, 4)}${bottomL}`)
  }

  opportunitiesAndDiagnostics(text: OpportunitiesInterface[]): void {
    const bar = this.replicate(this.color.heavyHorizontal, this.OP_SIZE)
    const pipe = this.color.heavyVertical
    const topR = this.color.heavyDownAndRight
    const topL = this.color.heavyDownAndLeft
    const bottomR = this.color.heavyUpAndRight
    const bottomL = this.color.heavyUpAndLeft

    console.log(`${this.pad(topR, 4, 0)}${this.pad(bar, 0, 4)}${topL}`)
    console.log(`${this.pad(pipe, 4, 0)}${this.color.bold}${this.pad(`Sugestões`, 0, this.OP_SIZE)}${this.color.reset}${this.pad(pipe, 0, 4)}`)

    text.forEach((info: OpportunitiesInterface) => {
      let scoreValue = info.value
      let logger = this.pad(pipe, 4, 0);
      logger+= this.pad(`${info.name}:`, 0, 10)
      logger+= this.color.purple
      if(scoreValue.length >= 119) scoreValue = scoreValue.substr(0, 118)
      logger+= this.pad(`${scoreValue}`, 0, 120)
      logger+= this.color.reset
      logger+= this.pad(pipe, 0, 4)
      console.log(logger)
    })
    console.log(`${this.pad(bottomR, 4, 0)}${this.pad(bar, 0, 4)}${bottomL}\n`)
  }

  break(number = 1): string {
    return this.replicate(this.color.break, number);
  }

  private replicate(value: string, times: number): string {
    const resp = [];
    for (let i = 0; i < times; i++) {
      resp.push(value)
    }
    return resp.join('')
  }

  private pad(text: string, left: number, right: number) {
    return text.padStart(left, this.color.space).padEnd(right, this.color.space)
  }
}
