import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wind'
})
export class Wind implements PipeTransform {
    transform(windDegree: number): string {
        if(typeof(windDegree) !== 'number') {
            return 'неизвестный';
        }

        // можно наплодить промежуточные ветра

        if(windDegree >= 0 && windDegree < 45) {
            return 'северный'
        }
        if(windDegree >= 45 && windDegree < 135) {
            return 'восточный'
        }
        if(windDegree >= 135 && windDegree < 225) {
            return 'южный'
        }
        if(windDegree >= 225 && windDegree < 315) {
            return 'западный'
        }
        if(windDegree >= 315 && windDegree <= 360) {
            return 'северный'
        }
        return 'нейзвестный';
    }
}
