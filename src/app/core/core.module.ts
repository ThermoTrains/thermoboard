import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { Apollo, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LocalStorageService } from './local-storage/local-storage.service';

export function getInitialState() {
  return LocalStorageService.loadInitialState();
}

@NgModule({
  imports: [
    // Angular
    CommonModule,

    // Apollo
    HttpClientModule, // provides HttpClient for HttpLink
    HttpLinkModule,
    ApolloModule,

    // ngrx
    StoreModule.forRoot(
      {
        auth: authReducer
      },
      { initialState: getInitialState }
    ),
    EffectsModule.forRoot([AuthEffects])
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule,
              apollo: Apollo,
              httpLink: HttpLink) {

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }

    apollo.create({
      link: httpLink.create({
        uri: '/api/graphql'
      }),
      cache: new InMemoryCache()
    });
  }
}
