import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wind'
})
export class Wind implements PipeTransform {
    transform(windDegree: number): string {
        if(typeof(windDegree) !== 'number') {
            return 'unknown';
        }

        if(windDegree >= 0 && windDegree < 45) {
            return 'nord'
        }
        if(windDegree >= 45 && windDegree < 135) {
            return 'east'
        }
        if(windDegree >= 135 && windDegree < 225) {
            return 'south'
        }
        if(windDegree >= 225 && windDegree < 315) {
            return 'west'
        }
        if(windDegree >= 315 && windDegree <= 360) {
            return 'nord'
        }
        return 'unknown';
    }
}
