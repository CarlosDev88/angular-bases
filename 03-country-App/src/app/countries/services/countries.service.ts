import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveLocalSrorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountryesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))

    );
  }

  public searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountryesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(()=> this.saveLocalSrorage())
    );
  }

  public searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;
    return this.getCountryesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = { term: country, countries })
      ),
      tap(()=> this.saveLocalSrorage())
    );
  }

  public searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountryesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { countries, region })),
      tap(()=> this.saveLocalSrorage())
    );
  }
}
