/*
Breadcrumb Service

displays or removes breadcrumbs in toolbar

*/
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class BreadcrumbService {
    //Breadcrumb booleans
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

    constructor() {}

    //Displays Case breadcrumb and removes all other breadcrumbs
    viewCases() {
        this.caseSource.next(true);
        this.deviceSource.next(false);
        this.digitalMediaSource.next(false);
        this.imageSource.next(false);
        this.fileSource.next(false);
    }

    //Displays Case, Device breadcrumbs and removes all other breadcrumbs    
    viewDevices() {
        this.caseSource.next(true);
        this.deviceSource.next(true);
        this.digitalMediaSource.next(false);
        this.imageSource.next(false);
        this.fileSource.next(false);
    }

    //Displays Case, Device, DigitalMedia breadcrumbs and removes all other breadcrumbs    
    viewDigitalMedias() {
        this.caseSource.next(true);
        this.deviceSource.next(true);
        this.digitalMediaSource.next(true);
        this.imageSource.next(false);
        this.fileSource.next(false);
    }

    //Displays Case, Device, DigitalMedia, Image breadcrumbs and removes File breadcrumb    
    viewImages() {
        this.caseSource.next(true);
        this.deviceSource.next(true);
        this.digitalMediaSource.next(true);
        this.imageSource.next(true);
        this.fileSource.next(false);
    }

    //Displays all breadcrumbs
    viewFiles() {
        this.caseSource.next(true);
        this.deviceSource.next(true);
        this.digitalMediaSource.next(true);
        this.imageSource.next(true);
        this.fileSource.next(true);
    }
}