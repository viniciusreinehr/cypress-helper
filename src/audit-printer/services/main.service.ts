import Audit from "../interfaces/audit.interface";
import ScoreService from "./score.service";
import OpportunitiesService from "./opportunities.service";
import TablesService from "./tables.service";

export default class AuditPrinter {
  constructor(
    private itens: Audit,
    private readonly score = new ScoreService(),
    private readonly opportunities = new OpportunitiesService(),
    private readonly table = new TablesService()
  ) {}

  print(): void {
    this.score.print(this.itens.lhr.categories)
    this.opportunities.print(this.itens.lhr.audits)
    this.table.print(this.itens.lhr.audits)
  }
}