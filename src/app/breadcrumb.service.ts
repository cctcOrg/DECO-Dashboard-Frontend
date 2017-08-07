import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class BreadcrumbService {
    private caseSource = new BehaviorSubject<boolean>(true)
    currentCase = this.caseSource.asObservable();

    private deviceSource = new BehaviorSubject<boolean>(true)
    currentDevice = this.deviceSource.asObservable();

    private digitalMediaSource = new BehaviorSubject<boolean>(true)
    currentDigitalMedia = this.digitalMediaSource.asObservable();

    private imageSource = new BehaviorSubject<boolean>(true)
    currentImage = this.imageSource.asObservable();

    private fileSource = new BehaviorSubject<boolean>(true)
    currentFile = this.fileSource.asObservable();

    private caseIdSource = new BehaviorSubject<number>(-1)
    currentCaseId = this.caseIdSource.asObservable();

    private deviceIdSource = new BehaviorSubject<number>(-1)
    currentDeviceId = this.deviceIdSource.asObservable();

    private digitalMediaIdSource = new BehaviorSubject<number>(-1)
    currentDigitalMediaId = this.digitalMediaIdSource.asObservable();

    private imageIdSource = new BehaviorSubject<number>(-1)
    currentImageId = this.imageIdSource.asObservable();

    private fileIdSource = new BehaviorSubject<number>(-1)
    currentFileId = this.fileIdSource.asObservable();


    constructor() {}

    viewCases() {
        this.caseSource.next(true);
        this.deviceSource.next(false);
        this.digitalMediaSource.next(false);
        this.imageSource.next(false);
        this.fileSource.next(false);
    }

    viewDevices() {
        this.caseSource.next(true);
        this.deviceSource.next(true);
        this.digitalMediaSource.next(false);
        this.imageSource.next(false);
        this.fileSource.next(false);
    }

    viewDigitalMedias() {
        this.caseSource.next(true);
        this.deviceSource.next(true);
        this.digitalMediaSource.next(true);
        this.imageSource.next(false);
        this.fileSource.next(false);
    }

    viewImages() {
        this.caseSource.next(true);
        this.deviceSource.next(true);
        this.digitalMediaSource.next(true);
        this.imageSource.next(true);
        this.fileSource.next(false);
    }

    viewFiles() {
        this.caseSource.next(true);
        this.deviceSource.next(true);
        this.digitalMediaSource.next(true);
        this.imageSource.next(true);
        this.fileSource.next(true);
    }

    setCaseId(caseId: number) {
        this.caseIdSource.next(caseId);
    }

    setDeviceId(deviceId: number) {
        this.deviceIdSource.next(deviceId);
    }
    
    setDigitalMediaId(digitalMediaId: number) {
        this.digitalMediaIdSource.next(digitalMediaId);
    }

    setImageId(imageId: number) {
        this.imageIdSource.next(imageId);
    }

    setFileId(fileId: number) {
        this.fileIdSource.next(fileId);
    }
}