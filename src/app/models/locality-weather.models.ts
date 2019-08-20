import { ICloud, ICoord, IMain, ISys, IWeather, IWind } from "./shared.models";
import { HttpErrorResponse } from '@angular/common/http';

export interface IWeatherResponse {
    base: string;
    cod: number;
    dt: number;
    id: number;
    name: string;
    visibility: number;
    timezone: number;
    clouds: ICloud;
    coord: ICoord;
    main: IMain;
    sys: ISys;
    weather: IWeather[];
    wind: IWind;
}

export interface IWeatherState {
    weather: IWeatherResponse;
    loading: boolean;
    error: HttpErrorResponse;
    inCelsius: boolean;
}