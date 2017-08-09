
export class ImagesService {
    dmId: number;

    setDmId(id: number) {
        this.dmId = id;
    }
    getDmId() {
        return this.dmId;
    }
}