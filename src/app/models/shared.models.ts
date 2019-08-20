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