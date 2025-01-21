import { Routes } from "@angular/router";


export default [
    {
        path: '',
        loadComponent: () => import('../cart/cart.component').then(m => m.CartComponent),
    }
] as Routes;