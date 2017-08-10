import { Injectable } from '@angular/core';

@Injectable()

/**
 * The idea behind each Component(Cases, Devices, etc) having a Service is that it is a way
 * to access the id of its parent component. In this instance, the user is the parent of Cases,
 * so the case service is responsible for getting/setting the userId. 
 */
export class CasesService {
    userId: number;

    setUserId(id: number) {
        this.userId = id;
    }
    getUserId() {
        return this.userId;
    }
}