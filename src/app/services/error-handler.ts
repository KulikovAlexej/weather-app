import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(
        private injector: Injector
    ) {}

    handleError(error: Error | HttpErrorResponse) {
        const notifyService = this.injector.get(MatSnackBar);
        if (error instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
                notifyService.open(`You have not internet connection!`, 'OK')
            } else {
                notifyService.open(`Server error ${error.type} ${error.url} ${error.status} ${error.statusText}`, 'OK')
            }
        } else {
            notifyService.open(`${error.name} ${error.message}`, 'OK')
        }
        // Log the error anyway
        // send to Sentry
        console.error(error);
    }
}
