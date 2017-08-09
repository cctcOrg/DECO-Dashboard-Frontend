import { Injectable } from '@angular/core';

@Injectable()
export class CasesService {
    userId: number;

    setUserId(id: number) {
        this.userId = id;
    }
    getUserId() {
        return this.userId;
    }
}