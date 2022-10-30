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

export type Element = {
  __typename?: 'Element';
  children?: Maybe<Array<Maybe<Element>>>;
  createdAt: Scalars['String'];
  group?: Maybe<Array<Maybe<ElementGroup>>>;
  id?: Maybe<Scalars['Int']>;
  parent?: Maybe<Element>;
  property?: Maybe<Array<Maybe<ElementProperty>>>;
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
};


export type ElementPropertyArgs = {
  filter?: InputMaybe<PropertyFilter>;
};

export type ElementFilter = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  property?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ElementGroup = {
  __typename?: 'ElementGroup';
  createdAt: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ElementProperty = {
  property?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ElementPropertyValue = ElementProperty & {
  __typename?: 'ElementPropertyValue';
  property?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ElementRoot = {
  __typename?: 'ElementRoot';
  count?: Maybe<Scalars['Int']>;
  item?: Maybe<Element>;
  list?: Maybe<Array<Maybe<Element>>>;
};


export type ElementRootListArgs = {
  filter?: InputMaybe<ElementFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth?: Maybe<AuthMutation>;
};

export type Property = {
  __typename?: 'Property';
  id: Scalars['String'];
};

export type PropertyFilter = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  property?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  element?: Maybe<ElementRoot>;
  user?: Maybe<UserRoot>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type User = {
  __typename?: 'User';
  group?: Maybe<Array<Maybe<UserGroup>>>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  login?: Maybe<Scalars['String']>;
  property?: Maybe<Array<Maybe<UserPropertyValue>>>;
};

export type UserFilter = {
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  login?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UserPropertyValue = {
  __typename?: 'UserPropertyValue';
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type UserRoot = {
  __typename?: 'UserRoot';
  item?: Maybe<User>;
  list?: Maybe<Array<Maybe<User>>>;
  myself?: Maybe<User>;
};


export type UserRootListArgs = {
  filter?: InputMaybe<UserFilter>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type UserSort = {
  direction?: InputMaybe<SortDirection>;
  field?: InputMaybe<UserSortField>;
};

export enum UserSortField {
  Id = 'id',
  Login = 'login'
}

export type AuthByPasswordMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthByPasswordMutation = { __typename?: 'Mutation', auth?: { __typename?: 'AuthMutation', authByPassword?: { __typename?: 'User', id: number, login?: string | null } | null } | null };

export const AuthByPasswordDocument = gql`
    mutation AuthByPassword($login: String!, $password: String!) {
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
  export class AuthByPasswordGQL extends Apollo.Mutation<AuthByPasswordMutation, AuthByPasswordMutationVariables> {
    document = AuthByPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }