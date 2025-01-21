import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interface";
import { ProductsService } from "./products.service";
import { signalSlice } from "ngxtension/signal-slice";
import { map, Observable, switchMap } from "rxjs";

interface State {
    product: Product | null;
    status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductDetailStateService {
    private productsService = inject(ProductsService);

    private initialstate: State = {
        product: null,
        status: 'loading' as const,
    };

    state = signalSlice({
        initialState: this.initialstate,
        actionSources: {
            getById: (_state, $: Observable<string>) =>
                $.pipe(
                    switchMap((id) => this.productsService.getProduct(id)),
                    map((data) => ({ product: data, status: 'success' as const })),
                ),
        },
    });
}