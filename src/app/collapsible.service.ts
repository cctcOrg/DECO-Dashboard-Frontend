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
        this.caseSource.next(null);
        this.deviceSource.next(null);
        this.digitalMediaSource.next(null);
        this.imageSource.next(null);
    }

    addCaseCollapsible(Case:Case) {
        this.caseSource.next(Case); 
        this.deviceSource.next(null);
        this.digitalMediaSource.next(null);
        this.imageSource.next(null);
    }
}