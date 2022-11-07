import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthMutation = {
  __typename?: 'AuthMutation';
  authByPassword?: Maybe<User>;
};


export type AuthMutationAuthByPasswordArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auth?: Maybe<AuthMutation>;
  property: PropertyMutation;
  user: UserMutation;
  userGroup: UserGroupMutation;
};

export type Property = {
  __typename?: 'Property';
  id: Scalars['String'];
};

export type PropertyMutation = {
  __typename?: 'PropertyMutation';
  /** Adding new property */
  add: Property;
  /** Deletion existent property */
  delete: Property;
  /** Updating existent property */
  update: Property;
};

export type PropertyQuery = {
  __typename?: 'PropertyQuery';
  item: Property;
  list: Array<Property>;
};

export type Query = {
  __typename?: 'Query';
  property: PropertyQuery;
  user: UserQuery;
  userGroup: UserGroupQuery;
};

export type User = {
  __typename?: 'User';
  group?: Maybe<Array<User>>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  login?: Maybe<Scalars['String']>;
  property?: Maybe<Array<UserProperty>>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UserGroupMutation = {
  __typename?: 'UserGroupMutation';
  /** Adding new user group */
  add: UserGroup;
  delete: UserGroup;
  update: UserGroup;
};

export type UserGroupQuery = {
  __typename?: 'UserGroupQuery';
  item: UserGroup;
  list: Array<UserGroup>;
};

export type UserMutation = {
  __typename?: 'UserMutation';
  /** Adding new user */
  add: User;
  /** Deletion existent user */
  delete: User;
  /** Updating existent user */
  update: User;
};

export type UserProperty = {
  __typename?: 'UserProperty';
  id: Scalars['Int'];
  property: Property;
  value: Scalars['String'];
};

export type UserQuery = {
  __typename?: 'UserQuery';
  item: User;
  list: Array<User>;
  myself?: Maybe<User>;
};

export type AuthByPasswordMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthByPasswordMutation = { __typename?: 'Mutation', auth?: { __typename?: 'AuthMutation', authByPassword?: { __typename?: 'User', id: number, login?: string | null, group?: Array<{ __typename?: 'User', id: number }> | null } | null } | null };

export type GetMyselfQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyselfQuery = { __typename?: 'Query', user: { __typename?: 'UserQuery', myself?: { __typename?: 'User', id: number, login?: string | null, group?: Array<{ __typename?: 'User', id: number }> | null, property?: Array<{ __typename?: 'UserProperty', value: string, property: { __typename?: 'Property', id: string } }> | null } | null } };

export type GetUserListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserListQuery = { __typename?: 'Query', user: { __typename?: 'UserQuery', list: Array<{ __typename?: 'User', id: number, login?: string | null, property?: Array<{ __typename?: 'UserProperty', value: string, property: { __typename?: 'Property', id: string } }> | null, group?: Array<{ __typename?: 'User', id: number }> | null }> } };

export const AuthByPasswordDocument = gql`
    mutation AuthByPassword($login: String!, $password: String!) {
  auth {
    authByPassword(login: $login, password: $password) {
      id
      login
      group {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthByPasswordGQL extends Apollo.Mutation<AuthByPasswordMutation, AuthByPasswordMutationVariables> {
    document = AuthByPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMyselfDocument = gql`
    query GetMyself {
  user {
    myself {
      id
      login
      group {
        id
      }
      property {
        value
        property {
          id
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMyselfGQL extends Apollo.Query<GetMyselfQuery, GetMyselfQueryVariables> {
    document = GetMyselfDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserListDocument = gql`
    query getUserList {
  user {
    list {
      id
      login
      property {
        value
        property {
          id
        }
      }
      group {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserListGQL extends Apollo.Query<GetUserListQuery, GetUserListQueryVariables> {
    document = GetUserListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }