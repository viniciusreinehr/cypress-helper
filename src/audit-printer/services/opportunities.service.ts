import { Audits } from "../interfaces/audit.interface";
import { ScoreInterface } from "../interfaces/printer.interface";
import PrinterService from "./printer.service";
import HelperService from "./helper.service";

export default class OpportunitiesService {
    constructor (
        private readonly printer = new PrinterService(),
        private readonly helper = new HelperService()
    ){}

    print(categories: Audits): void {
        this.getAudit(categories)
    }

    private getAudit (item: Audits): void {
        this.printer.text("OPPORTUNITIES")
        this.printer.text("Opportunity and diagnostic")

        Object.keys(item).forEach((key) => {
            const scorePoints = this.helper.convertScore(item[key].score);
            if(scorePoints === 100 || scorePoints === 0) return;
            this.getOpportunities(item[key]);
        })
    }

    private getOpportunities(item) {
        if (item?.details?.type !== 'opportunity') return;
        this.printer.text(
            `OPPORTUNITY: ${item.title} ${item.displayValue} - Time spent: ${this.helper.convertTime(item.numericValue)}` 
        )

        let items  = item?.details?.items;
        
        if(Object.keys(items).length > 0) {
            this.printer.text(" - Sugestões:")

            Object.keys(items).forEach((key) => {
                let protocol = items[key]?.protocol? `${items[key]?.protocol}`: '';

                let url = items[key]?.url? `${items[key]?.url}: ` : '';

                if(protocol || url != '') this.printer.text(`URL: ${protocol}${url}`)

                if(items[key]?.wastedBytes) {
                    this.printer.text(` Tamanho: ${this.helper.convertSize(items[key].totalBytes)} Kb`)

                    this.printer.text(` Redução possível: ${items[key].wastedBytes} kb`)
                }

                if(items[key]?.wastedMs) {
                    this.printer.text(` Redução possível: ${this.helper.convertSize(items[key].wastedMs)} s`)
                }

            })
        }

    }
}