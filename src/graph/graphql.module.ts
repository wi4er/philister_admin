import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';

export function useFactory(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({
      uri: environment.graphql.uri,
      withCredentials: true,
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ ApolloModule ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory,
      deps: [ HttpLink ],
    },
  ],
})
export class GraphQLModule {
}
