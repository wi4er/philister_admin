import { Injectable } from '@angular/core';
import { AuthByPasswordGQL, AuthByPasswordMutation, User } from "../query/types";
import { Observable, of, OperatorFunction } from "rxjs";
import { MutationResult } from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user?: User | null = null;


  fetchAuth(login: string, password: string): void {
    this.authMutation.mutate({
      login: login,
      password: password,
    })
      .subscribe(res => {
        this.user = res.data?.auth?.authByPassword;

        console.log(this.user)
      })
  }

  constructor(
    private authMutation: AuthByPasswordGQL
  ) {
  }
}
