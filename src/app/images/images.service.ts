
// like the other services, the ImagesService is a way to keep track
// of the digital media ID
export class ImagesService {
    dmId: number;

    setDmId(id: number) {
        this.dmId = id;
    }
    getDmId() {
        return this.dmId;
    }
}