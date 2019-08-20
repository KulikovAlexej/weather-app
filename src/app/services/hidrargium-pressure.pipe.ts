import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hidrargiumPressure'
})
export class HidrargiumPressure implements PipeTransform {
    transform(hPaPressure: number): string {
        if(typeof(hPaPressure) !== 'number') return '-';
        const hidrargiumPressure = hPaPressure * 0.75006;
        return `${hidrargiumPressure.toFixed(1)} мм рт.ст.`;
    }
}
