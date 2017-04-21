import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class CommonUtilService {

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    navigateTo(path: string): void {
        this.router.navigate([path]);
    }
}