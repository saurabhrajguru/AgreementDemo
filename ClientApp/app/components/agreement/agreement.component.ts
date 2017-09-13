import { Component, Inject, AfterViewInit, ViewChildren, ViewChild, TemplateRef } from '@angular/core';
import { Http } from '@angular/http';
import { AgreementService } from '../../services/agreementService'
import { AgreementModel } from '../../models/agreement/agreementModel'
import { Ng2OrderPipe } from 'ng2-order-pipe';

@Component({
    selector: 'agreement',
    templateUrl: './agreement.component.html',
    providers: [AgreementService]
})
export class AgreementComponent implements AfterViewInit {

    public newAgreementModel: AgreementModel;
    public agreements: AgreementModel[] = [];
    public selectedAgreement: AgreementModel | null;
    public backupAgreement: AgreementModel | null;
    public order: string = 'Name';
    public reverse: boolean = false;

    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    constructor(private agreementService: AgreementService) {
        this.newAgreementModel = new AgreementModel(null, null, null, null, null, null, null);
    }

    ngAfterViewInit(): void {
        this.loadAgreements();
    }

    private loadAgreements() {
        this.agreementService.GetList().subscribe((res) => {
            let result = res.json() as AgreementModel[];
            this.agreements = result;
        });
    }

    public loadTemplate(agr: AgreementModel) {
        if (this.selectedAgreement && this.selectedAgreement.Id == agr.Id)
            return this.editTemplate;
        else
            return this.readOnlyTemplate;
    }

    public editAgreement(agr: AgreementModel) {
        this.selectedAgreement = agr;
        this.backupAgreement = Object.assign({}, agr);
    }

    public cancelEdit() {
        let agreement = <AgreementModel>this.selectedAgreement;
        let filterAgreement = this.agreements.filter((item) => { return item.Id === agreement.Id });
        if (filterAgreement != null && filterAgreement.length > 0) {
            let updateIndex = this.agreements.indexOf(filterAgreement[0]);
            this.agreements[updateIndex] = <AgreementModel>this.backupAgreement;
        }

        this.selectedAgreement = null;
    }

    public saveAgreement() {
        if (this.selectedAgreement) {
            this.agreementService.Update(this.selectedAgreement).subscribe(() => {
                this.selectedAgreement = null;
                this.loadAgreements();
            })
        }
    }

    public deleteAgreement(agr: AgreementModel) {
        this.agreementService.Delete(agr.Id).subscribe((res) => {
            this.loadAgreements();
        });
    }

    public deleteAll() {
        this.agreementService.DeleteAll().subscribe((res) => {
            this.loadAgreements();
        });
    }

    public onAddFormSubmit(form: any) {
        this.agreementService.Add(this.newAgreementModel).subscribe(res => {
            this.loadAgreements();
            form.resetForm({});
        });
    }

    setOrder(value: string) {
        if (this.order === value)
            this.reverse = !this.reverse;

        this.order = value;
    }
}