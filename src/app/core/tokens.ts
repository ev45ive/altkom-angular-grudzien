import { InjectionToken } from '@angular/core';
import { AlbumItemView } from './model/album';

const tokens = {};
export const API_URL = new InjectionToken<string>('API_URL');
export const INITIAL_RESULTS = new InjectionToken<AlbumItemView[]>('INITIAL_RESULTS');
