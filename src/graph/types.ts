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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthMutation = {
  __typename?: 'AuthMutation';
  authByPassword?: Maybe<User>;
};


export type AuthMutationAuthByPasswordArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type Block = Content & {
  __typename?: 'Block';
  created_at: Scalars['String'];
  element: Array<Element>;
  flagList: Array<LangFlag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['Int'];
  propertyItem?: Maybe<ContentProperty>;
  propertyList: Array<ContentProperty>;
  propertyString?: Maybe<Scalars['String']>;
  section: Array<Section>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type BlockPropertyItemArgs = {
  id: Scalars['String'];
};


export type BlockPropertyStringArgs = {
  id: Scalars['String'];
};

export type BlockInput = {
  id?: InputMaybe<Scalars['Float']>;
  property?: InputMaybe<Array<BlockPropertyInput>>;
};

export type BlockMutation = {
  __typename?: 'BlockMutation';
  /** Adding new content block */
  add: Block;
  /** Deletion existent content block */
  delete: Array<Scalars['String']>;
  /** Updating existent content block */
  update: Block;
};


export type BlockMutationAddArgs = {
  item: BlockInput;
};

export type BlockPropertyInput = {
  property: Scalars['String'];
  string: Scalars['String'];
};

export type BlockQuery = {
  __typename?: 'BlockQuery';
  count: Scalars['Int'];
  item?: Maybe<Block>;
  list: Array<Block>;
};


export type BlockQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type BlockQueryItemArgs = {
  id: Scalars['Int'];
};


export type BlockQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type BlockString = ContentProperty & {
  __typename?: 'BlockString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type ChangeLog = {
  __typename?: 'ChangeLog';
  created_at: Scalars['DateTime'];
  entity: Scalars['String'];
  entityId: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['Int'];
  user: User;
  value: Scalars['String'];
};

export type ChangeLogQuery = {
  __typename?: 'ChangeLogQuery';
  count: Scalars['Int'];
  item?: Maybe<ChangeLog>;
  list: Array<ChangeLog>;
};


export type ChangeLogQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ChangeLogQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Content = {
  created_at: Scalars['String'];
  flagList: Array<LangFlag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['Int'];
  propertyItem?: Maybe<ContentProperty>;
  propertyList: Array<ContentProperty>;
  propertyString?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type ContentPropertyItemArgs = {
  id: Scalars['String'];
};


export type ContentPropertyStringArgs = {
  id: Scalars['String'];
};

export type ContentProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type Directory = {
  __typename?: 'Directory';
  created_at: Scalars['String'];
  flagList: Array<LangFlag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['String'];
  property?: Maybe<Array<DirectoryString>>;
  updated_at: Scalars['String'];
  value?: Maybe<Array<Value>>;
  version: Scalars['Int'];
};

export type DirectoryInput = {
  flag?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  property?: InputMaybe<Array<DirectoryPropertyInput>>;
  value?: InputMaybe<Array<Scalars['String']>>;
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


export type DirectoryMutationUpdateArgs = {
  item: DirectoryInput;
};

export type DirectoryProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type DirectoryPropertyInput = {
  lang: Scalars['String'];
  property: Scalars['String'];
  string: Scalars['String'];
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

export type DirectoryString = DirectoryProperty & {
  __typename?: 'DirectoryString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type Element = {
  __typename?: 'Element';
  block: Block;
  created_at: Scalars['String'];
  id: Scalars['Int'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type ElementQuery = {
  __typename?: 'ElementQuery';
  count: Scalars['Int'];
  item?: Maybe<Element>;
  list: Array<Element>;
};

export type FetchLog = {
  __typename?: 'FetchLog';
  arguments: Scalars['String'];
  entity: Scalars['String'];
  entityId: Scalars['String'];
  id: Scalars['Float'];
  operation: Scalars['String'];
  user: User;
};

export type FetchLogQuery = {
  __typename?: 'FetchLogQuery';
  count: Scalars['Int'];
  item?: Maybe<FetchLog>;
  list: Array<FetchLog>;
};


export type FetchLogQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type FetchLogQueryItemArgs = {
  id: Scalars['String'];
};


export type FetchLogQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Flag = {
  __typename?: 'Flag';
  created_at: Scalars['String'];
  flagList: Array<FlagFlag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  propertyItem?: Maybe<FlagProperty>;
  propertyList: Array<FlagProperty>;
  propertyString?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type FlagPropertyItemArgs = {
  id: Scalars['String'];
};


export type FlagPropertyStringArgs = {
  id: Scalars['String'];
};

export type FlagFlag = {
  __typename?: 'FlagFlag';
  flag: Flag;
  id: Scalars['Float'];
};

export type FlagInput = {
  flag: Array<Scalars['String']>;
  id: Scalars['String'];
  property: Array<FlagPropertyInput>;
};

export type FlagMutation = {
  __typename?: 'FlagMutation';
  /** Adding new flag */
  add: Flag;
  /** Deletion existent flag */
  delete: Array<Scalars['String']>;
  /** Updating existent flag */
  update: Flag;
};


export type FlagMutationAddArgs = {
  item: FlagInput;
};


export type FlagMutationDeleteArgs = {
  id: Array<Scalars['String']>;
};


export type FlagMutationUpdateArgs = {
  item: FlagInput;
};

export type FlagProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type FlagPropertyInput = {
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
};

export type FlagQuery = {
  __typename?: 'FlagQuery';
  count: Scalars['Int'];
  item?: Maybe<Flag>;
  list: Array<Flag>;
};


export type FlagQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type FlagQueryItemArgs = {
  id: Scalars['String'];
};


export type FlagQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type FlagString = FlagProperty & {
  __typename?: 'FlagString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type Lang = {
  __typename?: 'Lang';
  created_at: Scalars['String'];
  flagList: Array<LangFlag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['String'];
  propertyItem?: Maybe<LangProperty>;
  propertyList: Array<LangProperty>;
  propertyString?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type LangPropertyItemArgs = {
  id: Scalars['String'];
};


export type LangPropertyStringArgs = {
  id: Scalars['String'];
};

export type LangFlag = {
  __typename?: 'LangFlag';
  flag: Flag;
  id: Scalars['Int'];
};

export type LangInput = {
  flag?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  property?: InputMaybe<Array<LangPropertyInput>>;
};

export type LangMutation = {
  __typename?: 'LangMutation';
  /** Adding new lang */
  add: Lang;
  /** Deletion existent lang */
  delete: Array<Scalars['String']>;
  /** Updating existent lang */
  update: Lang;
};


export type LangMutationAddArgs = {
  item: LangInput;
};


export type LangMutationDeleteArgs = {
  id: Array<Scalars['String']>;
};


export type LangMutationUpdateArgs = {
  item: LangInput;
};

export type LangProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type LangPropertyInput = {
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
};

export type LangQuery = {
  __typename?: 'LangQuery';
  count: Scalars['Int'];
  item?: Maybe<Lang>;
  list: Array<Lang>;
};


export type LangQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type LangQueryItemArgs = {
  id: Scalars['String'];
};


export type LangQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type LangString = LangProperty & {
  __typename?: 'LangString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auth?: Maybe<AuthMutation>;
  block: BlockMutation;
  directory: DirectoryMutation;
  flag: FlagMutation;
  lang: LangMutation;
  property: PropertyMutation;
  user: UserMutation;
  userContact: UserContactMutation;
  userGroup: UserGroupMutation;
  value: ValueMutation;
};

export type Property = {
  __typename?: 'Property';
  created_at: Scalars['String'];
  id: Scalars['String'];
  property?: Maybe<Array<PropertyProperty>>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
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
  block: BlockQuery;
  changeLog: ChangeLogQuery;
  directory: DirectoryQuery;
  element: ElementQuery;
  fetchLog: FetchLogQuery;
  flag: FlagQuery;
  lang: LangQuery;
  property: PropertyQuery;
  section: SectionQuery;
  user: UserQuery;
  userContact: UserContactQuery;
  userGroup: UserGroupQuery;
  value: ValueQuery;
};

export type Section = {
  __typename?: 'Section';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type SectionQuery = {
  __typename?: 'SectionQuery';
  count: Scalars['Int'];
  item?: Maybe<Section>;
  list: Array<Section>;
};

export type User = WithFlagSchema & {
  __typename?: 'User';
  contact: Array<UserUserContact>;
  created_at: Scalars['String'];
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
  group?: Maybe<Array<User>>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  login: Scalars['String'];
  propertyItem?: Maybe<UserProperty>;
  propertyList: Array<UserProperty>;
  propertyString?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type UserPropertyItemArgs = {
  id: Scalars['String'];
};


export type UserPropertyStringArgs = {
  id: Scalars['String'];
  lang?: InputMaybe<Scalars['String']>;
};

export type UserContact = WithFlagSchema & {
  __typename?: 'UserContact';
  created_at: Scalars['String'];
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['String'];
  propertyItem?: Maybe<UserContactProperty>;
  propertyList: Array<UserContactProperty>;
  propertyString?: Maybe<Scalars['String']>;
  type: UserContactType;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type UserContactPropertyItemArgs = {
  id: Scalars['String'];
};


export type UserContactPropertyStringArgs = {
  id: Scalars['String'];
};

export type UserContactInput = {
  flag: Array<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  property: Array<UserContactPropertyInput>;
  type: UserContactType;
};

export type UserContactMutation = {
  __typename?: 'UserContactMutation';
  /** Adding new user contact */
  add: UserContact;
  /** Deletion existent user contact */
  delete: Array<Scalars['String']>;
  /** Updating existent user contact */
  update: UserContact;
  /** Updating flag of user contact */
  updateFlag: UserContact;
};


export type UserContactMutationAddArgs = {
  item: UserContactInput;
};


export type UserContactMutationDeleteArgs = {
  id: Array<Scalars['String']>;
};


export type UserContactMutationUpdateArgs = {
  item: UserContactInput;
};


export type UserContactMutationUpdateFlagArgs = {
  flag: Scalars['String'];
  id: Scalars['String'];
};

export type UserContactProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type UserContactPropertyInput = {
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
};

export type UserContactQuery = {
  __typename?: 'UserContactQuery';
  count: Scalars['Int'];
  item?: Maybe<UserContact>;
  list: Array<UserContact>;
};


export type UserContactQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserContactQueryItemArgs = {
  id: Scalars['String'];
};


export type UserContactQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserContactString = UserContactProperty & {
  __typename?: 'UserContactString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export enum UserContactType {
  Apple = 'APPLE',
  Email = 'EMAIL',
  Google = 'GOOGLE',
  Phone = 'PHONE'
}

export type UserDescription = UserProperty & {
  __typename?: 'UserDescription';
  description: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
};

export type UserGroup = WithFlagSchema & {
  __typename?: 'UserGroup';
  children: Array<UserGroup>;
  created_at: Scalars['String'];
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['Int'];
  parent?: Maybe<UserGroup>;
  propertyItem?: Maybe<UserGroupProperty>;
  propertyList: Array<UserGroupProperty>;
  propertyString?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type UserGroupPropertyItemArgs = {
  id: Scalars['String'];
};


export type UserGroupPropertyStringArgs = {
  id: Scalars['String'];
  lang?: InputMaybe<Scalars['String']>;
};

export type UserGroupInput = {
  flag: Array<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  parent?: InputMaybe<Scalars['Int']>;
  property: Array<UserGroupPropertyInput>;
};

export type UserGroupMutation = {
  __typename?: 'UserGroupMutation';
  /** Adding new user group */
  add: UserGroup;
  delete: UserGroup;
  update: UserGroup;
};


export type UserGroupMutationAddArgs = {
  item: UserGroupInput;
};


export type UserGroupMutationDeleteArgs = {
  id: Array<Scalars['String']>;
};


export type UserGroupMutationUpdateArgs = {
  item: UserGroupInput;
};

export type UserGroupProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type UserGroupPropertyInput = {
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
};

export type UserGroupQuery = {
  __typename?: 'UserGroupQuery';
  count: Scalars['Int'];
  item?: Maybe<UserGroup>;
  list: Array<UserGroup>;
};


export type UserGroupQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserGroupQueryItemArgs = {
  id: Scalars['Int'];
};


export type UserGroupQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserGroupString = UserGroupProperty & {
  __typename?: 'UserGroupString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type UserInput = {
  contact: Array<UserUserContactInput>;
  flag: Array<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  login: Scalars['String'];
  property: Array<UserPropertyInput>;
};

export type UserMutation = {
  __typename?: 'UserMutation';
  /** Adding new user */
  add: User;
  /** Deletion existent user */
  delete: Array<Scalars['Int']>;
  /** Updating existent user */
  update: User;
  /** Updating flag of user */
  updateFlag: User;
};


export type UserMutationAddArgs = {
  item: UserInput;
};


export type UserMutationDeleteArgs = {
  id: Array<Scalars['Int']>;
};


export type UserMutationUpdateArgs = {
  item: UserInput;
};


export type UserMutationUpdateFlagArgs = {
  flag: Scalars['String'];
  id: Scalars['Int'];
};

export type UserProperty = {
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
};

export type UserPropertyInput = {
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
};

export type UserQuery = {
  __typename?: 'UserQuery';
  count: Scalars['Int'];
  item?: Maybe<User>;
  list: Array<User>;
  myself?: Maybe<User>;
};


export type UserQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserQueryItemArgs = {
  id: Scalars['Int'];
};


export type UserQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserString = UserProperty & {
  __typename?: 'UserString';
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
};

export type UserUser = UserProperty & {
  __typename?: 'UserUser';
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  user: User;
};

export type UserUserContact = {
  __typename?: 'UserUserContact';
  contact: UserContact;
  id: Scalars['Int'];
  value: Scalars['String'];
};

export type UserUserContactInput = {
  contact: Scalars['String'];
  value: Scalars['String'];
};

export type UserValue = UserProperty & {
  __typename?: 'UserValue';
  directory: Directory;
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  value: Value;
};

export type Value = {
  __typename?: 'Value';
  created_at: Scalars['String'];
  directory: Directory;
  id: Scalars['String'];
  propertyItem: ValueProperty;
  propertyList: Array<ValueProperty>;
  propertyString: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type ValuePropertyItemArgs = {
  id: Scalars['String'];
};


export type ValuePropertyStringArgs = {
  id: Scalars['String'];
};

export type ValueInput = {
  directory: Scalars['String'];
  id: Scalars['String'];
  property?: InputMaybe<Array<ValuePropertyInput>>;
};

export type ValueMutation = {
  __typename?: 'ValueMutation';
  /** Adding new value */
  add: Value;
  /** Deletion existent value */
  delete: Array<Scalars['String']>;
  /** Updating existent value */
  update: Value;
};


export type ValueMutationAddArgs = {
  item: ValueInput;
};


export type ValueMutationDeleteArgs = {
  id: Array<Scalars['String']>;
};


export type ValueMutationUpdateArgs = {
  item: ValueInput;
};

export type ValueProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type ValuePropertyInput = {
  property: Scalars['String'];
  value: Scalars['String'];
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

export type ValueString = ValueProperty & {
  __typename?: 'ValueString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type WithFlagSchema = {
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
};

export type AuthByPasswordMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthByPasswordMutation = { __typename?: 'Mutation', auth?: { __typename?: 'AuthMutation', authByPassword?: { __typename?: 'User', id: number, login: string, group?: Array<{ __typename?: 'User', id: number }> | null } | null } | null };

export type GetMyselfQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyselfQuery = { __typename?: 'Query', user: { __typename?: 'UserQuery', myself?: { __typename?: 'User', id: number, login: string, propertyList: Array<{ __typename?: 'UserDescription', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserString', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserUser', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserValue', string: string, property: { __typename?: 'Property', id: string } }> } | null } };

export type GetBlockListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetBlockListQuery = { __typename?: 'Query', block: { __typename?: 'BlockQuery', count: number, list: Array<{ __typename?: 'Block', id: number, created_at: string, updated_at: string, version: number, name?: string | null, propertyList: Array<{ __typename?: 'BlockString', id: number, string: string, property: { __typename?: 'Property', id: string } }> }> } };

export type AddDirectoryItemMutationVariables = Exact<{
  item: DirectoryInput;
}>;


export type AddDirectoryItemMutation = { __typename?: 'Mutation', directory: { __typename?: 'DirectoryMutation', add: { __typename?: 'Directory', id: string, value?: Array<{ __typename?: 'Value', id: string }> | null, property?: Array<{ __typename?: 'DirectoryString', string: string, property: { __typename?: 'Property', id: string } }> | null } } };

export type AddValueItemMutationVariables = Exact<{
  item: ValueInput;
}>;


export type AddValueItemMutation = { __typename?: 'Mutation', value: { __typename?: 'ValueMutation', add: { __typename?: 'Value', id: string, directory: { __typename?: 'Directory', id: string } } } };

export type DeleteDirectoryMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteDirectoryMutation = { __typename?: 'Mutation', directory: { __typename?: 'DirectoryMutation', delete: Array<string> } };

export type GetDirectoryEditQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectoryEditQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, directory: { __typename?: 'DirectoryQuery', item?: { __typename?: 'Directory', id: string, property?: Array<{ __typename?: 'DirectoryString', string: string, property: { __typename?: 'Property', id: string } }> | null, value?: Array<{ __typename?: 'Value', id: string }> | null } | null } };

export type GetDirectoryListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetDirectoryListQuery = { __typename?: 'Query', directory: { __typename?: 'DirectoryQuery', count: number, list: Array<{ __typename?: 'Directory', id: string, created_at: string, updated_at: string, version: number, property?: Array<{ __typename?: 'DirectoryString', string: string, property: { __typename?: 'Property', id: string } }> | null, value?: Array<{ __typename?: 'Value', id: string }> | null }> } };

export type GetValueEditQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetValueEditQuery = { __typename?: 'Query', value: { __typename?: 'ValueQuery', item?: { __typename?: 'Value', id: string, updated_at: string, created_at: string, propertyList: Array<{ __typename?: 'ValueString', id: number, string: string, property: { __typename?: 'Property', id: string } }> } | null }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> } };

export type UpdateDirectoryItemMutationVariables = Exact<{
  item: DirectoryInput;
}>;


export type UpdateDirectoryItemMutation = { __typename?: 'Mutation', directory: { __typename?: 'DirectoryMutation', update: { __typename?: 'Directory', id: string, value?: Array<{ __typename?: 'Value', id: string }> | null, property?: Array<{ __typename?: 'DirectoryString', string: string, property: { __typename?: 'Property', id: string } }> | null } } };

export type AddFlagMutationVariables = Exact<{
  item: FlagInput;
}>;


export type AddFlagMutation = { __typename?: 'Mutation', flag: { __typename?: 'FlagMutation', add: { __typename?: 'Flag', id: string } } };

export type DeleteFlagListMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteFlagListMutation = { __typename?: 'Mutation', flag: { __typename?: 'FlagMutation', delete: Array<string> } };

export type GetFlagAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFlagAdditionQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', id: string, property: { __typename?: 'Property', id: string } }> | null }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string, name?: string | null }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string, name?: string | null }> } };

export type GetFlagListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetFlagListQuery = { __typename?: 'Query', flag: { __typename?: 'FlagQuery', count: number, list: Array<{ __typename?: 'Flag', id: string, label?: string | null, flagList: Array<{ __typename?: 'FlagFlag', id: number, flag: { __typename?: 'Flag', id: string } }>, propertyList: Array<{ __typename?: 'FlagString', id: number, string: string, property: { __typename?: 'Property', id: string } }> }> } };

export type GetFlagUpdateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetFlagUpdateQuery = { __typename?: 'Query', flag: { __typename?: 'FlagQuery', item?: { __typename?: 'Flag', id: string, created_at: string, updated_at: string, version: number, propertyList: Array<{ __typename?: 'FlagString', id: number, string: string, property: { __typename?: 'Property', id: string } }>, flagList: Array<{ __typename?: 'FlagFlag', id: number, flag: { __typename?: 'Flag', id: string } }> } | null, list: Array<{ __typename?: 'Flag', id: string, name?: string | null }> }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', id: string, property: { __typename?: 'Property', id: string } }> | null }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string, name?: string | null }> } };

export type UpdateFlagMutationVariables = Exact<{
  item: FlagInput;
}>;


export type UpdateFlagMutation = { __typename?: 'Mutation', flag: { __typename?: 'FlagMutation', update: { __typename?: 'Flag', id: string } } };

export type AddLangItemMutationVariables = Exact<{
  item: LangInput;
}>;


export type AddLangItemMutation = { __typename?: 'Mutation', lang: { __typename?: 'LangMutation', add: { __typename?: 'Lang', id: string, propertyList: Array<{ __typename?: 'LangString', string: string, property: { __typename?: 'Property', id: string } }> } } };

export type DeleteLangListMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteLangListMutation = { __typename?: 'Mutation', lang: { __typename?: 'LangMutation', delete: Array<string> } };

export type GetLangEditQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetLangEditQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }>, item?: { __typename?: 'Lang', id: string, created_at: string, updated_at: string, version: number, flagString: Array<string>, propertyList: Array<{ __typename: 'LangString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } }> } | null } };

export type GetLangListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetLangListQuery = { __typename?: 'Query', lang: { __typename?: 'LangQuery', count: number, list: Array<{ __typename?: 'Lang', id: string, created_at: string, updated_at: string, propertyList: Array<{ __typename?: 'LangString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } }> }> }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> } };

export type UpdateLangItemMutationVariables = Exact<{
  item: LangInput;
}>;


export type UpdateLangItemMutation = { __typename?: 'Mutation', lang: { __typename?: 'LangMutation', update: { __typename?: 'Lang', id: string } } };

export type GetChangeLogListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetChangeLogListQuery = { __typename?: 'Query', changeLog: { __typename?: 'ChangeLogQuery', count: number, list: Array<{ __typename?: 'ChangeLog', id: number, created_at: any, entity: string, entityId: string, field: string, value: string, user: { __typename?: 'User', id: number } }> } };

export type GetFetchListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetFetchListQuery = { __typename?: 'Query', fetchLog: { __typename?: 'FetchLogQuery', count: number, list: Array<{ __typename?: 'FetchLog', id: number, entity: string, operation: string, arguments: string }> } };

export type AddPropertyItemMutationVariables = Exact<{
  item: PropertyInput;
}>;


export type AddPropertyItemMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', add: { __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', value: string, property: { __typename?: 'Property', id: string } }> | null } } };

export type DeletePropertyListMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeletePropertyListMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', delete: Array<string> } };

export type GetPropertyEditQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPropertyEditQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }>, item?: { __typename?: 'Property', id: string, created_at: string, updated_at: string, property?: Array<{ __typename?: 'PropertyProperty', id: string, value: string, property: { __typename?: 'Property', id: string } }> | null } | null } };

export type GetPropertyIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPropertyIdQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', idList: Array<{ __typename?: 'Property', id: string }> } };

export type GetPropertyListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetPropertyListQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', count: number, list: Array<{ __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', id: string, value: string, property: { __typename?: 'Property', id: string } }> | null }> } };

export type UpdatePropertyItemMutationVariables = Exact<{
  item: PropertyInput;
}>;


export type UpdatePropertyItemMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', update: { __typename?: 'Property', id: string, property?: Array<{ __typename?: 'PropertyProperty', value: string, property: { __typename?: 'Property', id: string } }> | null } } };

export type AddUserContactItemMutationVariables = Exact<{
  item: UserContactInput;
}>;


export type AddUserContactItemMutation = { __typename?: 'Mutation', userContact: { __typename?: 'UserContactMutation', add: { __typename?: 'UserContact', id: string } } };

export type DeleteUserContactListMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteUserContactListMutation = { __typename?: 'Mutation', userContact: { __typename?: 'UserContactMutation', delete: Array<string> } };

export type GetUserContactAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserContactAdditionQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type GetUserContactListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserContactListQuery = { __typename?: 'Query', userContact: { __typename?: 'UserContactQuery', count: number, list: Array<{ __typename?: 'UserContact', id: string, type: UserContactType, flagString: Array<string>, propertyList: Array<{ __typename?: 'UserContactString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } }> }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type GetUserContactUpdateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserContactUpdateQuery = { __typename?: 'Query', userContact: { __typename?: 'UserContactQuery', item?: { __typename?: 'UserContact', id: string, type: UserContactType, created_at: string, updated_at: string, version: number, flagString: Array<string>, propertyList: Array<{ __typename?: 'UserContactString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } }> } | null }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type UpdateUserContactFlagMutationVariables = Exact<{
  id: Scalars['String'];
  flag: Scalars['String'];
}>;


export type UpdateUserContactFlagMutation = { __typename?: 'Mutation', userContact: { __typename?: 'UserContactMutation', updateFlag: { __typename?: 'UserContact', id: string, flagString: Array<string> } } };

export type UpdateUserContactItemMutationVariables = Exact<{
  item: UserContactInput;
}>;


export type UpdateUserContactItemMutation = { __typename?: 'Mutation', userContact: { __typename?: 'UserContactMutation', update: { __typename?: 'UserContact', id: string } } };

export type AddUserGroupItemMutationVariables = Exact<{
  item: UserGroupInput;
}>;


export type AddUserGroupItemMutation = { __typename?: 'Mutation', userGroup: { __typename?: 'UserGroupMutation', add: { __typename?: 'UserGroup', id: number } } };

export type GetUserGroupAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserGroupAdditionQuery = { __typename?: 'Query', userGroup: { __typename?: 'UserGroupQuery', list: Array<{ __typename?: 'UserGroup', id: number }> }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type GetUserGroupUpdateQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserGroupUpdateQuery = { __typename?: 'Query', userGroup: { __typename?: 'UserGroupQuery', list: Array<{ __typename?: 'UserGroup', id: number }>, item?: { __typename?: 'UserGroup', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, parent?: { __typename?: 'UserGroup', id: number } | null, children: Array<{ __typename?: 'UserGroup', id: number }>, propertyList: Array<{ __typename?: 'UserGroupString', id: number, string: string, property: { __typename?: 'Property', id: string } }> } | null }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type UpdateUserGroupItemMutationVariables = Exact<{
  item: UserGroupInput;
}>;


export type UpdateUserGroupItemMutation = { __typename?: 'Mutation', userGroup: { __typename?: 'UserGroupMutation', update: { __typename?: 'UserGroup', id: number } } };

export type AddUserItemMutationVariables = Exact<{
  item: UserInput;
}>;


export type AddUserItemMutation = { __typename?: 'Mutation', user: { __typename?: 'UserMutation', add: { __typename?: 'User', id: number } } };

export type DeleteUserListMutationVariables = Exact<{
  id: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type DeleteUserListMutation = { __typename?: 'Mutation', user: { __typename?: 'UserMutation', delete: Array<number> } };

export type GetUserAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAdditionQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, userContact: { __typename?: 'UserContactQuery', list: Array<{ __typename?: 'UserContact', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type GetUserListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserListQuery = { __typename?: 'Query', user: { __typename?: 'UserQuery', count: number, list: Array<{ __typename?: 'User', id: number, login: string, flagString: Array<string>, propertyList: Array<{ __typename?: 'UserDescription', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserString', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserUser', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserValue', string: string, value: { __typename?: 'Value', id: string }, property: { __typename?: 'Property', id: string } }> }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type GetUserUpdateQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserUpdateQuery = { __typename?: 'Query', user: { __typename?: 'UserQuery', item?: { __typename?: 'User', id: number, login: string, created_at: string, updated_at: string, version: number, flagString: Array<string>, contact: Array<{ __typename?: 'UserUserContact', id: number, value: string, contact: { __typename?: 'UserContact', id: string } }>, propertyList: Array<{ __typename?: 'UserDescription', id: number, string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserUser', id: number, string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserValue', id: number, string: string, property: { __typename?: 'Property', id: string } }> } | null }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, userContact: { __typename?: 'UserContactQuery', list: Array<{ __typename?: 'UserContact', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type UpdateUserFlagMutationVariables = Exact<{
  id: Scalars['Int'];
  flag: Scalars['String'];
}>;


export type UpdateUserFlagMutation = { __typename?: 'Mutation', user: { __typename?: 'UserMutation', updateFlag: { __typename?: 'User', id: number } } };

export type UpdateUserMutationVariables = Exact<{
  item: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', user: { __typename?: 'UserMutation', update: { __typename?: 'User', id: number } } };

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
      propertyList {
        string
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
export const GetBlockListDocument = gql`
    query GetBlockList($limit: Int, $offset: Int) {
  block {
    list(limit: $limit, offset: $offset) {
      id
      created_at
      updated_at
      version
      name: propertyString(id: "NAME")
      propertyList {
        id
        string
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
  export class GetBlockListGQL extends Apollo.Query<GetBlockListQuery, GetBlockListQueryVariables> {
    document = GetBlockListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddDirectoryItemDocument = gql`
    mutation AddDirectoryItem($item: DirectoryInput!) {
  directory {
    add(item: $item) {
      id
      value {
        id
      }
      property {
        string
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
  export class AddDirectoryItemGQL extends Apollo.Mutation<AddDirectoryItemMutation, AddDirectoryItemMutationVariables> {
    document = AddDirectoryItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddValueItemDocument = gql`
    mutation AddValueItem($item: ValueInput!) {
  value {
    add(item: $item) {
      id
      directory {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddValueItemGQL extends Apollo.Mutation<AddValueItemMutation, AddValueItemMutationVariables> {
    document = AddValueItemDocument;
    
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
export const GetDirectoryEditDocument = gql`
    query GetDirectoryEdit($id: String!) {
  property {
    list {
      id
    }
  }
  directory {
    item(id: $id) {
      id
      property {
        string
        property {
          id
        }
      }
      value {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDirectoryEditGQL extends Apollo.Query<GetDirectoryEditQuery, GetDirectoryEditQueryVariables> {
    document = GetDirectoryEditDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDirectoryListDocument = gql`
    query GetDirectoryList($offset: Int, $limit: Int) {
  directory {
    list(limit: $limit, offset: $offset) {
      id
      created_at
      updated_at
      version
      property {
        string
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
export const GetValueEditDocument = gql`
    query GetValueEdit($id: String!) {
  value {
    item(id: $id) {
      id
      updated_at
      created_at
      propertyList {
        id
        string
        property {
          id
        }
      }
    }
  }
  property {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetValueEditGQL extends Apollo.Query<GetValueEditQuery, GetValueEditQueryVariables> {
    document = GetValueEditDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateDirectoryItemDocument = gql`
    mutation updateDirectoryItem($item: DirectoryInput!) {
  directory {
    update(item: $item) {
      id
      value {
        id
      }
      property {
        string
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
  export class UpdateDirectoryItemGQL extends Apollo.Mutation<UpdateDirectoryItemMutation, UpdateDirectoryItemMutationVariables> {
    document = UpdateDirectoryItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddFlagDocument = gql`
    mutation AddFlag($item: FlagInput!) {
  flag {
    add(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddFlagGQL extends Apollo.Mutation<AddFlagMutation, AddFlagMutationVariables> {
    document = AddFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteFlagListDocument = gql`
    mutation DeleteFlagList($id: [String!]!) {
  flag {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteFlagListGQL extends Apollo.Mutation<DeleteFlagListMutation, DeleteFlagListMutationVariables> {
    document = DeleteFlagListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFlagAdditionDocument = gql`
    query GetFlagAddition {
  property {
    list {
      id
      property {
        id
        property {
          id
        }
      }
    }
  }
  flag {
    list {
      id
      name: propertyString(id: "NAME")
    }
  }
  lang {
    list {
      id
      name: propertyString(id: "NAME")
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFlagAdditionGQL extends Apollo.Query<GetFlagAdditionQuery, GetFlagAdditionQueryVariables> {
    document = GetFlagAdditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFlagListDocument = gql`
    query GetFlagList($limit: Int, $offset: Int) {
  flag {
    list(offset: $offset, limit: $limit) {
      id
      label
      flagList {
        id
        flag {
          id
        }
      }
      propertyList {
        id
        string
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
  export class GetFlagListGQL extends Apollo.Query<GetFlagListQuery, GetFlagListQueryVariables> {
    document = GetFlagListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFlagUpdateDocument = gql`
    query GetFlagUpdate($id: String!) {
  flag {
    item(id: $id) {
      id
      created_at
      updated_at
      version
      propertyList {
        id
        string
        property {
          id
        }
      }
      flagList {
        id
        flag {
          id
        }
      }
    }
  }
  property {
    list {
      id
      property {
        id
        property {
          id
        }
      }
    }
  }
  flag {
    list {
      id
      name: propertyString(id: "NAME")
    }
  }
  lang {
    list {
      id
      name: propertyString(id: "NAME")
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFlagUpdateGQL extends Apollo.Query<GetFlagUpdateQuery, GetFlagUpdateQueryVariables> {
    document = GetFlagUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateFlagDocument = gql`
    mutation updateFlag($item: FlagInput!) {
  flag {
    update(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateFlagGQL extends Apollo.Mutation<UpdateFlagMutation, UpdateFlagMutationVariables> {
    document = UpdateFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddLangItemDocument = gql`
    mutation AddLangItem($item: LangInput!) {
  lang {
    add(item: $item) {
      id
      propertyList {
        string
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
  export class AddLangItemGQL extends Apollo.Mutation<AddLangItemMutation, AddLangItemMutationVariables> {
    document = AddLangItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteLangListDocument = gql`
    mutation DeleteLangList($id: [String!]!) {
  lang {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteLangListGQL extends Apollo.Mutation<DeleteLangListMutation, DeleteLangListMutationVariables> {
    document = DeleteLangListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLangEditDocument = gql`
    query GetLangEdit($id: String!) {
  property {
    list {
      id
    }
  }
  lang {
    list {
      id
    }
  }
  lang {
    item(id: $id) {
      id
      created_at
      updated_at
      version
      propertyList {
        id
        property {
          id
        }
        string
        __typename
        ... on LangString {
          lang {
            id
          }
        }
      }
      flagString
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLangEditGQL extends Apollo.Query<GetLangEditQuery, GetLangEditQueryVariables> {
    document = GetLangEditDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLangListDocument = gql`
    query GetLangList($offset: Int, $limit: Int) {
  lang {
    list(limit: $limit, offset: $offset) {
      id
      created_at
      updated_at
      propertyList {
        id
        string
        property {
          id
        }
        ... on LangString {
          lang {
            id
          }
        }
      }
    }
    count
  }
  property {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLangListGQL extends Apollo.Query<GetLangListQuery, GetLangListQueryVariables> {
    document = GetLangListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateLangItemDocument = gql`
    mutation UpdateLangItem($item: LangInput!) {
  lang {
    update(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateLangItemGQL extends Apollo.Mutation<UpdateLangItemMutation, UpdateLangItemMutationVariables> {
    document = UpdateLangItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetChangeLogListDocument = gql`
    query GetChangeLogList($limit: Int, $offset: Int) {
  changeLog {
    list(limit: $limit, offset: $offset) {
      id
      created_at
      entity
      entityId
      field
      value
      user {
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
  export class GetChangeLogListGQL extends Apollo.Query<GetChangeLogListQuery, GetChangeLogListQueryVariables> {
    document = GetChangeLogListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFetchListDocument = gql`
    query GetFetchList($limit: Int, $offset: Int) {
  fetchLog {
    list(limit: $limit, offset: $offset) {
      id
      entity
      operation
      arguments
    }
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFetchListGQL extends Apollo.Query<GetFetchListQuery, GetFetchListQueryVariables> {
    document = GetFetchListDocument;
    
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
export const DeletePropertyListDocument = gql`
    mutation DeletePropertyList($id: [String!]!) {
  property {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePropertyListGQL extends Apollo.Mutation<DeletePropertyListMutation, DeletePropertyListMutationVariables> {
    document = DeletePropertyListDocument;
    
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
      created_at
      updated_at
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
export const GetPropertyIdDocument = gql`
    query GetPropertyId {
  property {
    idList: list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPropertyIdGQL extends Apollo.Query<GetPropertyIdQuery, GetPropertyIdQueryVariables> {
    document = GetPropertyIdDocument;
    
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
        id
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
export const AddUserContactItemDocument = gql`
    mutation AddUserContactItem($item: UserContactInput!) {
  userContact {
    add(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserContactItemGQL extends Apollo.Mutation<AddUserContactItemMutation, AddUserContactItemMutationVariables> {
    document = AddUserContactItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteUserContactListDocument = gql`
    mutation DeleteUserContactList($id: [String!]!) {
  userContact {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUserContactListGQL extends Apollo.Mutation<DeleteUserContactListMutation, DeleteUserContactListMutationVariables> {
    document = DeleteUserContactListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserContactAdditionDocument = gql`
    query GetUserContactAddition {
  property {
    list {
      id
    }
  }
  flag {
    list {
      id
    }
  }
  lang {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserContactAdditionGQL extends Apollo.Query<GetUserContactAdditionQuery, GetUserContactAdditionQueryVariables> {
    document = GetUserContactAdditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserContactListDocument = gql`
    query GetUserContactList($limit: Int, $offset: Int) {
  userContact {
    list(limit: $limit, offset: $offset) {
      id
      type
      propertyList {
        id
        string
        property {
          id
        }
        ... on UserContactString {
          lang {
            id
          }
        }
      }
      flagString
    }
    count
  }
  flag {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserContactListGQL extends Apollo.Query<GetUserContactListQuery, GetUserContactListQueryVariables> {
    document = GetUserContactListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserContactUpdateDocument = gql`
    query GetUserContactUpdate($id: String!) {
  userContact {
    item(id: $id) {
      id
      type
      created_at
      updated_at
      version
      propertyList {
        id
        string
        property {
          id
        }
        ... on UserContactString {
          lang {
            id
          }
        }
      }
      flagString
    }
  }
  property {
    list {
      id
    }
  }
  flag {
    list {
      id
    }
  }
  lang {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserContactUpdateGQL extends Apollo.Query<GetUserContactUpdateQuery, GetUserContactUpdateQueryVariables> {
    document = GetUserContactUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserContactFlagDocument = gql`
    mutation UpdateUserContactFlag($id: String!, $flag: String!) {
  userContact {
    updateFlag(id: $id, flag: $flag) {
      id
      flagString
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserContactFlagGQL extends Apollo.Mutation<UpdateUserContactFlagMutation, UpdateUserContactFlagMutationVariables> {
    document = UpdateUserContactFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserContactItemDocument = gql`
    mutation UpdateUserContactItem($item: UserContactInput!) {
  userContact {
    update(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserContactItemGQL extends Apollo.Mutation<UpdateUserContactItemMutation, UpdateUserContactItemMutationVariables> {
    document = UpdateUserContactItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddUserGroupItemDocument = gql`
    mutation AddUserGroupItem($item: UserGroupInput!) {
  userGroup {
    add(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserGroupItemGQL extends Apollo.Mutation<AddUserGroupItemMutation, AddUserGroupItemMutationVariables> {
    document = AddUserGroupItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserGroupAdditionDocument = gql`
    query GetUserGroupAddition {
  userGroup {
    list {
      id
    }
  }
  property {
    list {
      id
    }
  }
  lang {
    list {
      id
    }
  }
  flag {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGroupAdditionGQL extends Apollo.Query<GetUserGroupAdditionQuery, GetUserGroupAdditionQueryVariables> {
    document = GetUserGroupAdditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserGroupUpdateDocument = gql`
    query GetUserGroupUpdate($id: Int!) {
  userGroup {
    list {
      id
    }
    item(id: $id) {
      id
      created_at
      updated_at
      version
      parent {
        id
      }
      children {
        id
      }
      propertyList {
        id
        string
        property {
          id
        }
      }
      flagString
    }
  }
  property {
    list {
      id
    }
  }
  lang {
    list {
      id
    }
  }
  flag {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGroupUpdateGQL extends Apollo.Query<GetUserGroupUpdateQuery, GetUserGroupUpdateQueryVariables> {
    document = GetUserGroupUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserGroupItemDocument = gql`
    mutation UpdateUserGroupItem($item: UserGroupInput!) {
  userGroup {
    update(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGroupItemGQL extends Apollo.Mutation<UpdateUserGroupItemMutation, UpdateUserGroupItemMutationVariables> {
    document = UpdateUserGroupItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddUserItemDocument = gql`
    mutation AddUserItem($item: UserInput!) {
  user {
    add(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserItemGQL extends Apollo.Mutation<AddUserItemMutation, AddUserItemMutationVariables> {
    document = AddUserItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteUserListDocument = gql`
    mutation DeleteUserList($id: [Int!]!) {
  user {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUserListGQL extends Apollo.Mutation<DeleteUserListMutation, DeleteUserListMutationVariables> {
    document = DeleteUserListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserAdditionDocument = gql`
    query GetUserAddition {
  property {
    list {
      id
    }
  }
  flag {
    list {
      id
    }
  }
  userContact {
    list {
      id
    }
  }
  lang {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserAdditionGQL extends Apollo.Query<GetUserAdditionQuery, GetUserAdditionQueryVariables> {
    document = GetUserAdditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserListDocument = gql`
    query getUserList($limit: Int, $offset: Int) {
  user {
    list(limit: $limit, offset: $offset) {
      id
      login
      flagString
      propertyList {
        string
        property {
          id
        }
        ... on UserValue {
          value {
            id
          }
        }
      }
    }
    count
  }
  flag {
    list {
      id
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
export const GetUserUpdateDocument = gql`
    query GetUserUpdate($id: Int!) {
  user {
    item(id: $id) {
      id
      login
      created_at
      updated_at
      version
      flagString
      contact {
        id
        contact {
          id
        }
        value
      }
      propertyList {
        id
        string
        property {
          id
        }
        ... on UserString {
          lang {
            id
          }
        }
      }
    }
  }
  property {
    list {
      id
    }
  }
  flag {
    list {
      id
    }
  }
  userContact {
    list {
      id
    }
  }
  lang {
    list {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserUpdateGQL extends Apollo.Query<GetUserUpdateQuery, GetUserUpdateQueryVariables> {
    document = GetUserUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserFlagDocument = gql`
    mutation UpdateUserFlag($id: Int!, $flag: String!) {
  user {
    updateFlag(id: $id, flag: $flag) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserFlagGQL extends Apollo.Mutation<UpdateUserFlagMutation, UpdateUserFlagMutationVariables> {
    document = UpdateUserFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($item: UserInput!) {
  user {
    update(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }