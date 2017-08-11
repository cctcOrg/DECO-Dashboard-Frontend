import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Case } from './case';
import { Device } from './device'; 
import { DigitalMedia } from './digital-media'; 
import { Image } from './image';
import { File } from './file'; 

@Injectable()
export class CollapsibleService {
    private activeCaseBoolean = new BehaviorSubject<boolean>(null);
    private activeDeviceBoolean = new BehaviorSubject<boolean>(null);
    private activeDigitalMediaBoolean = new BehaviorSubject<boolean>(null);
    private activeImageBoolean = new BehaviorSubject<boolean>(null);
   
    activeCase = this.activeCaseBoolean.asObservable();
    activeDevice = this.activeDeviceBoolean.asObservable();
    activeDigitalMedia = this.activeDigitalMediaBoolean.asObservable();
    activeImage = this.activeImageBoolean.asObservable();

    private caseSource = new BehaviorSubject<Case>(null);
    currentCase = this.caseSource.asObservable();  

    private deviceSource = new BehaviorSubject<Device>(null);
    currentDevice = this.deviceSource.asObservable();  

    private digitalMediaSource = new BehaviorSubject<DigitalMedia>(null);
    currentDigitalMedia = this.digitalMediaSource.asObservable();  

    private imageSource = new BehaviorSubject<Image>(null);
    currentImage = this.imageSource.asObservable();  

    constructor() { }

    removeAllCollapsible() {
        console.log("Removing collapsibles...");

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
        
        this.activeCaseBoolean.next(true);
    }

    addDeviceCollapsible(Device: Device) {
        this.deviceSource.next(Device);
        
        this.activeCaseBoolean.next(false);
        this.activeDeviceBoolean.next(true);

        console.log("BOOLEAN: " + this.activeCaseBoolean.getValue())
    }

    addDigitalMediaCollapsible(DigitalMedia: DigitalMedia) {
        this.digitalMediaSource.next(DigitalMedia);

        this.activeCaseBoolean.next(false);
        this.activeDeviceBoolean.next(false);
        this.activeDigitalMediaBoolean.next(true);
    }

    addImageCollapsible(Image: Image) {
        this.imageSource.next(Image); 

        this.activeCaseBoolean.next(false);
        this.activeDeviceBoolean.next(false);
        this.activeDigitalMediaBoolean.next(false);
        this.activeImageBoolean.next(true);
    }
}