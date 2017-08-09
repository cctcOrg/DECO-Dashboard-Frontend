
export class DigitalMediasService {
    deviceId: number;

    setDeviceId(id: number) {
        this.deviceId = id;
    }
    getDeviceId() {
        return this.deviceId;
    }
}