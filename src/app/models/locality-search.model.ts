import { HttpErrorResponse } from '@angular/common/http';

export interface ILocalityList {
    code: string;
    count: number;
    message: string;
    list: ILocality[];
}

export interface ILocality {
    dt: number;
    id: number;
    name: string;
    clouds: ICloud;
    coord: ICoord;
    main: IMain;
    sys: ISys;
    weather: IWeather[];
    wind: IWind;
}

export interface ICloud {
    all: number;
}

export interface ICoord {
    lat: number;
    lon: number;
}

export interface IMain {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface ISys {
    country: string;
}

export interface IWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface IWind {
    speed: number;
    degree: number;
}

export interface LocalityListState {
    searchingString: string;
    loading: boolean;
    error: HttpErrorResponse;
    localities: ILocality[]
};