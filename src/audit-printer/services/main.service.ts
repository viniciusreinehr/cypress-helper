import Audit from "../interfaces/audit.interface";
import ScoreService from "./score.service";

export default class AuditPrinter {
  constructor(
    private itens: Audit,
    private readonly score = new ScoreService()
  ) {}

  print(): void {
    this.score.print(this.itens.lhr.categories)
  }
}