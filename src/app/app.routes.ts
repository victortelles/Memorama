import { Routes } from '@angular/router';

export const routes: Routes = [
    // default
    { path: '', redirectTo: '', pathMatch: 'full' },
    //Ruta comodin
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
