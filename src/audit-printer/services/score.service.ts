import { Categories } from "../interfaces/audit.interface";
import { ScoreInterface } from "../interfaces/printer.interface";
import PrinterService from "./printer.service";

export default class ScoreService {
  constructor (
    private readonly printer = new PrinterService()
  ) {}

  print(categories: Categories): void {
    const score: ScoreInterface[] = [
      {
        name: categories.accessibility.title,
        value: categories.accessibility.score,
      },
      {
        name: categories["best-practices"].title,
        value: categories["best-practices"].score,
      },
      {
        name: categories.performance.title,
        value: categories.performance.score,
      },
      {
        name: categories.pwa.title,
        value: categories.pwa.score,
      },
      {
        name: categories.seo.title,
        value: categories.seo.score,
      }
    ];
    this.printer.score(score)
  }
}
