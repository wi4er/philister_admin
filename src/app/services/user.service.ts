import { Injectable } from '@angular/core';
import { AuthByPasswordGQL, GetMyselfGQL, GetUserListGQL, User } from "../../graph/types";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user?: User

  constructor(
    private authMutation: AuthByPasswordGQL,
    private getMyselfQuery: GetMyselfGQL,
    private getUserListQuery: GetUserListGQL
  ) {
  }

  async fetchAuth(login: string, password: string) {
    const res = this.authMutation.mutate({
      login: login,
      password: password,
    }, {
      fetchPolicy: 'network-only'
    });

    const { data } = await firstValueFrom(res);
    this.user = data?.auth?.authByPassword as User;

    return this.user;
  }

  fetchMyself() {
    const res = this.getMyselfQuery.fetch({}, {
      fetchPolicy: 'network-only',
    });

    res.subscribe(resp => {
      this.user = resp.data?.user?.myself as User;
    });
  }

  fetchList() {
    return this.getUserListQuery.fetch();
  }
}
