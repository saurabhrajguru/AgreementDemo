export class AgreementModel {
    constructor(public Id: number | null,
        public Name: string | null,
        public Description: string | null,
        public Total: number | null,
        public StartDate: Date | null,
        public EndDate: Date | null,
        public Terms: number | null
    ) {
    }
}