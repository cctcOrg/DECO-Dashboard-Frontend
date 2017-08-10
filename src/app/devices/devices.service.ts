
// much like the Cases Service, the Device Service simply keeps track of the 
// caseId specific to that device.
export class DevicesService {
    caseId: number;

    setCaseId(id: number) {
        this.caseId = id;
    }
    getCaseId() {
        return this.caseId;
    }
}