
export class DevicesService {
    caseId: number;

    setCaseId(id: number) {
        this.caseId = id;
    }
    getCaseId() {
        return this.caseId;
    }
}