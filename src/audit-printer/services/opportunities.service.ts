import { Audits } from "../interfaces/audit.interface";
import { OpportunitiesInterface } from "../interfaces/printer.interface";
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
        this.printer.text("\n\nOPPORTUNITY\n")

        Object.keys(item).forEach((key) => {
            const scorePoints = this.helper.convertScore(item[key].score);
            if(scorePoints === 100 || scorePoints === 0) return;
            this.getOpportunities(item[key]);
        })
    }

    private getOpportunities(item) {
        if (item?.details?.type !== 'opportunity') return;
        this.printer.text(
            `OPPORTUNITY: ${item.title} ${item.displayValue} - Time spent: ${this.helper.convertTime(item.numericValue)}s` 
        )

        let items  = item?.details?.items;

        const opValues: OpportunitiesInterface[] = []
        
        if(Object.keys(items).length > 0) {
            Object.keys(items).forEach((key) => {
                let protocol = items[key]?.protocol? `${items[key]?.protocol}`: '';

                let url = items[key]?.url? `${items[key]?.url}: ` : '';

                if(protocol || url != '') opValues.push({name: 'URL', value:`${protocol}${url}`})

                if(items[key]?.wastedBytes) {
                    opValues.push({name: 'Tamanho', value: `${this.helper.convertSize(items[key].totalBytes)} Kb`})
                    opValues.push({name: 'Redução', value: `${this.helper.convertSize(items[key].wastedBytes)} kb`})
                }

                if(items[key]?.wastedMs) {
                    opValues.push({name: 'Redução', value: `${this.helper.convertTime(items[key].wastedMs)} s`})
                }

            })
            this.printer.opportunitiesAndDiagnostics(opValues);
        }

    }
}