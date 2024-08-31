import {provideHttpClient} from "@angular/common/http";
import {ApplicationConfig} from "@angular/core";

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        // provideZoneChangeDetection({ eventCoalescing: true }),
        // provideRouter([...appRoutes]),
        // provideStore({ cardState: cardsReducer.reducer }),
        // provideEffects([CardEffects]),
    ],
};
