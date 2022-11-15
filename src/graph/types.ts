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

export type Directory = {
  __typename?: 'Directory';
  id: Scalars['String'];
  property?: Maybe<Array<DirectoryProperty>>;
  value?: Maybe<Array<Value>>;
};

export type DirectoryInput = {
  id: Scalars['String'];
  property?: InputMaybe<Array<DirectoryPropertyInput>>;
};

export type DirectoryMutation = {
  __typename?: 'DirectoryMutation';
  /** Adding new directory */
  add: Directory;
  /** Deletion existent directory */
  delete: Array<Scalars['String']>;
  /** Updating existent directory */
  update: Directory;
};


export type DirectoryMutationAddArgs = {
  item: DirectoryInput;
};


export type DirectoryMutationDeleteArgs = {
  id: Array<Scalars['String']>;
};

export type DirectoryProperty = {
  __typename?: 'DirectoryProperty';
  id: Scalars['String'];
  property: Property;
  value: Scalars['String'];
};

export type DirectoryPropertyInput = {
  property: Scalars['String'];
  value: Scalars['String'];
};

export type DirectoryQuery = {
  __typename?: 'DirectoryQuery';
  count: Scalars['Int'];
  item?: Maybe<Directory>;
  list: Array<Directory>;
};


export type DirectoryQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type DirectoryQueryItemArgs = {
  id: Scalars['String'];
};


export type DirectoryQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth?: Maybe<AuthMutation>;
  directory: DirectoryMutation;
  property: PropertyMutation;
  user: UserMutation;
  userGroup: UserGroupMutation;
};

export type Property = {
  __typename?: 'Property';
  id: Scalars['String'];
  property?: Maybe<Array<PropertyProperty>>;
};

export type PropertyInput = {
  id: Scalars['String'];
  property?: InputMaybe<Array<PropertyPropertyInput>>;
};

export type PropertyMutation = {
  __typename?: 'PropertyMutation';
  /** Adding new property */
  add: Property;
  /** Deletion existent property */
  delete: Array<Scalars['String']>;
  /** Updating existent property */
  update: Property;
};


export type PropertyMutationAddArgs = {
  item: PropertyInput;
};


export type PropertyMutationDeleteArgs = {
  id: Array<Scalars['String']>;
};


export type PropertyMutationUpdateArgs = {
  item: PropertyInput;
};

export type PropertyProperty = {
  __typename?: 'PropertyProperty';
  id: Scalars['String'];
  property: Property;
  value: Scalars['String'];
};

export type PropertyPropertyInput = {
  property: Scalars['String'];
  value: Scalars['String'];
};

export type PropertyQuery = {
  __typename?: 'PropertyQuery';
  count: Scalars['Int'];
  item?: Maybe<Property>;
  list: Array<Property>;
};


export type PropertyQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PropertyQueryItemArgs = {
  id: Scalars['String'];
};


export type PropertyQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  directory: DirectoryQuery;
  property: PropertyQuery;
  user: UserQuery;
  userGroup: UserGroupQuery;
  value: ValueQuery;
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


export type UserGroupQueryItemArgs = {
  id: Scalars['String'];
};


export type UserGroupQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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
  item?: Maybe<User>;
  list: Array<User>;
  myself?: Maybe<User>;
};


export type UserQueryItemArgs = {
  id: Scalars['Int'];
};


export type UserQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Value = {
  __typename?: 'Value';
  directory: Directory;
  id: Scalars['String'];
};

export type ValueQuery = {
  __typename?: 'ValueQuery';
  count: Scalars['Int'];
  item?: Maybe<Value>;
  list: Array<Value>;
};


export type ValueQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ValueQueryItemArgs = {
  id: Scalars['String'];
};


export type ValueQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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

export type DeleteDirectoryMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteDirectoryMutation = { __typename?: 'Mutation', directory: { __typename?: 'DirectoryMutation', delete: Array<string> } };

export type GetDirectoryListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetDirectoryListQuery = { __typename?: 'Query', directory: { __typename?: 'DirectoryQuery', count: number, list: Array<{ __typename?: 'Directory', id: string, property?: Array<{ __typename?: 'DirectoryProperty', value: string, property: { __typename?: 'Property', id: string } }> | null, value?: Array<{ __typename?: 'Value', id: string }> | null }> } };

export type AddPropertyItemMutationVariables = Exact<{
  item: PropertyInput;
}>;


export type AddPropertyItemMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', add: { __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', value: string, property: { __typename?: 'Property', id: string } }> | null } } };

export type DeletePropertyItemMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeletePropertyItemMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', delete: Array<string> } };

export type GetPropertyEditQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPropertyEditQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }>, item?: { __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', id: string, value: string, property: { __typename?: 'Property', id: string } }> | null } | null } };

export type GetPropertyListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetPropertyListQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', count: number, list: Array<{ __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', value: string, property: { __typename?: 'Property', id: string } }> | null }> } };

export type UpdatePropertyItemMutationVariables = Exact<{
  item: PropertyInput;
}>;


export type UpdatePropertyItemMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', update: { __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', value: string, property: { __typename?: 'Property', id: string } }> | null } } };

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
export const DeleteDirectoryDocument = gql`
    mutation DeleteDirectory($id: [String!]!) {
  directory {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteDirectoryGQL extends Apollo.Mutation<DeleteDirectoryMutation, DeleteDirectoryMutationVariables> {
    document = DeleteDirectoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDirectoryListDocument = gql`
    query GetDirectoryList($offset: Int, $limit: Int) {
  directory {
    list(limit: $limit, offset: $offset) {
      id
      property {
        value
        property {
          id
        }
      }
      value {
        id
      }
    }
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDirectoryListGQL extends Apollo.Query<GetDirectoryListQuery, GetDirectoryListQueryVariables> {
    document = GetDirectoryListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddPropertyItemDocument = gql`
    mutation AddPropertyItem($item: PropertyInput!) {
  property {
    add(item: $item) {
      id
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
  export class AddPropertyItemGQL extends Apollo.Mutation<AddPropertyItemMutation, AddPropertyItemMutationVariables> {
    document = AddPropertyItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePropertyItemDocument = gql`
    mutation DeletePropertyItem($id: [String!]!) {
  property {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePropertyItemGQL extends Apollo.Mutation<DeletePropertyItemMutation, DeletePropertyItemMutationVariables> {
    document = DeletePropertyItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPropertyEditDocument = gql`
    query GetPropertyEdit($id: String!) {
  property {
    list {
      id
    }
    item(id: $id) {
      id
      property {
        id
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
  export class GetPropertyEditGQL extends Apollo.Query<GetPropertyEditQuery, GetPropertyEditQueryVariables> {
    document = GetPropertyEditDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPropertyListDocument = gql`
    query GetPropertyList($limit: Int, $offset: Int) {
  property {
    list(limit: $limit, offset: $offset) {
      id
      property {
        value
        property {
          id
        }
      }
    }
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPropertyListGQL extends Apollo.Query<GetPropertyListQuery, GetPropertyListQueryVariables> {
    document = GetPropertyListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePropertyItemDocument = gql`
    mutation UpdatePropertyItem($item: PropertyInput!) {
  property {
    update(item: $item) {
      id
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
  export class UpdatePropertyItemGQL extends Apollo.Mutation<UpdatePropertyItemMutation, UpdatePropertyItemMutationVariables> {
    document = UpdatePropertyItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }