import { HttpErrorResponse } from '@angular/common/http';
import { ICloud, ICoord, IMain, ISys, IWeather, IWind } from './shared.models';

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

export interface LocalityListState {
    searchingString: string;
    loading: boolean;
    error: HttpErrorResponse;
    localities: ILocality[]
};