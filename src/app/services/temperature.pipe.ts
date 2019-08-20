import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperatureConverter'
})
export class Temperature implements PipeTransform {
    transform(calvinDegree: number, isCelsium?: boolean): string {
        if(typeof(calvinDegree) !== 'number') {
            return null;
        }
        return isCelsium ? calvinToCelsium(calvinDegree) : calvinToFarengeit(calvinDegree);
    }
}


function calvinToCelsium(calvin: number): string {
    const celciusDegrees = calvin - 273.15;
    return `${celciusDegrees.toFixed(1)} °C`;
}

function calvinToFarengeit(calvin: number): string {
    const farengeitDegrees = 9 * (calvin - 273.15)/5 + 32;
    return `${farengeitDegrees.toFixed(1)} °F`;
}