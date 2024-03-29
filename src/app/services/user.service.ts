import { Injectable } from '@angular/core';
import { AuthByLoginGQL, GetMyselfGQL, GetUserListGQL, LogoutMutationGQL, User } from "../../graph/types";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user?: User

  constructor(
    private authMutation: AuthByLoginGQL,
    private logoutMutation: LogoutMutationGQL,
    private getMyselfQuery: GetMyselfGQL,
    private getUserListQuery: GetUserListGQL,
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
    this.user = data?.auth?.authByLogin as User;

    return this.user;
  }

  async logout(): Promise<boolean> {
    return firstValueFrom(this.logoutMutation.mutate())
      .then(res => {
        const logout = res.data?.auth?.logout ?? false;

        if (logout) {
          delete this.user;
        }

        return logout;
      });
  }

  fetchMyself(): Promise<User | null> {
    return firstValueFrom(
      this.getMyselfQuery.fetch({}, { fetchPolicy: 'network-only' })
    ).then(result => {
      this.user = result.data?.user?.myself as User;

      return this.user;
    });
  }

  fetchList() {
    return this.getUserListQuery.fetch();
  }

}
