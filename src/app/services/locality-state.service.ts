import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpParams, HttpClient } from '@angular/common/http';
import { ILocality, LocalityListState, ILocalityList } from '../models/locality-search.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, distinctUntilChanged } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class LocalityStateService {

    private initialState: LocalityListState = {
        searchingString: '',
        loading: false,
        error: null,
        localities: []
    }

    private localityState = new BehaviorSubject<LocalityListState>(this.initialState);

    constructor(
        private http: HttpClient
    ) { }

    searchCity(city: string): Observable<ILocalityList> {
        const params: HttpParams = new HttpParams()
            .set('q', city)
            .set('sort', 'population')
            .set('appid', environment.apiKey)
            .set('lang', 'ru');

        return this.http.get<ILocalityList>(`api/find`, { params: params })
    }

    getState$(): Observable<LocalityListState> {
        return this.localityState.asObservable();
    }

    isLoading$(): Observable<boolean> {
        return this.getState$().pipe(
            map(state => state.loading),
            distinctUntilChanged()
        )
    }

    getSearchingString$(): Observable<string> {
        return this.getState$().pipe(
            map(state => state.searchingString),
            distinctUntilChanged()
        )
    }

    getLocalities$(): Observable<ILocality[]> {
        return this.getState$().pipe(
            map(state => state.localities),
            distinctUntilChanged()
        )
    }

    getError$(): Observable<HttpErrorResponse> {
        return this.getState$().pipe(
            map(state => state.error),
            distinctUntilChanged()
        )
    }

    setState(newState: LocalityListState): void {
        this.localityState.next(newState);
    }

    toInitialState(): void {
        this.localityState.next(this.initialState);
    }
}
