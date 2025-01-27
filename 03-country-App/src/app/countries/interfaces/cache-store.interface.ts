import { Country } from './country';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermContries;
  byCountries: TermContries;
  byRegion: RegionContries;
}

export interface TermContries {
  term: string;
  countries: Country[];
}

export interface RegionContries {
  region?: Region;
  countries: Country[];
}
