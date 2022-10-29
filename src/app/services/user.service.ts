import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { User } from "../model/User";

const AUTH_BY_PASSWORD = gql`
  mutation AuthByPassword($login: String!, $password: String!){
    auth {
      authByPassword(login: $login, password: $password) {
        id
        login
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  fetchAuth() {
    console.log("CLICK")

    this.apollo.mutate<{
      auth: {
        authByPassword: User
      }
    }>({
      mutation: AUTH_BY_PASSWORD,
      variables: {
        login: "admin",
        password: "qwerty",
      }
    }).subscribe((res) => {
      console.log(res.data?.auth.authByPassword)
    })
  }

  constructor(private apollo: Apollo) {
  }
}
