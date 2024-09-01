import {provideHttpClient} from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        // provideExperimentalZonelessChangeDetection(),
        // provideRouter([...appRoutes]),
        // provideStore({ cardState: cardsReducer.reducer }),
        // provideEffects([CardEffects]),
    ],
};
