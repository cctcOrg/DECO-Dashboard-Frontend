import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Case } from './case';
import { Device } from './device'; 
import { DigitalMedia } from './digital-media'; 
import { Image } from './image';
import { File } from './file'; 

@Injectable()
export class CollapsibleService {
    private caseSource = new BehaviorSubject<Case>(null);
    currentCase = this.caseSource.asObservable();  

    private deviceSource = new BehaviorSubject<Device>(null);
    currentDevice = this.deviceSource.asObservable();  

    private digitalMediaSource = new BehaviorSubject<DigitalMedia>(null);
    currentDigitalMedia = this.digitalMediaSource.asObservable();  

    private imageSource = new BehaviorSubject<Image>(null);
    currentImage = this.imageSource.asObservable();  

    constructor() {}

    removeAllCollapsible() {
        console.log("removed");
        this.caseSource.next(null);
        this.deviceSource.next(null);
        this.digitalMediaSource.next(null);
        this.imageSource.next(null);
    }

    removeAfterCasesCollapsible() {
        this.deviceSource.next(null);
        this.digitalMediaSource.next(null);
        this.imageSource.next(null);
    }

    removeAfterDevicesCollapsible() {
        this.digitalMediaSource.next(null);
        this.imageSource.next(null);
    }

    removeAfterDigitalMediaCollapsible() {
        this.imageSource.next(null);
    }

    addCaseCollapsible(Case:Case) {
        this.caseSource.next(Case); 
    }

    addDeviceCollapsible(Device: Device) {
        this.deviceSource.next(Device); 
    }

    addDigitalMediaCollapsible(DigitalMedia: DigitalMedia) {
        this.digitalMediaSource.next(DigitalMedia);
    }

    addImageCollapsible(Image: Image) {
        this.imageSource.next(Image); 
    }
}