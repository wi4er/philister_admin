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
  authByContact?: Maybe<User>;
  authByLogin?: Maybe<User>;
  logout: Scalars['Boolean'];
  registerByLogin?: Maybe<User>;
};


export type AuthMutationAuthByContactArgs = {
  contact: Scalars['String'];
  password: Scalars['String'];
  value: Scalars['String'];
};


export type AuthMutationAuthByLoginArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};


export type AuthMutationRegisterByLoginArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type Block = Content & {
  __typename?: 'Block';
  created_at: Scalars['String'];
  element: BlockElement;
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['Int'];
  propertyItem?: Maybe<BlockProperty>;
  propertyList: Array<BlockProperty>;
  propertyString?: Maybe<Scalars['String']>;
  section: BlockSection;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type BlockPropertyItemArgs = {
  id: Scalars['String'];
};


export type BlockPropertyStringArgs = {
  id: Scalars['String'];
};

export type BlockElement = {
  __typename?: 'BlockElement';
  count: Scalars['Float'];
  list: Array<Element>;
};

export type BlockInput = {
  flag: Array<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  property: Array<BlockPropertyInput>;
};

export type BlockMutation = {
  __typename?: 'BlockMutation';
  /** Adding new content block */
  add: Block;
  /** Deletion existent content block */
  delete: Array<Scalars['Int']>;
  /** Toggle flag in content block */
  toggleFlag: Block;
  /** Updating existent content block */
  update: Block;
};


export type BlockMutationAddArgs = {
  item: BlockInput;
};


export type BlockMutationDeleteArgs = {
  id: Array<Scalars['Int']>;
};


export type BlockMutationToggleFlagArgs = {
  flag: Scalars['String'];
  id: Scalars['Int'];
};


export type BlockMutationUpdateArgs = {
  item: BlockInput;
};

export type BlockProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type BlockPropertyInput = {
  lang?: InputMaybe<Scalars['String']>;
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

export type BlockSection = {
  __typename?: 'BlockSection';
  count: Scalars['Float'];
  list: Array<Section>;
};

export type BlockString = BlockProperty & ContentProperty & {
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
  flagList: Array<Flag>;
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
  flag: Array<Scalars['String']>;
  id: Scalars['String'];
  property: Array<DirectoryPropertyInput>;
  value: Array<Scalars['String']>;
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
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['Int'];
  propertyItem?: Maybe<ElementProperty>;
  propertyList: Array<ElementProperty>;
  propertyString?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type ElementPropertyItemArgs = {
  id: Scalars['String'];
};


export type ElementPropertyStringArgs = {
  id: Scalars['String'];
};

export type ElementFilter = {
  field: Scalars['String'];
  operation?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type ElementInput = {
  block: Scalars['Float'];
  flag: Array<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  property: Array<ElementInputProperty>;
};

export type ElementInputProperty = {
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
};

export type ElementMutation = {
  __typename?: 'ElementMutation';
  /** Adding new content element */
  add: Element;
  /** Deletion existent content element */
  delete: Array<Scalars['Int']>;
  /**
   *
   *         Updating existing content element flags. New content flag will be added, existent flag will be removed.
   *
   */
  toggleFlag: Element;
  /**
   *
   *         Updating existing content element with new data. All previous data will be lost and replaced with new.
   *
   */
  update: Element;
};


export type ElementMutationAddArgs = {
  item: ElementInput;
};


export type ElementMutationDeleteArgs = {
  id: Array<Scalars['Int']>;
};


export type ElementMutationToggleFlagArgs = {
  flag: Scalars['String'];
  id: Scalars['Int'];
};


export type ElementMutationUpdateArgs = {
  item: ElementInput;
};

export type ElementProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type ElementQuery = {
  __typename?: 'ElementQuery';
  count: Scalars['Int'];
  item?: Maybe<Element>;
  list: Array<Element>;
};


export type ElementQueryCountArgs = {
  filter?: InputMaybe<Array<ElementFilter>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ElementQueryItemArgs = {
  id: Scalars['Int'];
};


export type ElementQueryListArgs = {
  filter?: InputMaybe<Array<ElementFilter>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ElementString = ContentProperty & ElementProperty & {
  __typename?: 'ElementString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
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
  element: ElementMutation;
  flag: FlagMutation;
  lang: LangMutation;
  property: PropertyMutation;
  section: SectionMutation;
  user: UserMutation;
  userContact: UserContactMutation;
  userGroup: UserGroupMutation;
  value: ValueMutation;
};

export type Property = {
  __typename?: 'Property';
  created_at: Scalars['String'];
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['String'];
  propertyItem?: Maybe<PropertyProperty>;
  propertyList: Array<PropertyProperty>;
  propertyString?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type PropertyPropertyItemArgs = {
  id: Scalars['String'];
};


export type PropertyPropertyStringArgs = {
  id: Scalars['String'];
};

export type PropertyInput = {
  flag: Array<Scalars['String']>;
  id: Scalars['String'];
  property: Array<PropertyPropertyInput>;
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
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type PropertyPropertyInput = {
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
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

export type PropertyString = PropertyProperty & {
  __typename?: 'PropertyString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
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
  block: Block;
  created_at: Scalars['String'];
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
  id: Scalars['Int'];
  parent?: Maybe<Section>;
  propertyItem?: Maybe<SectionProperty>;
  propertyList: Array<SectionProperty>;
  propertyString?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};


export type SectionPropertyItemArgs = {
  id: Scalars['String'];
};


export type SectionPropertyStringArgs = {
  id: Scalars['String'];
};

export type SectionInput = {
  block: Scalars['Float'];
  flag: Array<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  parent?: InputMaybe<Scalars['Float']>;
  property: Array<SectionInputProperty>;
};

export type SectionInputProperty = {
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
};

export type SectionMutation = {
  __typename?: 'SectionMutation';
  /** Adding new content section */
  add: Section;
  /** Deletion existent content section */
  delete: Array<Scalars['Int']>;
  /**
   *
   *         Updating existing content section flags. New content flag will be added, existent flag will be removed.
   *
   */
  toggleFlag: Section;
  /** Updating existent content section */
  update: Section;
};


export type SectionMutationAddArgs = {
  item: SectionInput;
};


export type SectionMutationDeleteArgs = {
  id: Array<Scalars['Int']>;
};


export type SectionMutationToggleFlagArgs = {
  flag: Scalars['String'];
  id: Scalars['Int'];
};


export type SectionMutationUpdateArgs = {
  item: SectionInput;
};

export type SectionProperty = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type SectionQuery = {
  __typename?: 'SectionQuery';
  count: Scalars['Int'];
  item?: Maybe<Section>;
  list: Array<Section>;
};


export type SectionQueryCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type SectionQueryItemArgs = {
  id: Scalars['Int'];
};


export type SectionQueryListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type SectionString = ContentProperty & SectionProperty & {
  __typename?: 'SectionString';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  lang?: Maybe<Lang>;
  property: Property;
  string: Scalars['String'];
  updated_at: Scalars['String'];
  version: Scalars['Int'];
};

export type User = WithFlagSchema & {
  __typename?: 'User';
  contact: Array<UserUserContact>;
  created_at: Scalars['String'];
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
  group?: Maybe<Array<UserGroup>>;
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
  group: Array<Scalars['Int']>;
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
  flagList: Array<Flag>;
  flagString: Array<Scalars['String']>;
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
  flag: Array<Scalars['String']>;
  id: Scalars['String'];
  property: Array<ValuePropertyInput>;
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
  lang?: InputMaybe<Scalars['String']>;
  property: Scalars['String'];
  string: Scalars['String'];
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

export type AuthByLoginMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthByLoginMutation = { __typename?: 'Mutation', auth?: { __typename?: 'AuthMutation', authByLogin?: { __typename?: 'User', id: number, login: string, group?: Array<{ __typename?: 'UserGroup', id: number }> | null } | null } | null };

export type GetMyselfQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyselfQuery = { __typename?: 'Query', user: { __typename?: 'UserQuery', myself?: { __typename?: 'User', id: number, login: string, propertyList: Array<{ __typename?: 'UserDescription', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserString', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserUser', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserValue', string: string, property: { __typename?: 'Property', id: string } }> } | null } };

export type LogoutMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutationMutation = { __typename?: 'Mutation', auth?: { __typename?: 'AuthMutation', logout: boolean } | null };

export type AddBlockItemMutationVariables = Exact<{
  item: BlockInput;
}>;


export type AddBlockItemMutation = { __typename?: 'Mutation', block: { __typename?: 'BlockMutation', add: { __typename?: 'Block', id: number } } };

export type DeleteBlockListMutationVariables = Exact<{
  id: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type DeleteBlockListMutation = { __typename?: 'Mutation', block: { __typename?: 'BlockMutation', delete: Array<number> } };

export type GetBlockAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlockAdditionQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type GetBlockListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetBlockListQuery = { __typename?: 'Query', block: { __typename?: 'BlockQuery', count: number, list: Array<{ __typename?: 'Block', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, name?: string | null, propertyList: Array<{ __typename?: 'BlockString', id: number, string: string, property: { __typename?: 'Property', id: string } }>, section: { __typename?: 'BlockSection', count: number }, element: { __typename?: 'BlockElement', count: number } }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type GetBlockUpdateQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBlockUpdateQuery = { __typename?: 'Query', block: { __typename?: 'BlockQuery', item?: { __typename?: 'Block', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, propertyList: Array<{ __typename?: 'BlockString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } }> } | null }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type ToggleBlockFlagMutationVariables = Exact<{
  id: Scalars['Int'];
  flag: Scalars['String'];
}>;


export type ToggleBlockFlagMutation = { __typename?: 'Mutation', block: { __typename?: 'BlockMutation', toggleFlag: { __typename?: 'Block', id: number } } };

export type UpdateBlockItemMutationVariables = Exact<{
  item: BlockInput;
}>;


export type UpdateBlockItemMutation = { __typename?: 'Mutation', block: { __typename?: 'BlockMutation', update: { __typename?: 'Block', id: number } } };

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

export type AddElementItemMutationVariables = Exact<{
  item: ElementInput;
}>;


export type AddElementItemMutation = { __typename?: 'Mutation', element: { __typename?: 'ElementMutation', add: { __typename?: 'Element', id: number } } };

export type DeleteElementListMutationVariables = Exact<{
  id: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type DeleteElementListMutation = { __typename?: 'Mutation', element: { __typename?: 'ElementMutation', delete: Array<number> } };

export type GetElementAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetElementAdditionQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type GetElementListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Array<ElementFilter> | ElementFilter>;
}>;


export type GetElementListQuery = { __typename?: 'Query', element: { __typename?: 'ElementQuery', count: number, list: Array<{ __typename?: 'Element', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, propertyList: Array<{ __typename?: 'ElementString', id: number, string: string, property: { __typename?: 'Property', id: string } }> }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type GetElementUpdateQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetElementUpdateQuery = { __typename?: 'Query', element: { __typename?: 'ElementQuery', item?: { __typename?: 'Element', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, block: { __typename?: 'Block', id: number }, propertyList: Array<{ __typename?: 'ElementString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } }> } | null }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type ToggleElementFlagMutationVariables = Exact<{
  id: Scalars['Int'];
  flag: Scalars['String'];
}>;


export type ToggleElementFlagMutation = { __typename?: 'Mutation', element: { __typename?: 'ElementMutation', toggleFlag: { __typename?: 'Element', id: number, flagString: Array<string> } } };

export type UpdateElementItemMutationVariables = Exact<{
  item: ElementInput;
}>;


export type UpdateElementItemMutation = { __typename?: 'Mutation', element: { __typename?: 'ElementMutation', update: { __typename?: 'Element', id: number } } };

export type AddFlagMutationVariables = Exact<{
  item: FlagInput;
}>;


export type AddFlagMutation = { __typename?: 'Mutation', flag: { __typename?: 'FlagMutation', add: { __typename?: 'Flag', id: string } } };

export type DeleteFlagListMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteFlagListMutation = { __typename?: 'Mutation', flag: { __typename?: 'FlagMutation', delete: Array<string> } };

export type GetFlagAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFlagAdditionQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string, name?: string | null }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string, name?: string | null }> } };

export type GetFlagListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetFlagListQuery = { __typename?: 'Query', flag: { __typename?: 'FlagQuery', count: number, list: Array<{ __typename?: 'Flag', id: string, label?: string | null, flagList: Array<{ __typename?: 'FlagFlag', id: number, flag: { __typename?: 'Flag', id: string } }>, propertyList: Array<{ __typename?: 'FlagString', id: number, string: string, property: { __typename?: 'Property', id: string } }> }> } };

export type GetFlagUpdateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetFlagUpdateQuery = { __typename?: 'Query', flag: { __typename?: 'FlagQuery', item?: { __typename?: 'Flag', id: string, created_at: string, updated_at: string, version: number, propertyList: Array<{ __typename?: 'FlagString', id: number, string: string, property: { __typename?: 'Property', id: string } }>, flagList: Array<{ __typename?: 'FlagFlag', id: number, flag: { __typename?: 'Flag', id: string } }> } | null, list: Array<{ __typename?: 'Flag', id: string, name?: string | null }> }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string, name?: string | null }> } };

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


export type AddPropertyItemMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', add: { __typename?: 'Property', id: string, propertyList: Array<{ __typename?: 'PropertyString', string: string, property: { __typename?: 'Property', id: string } }> } } };

export type DeletePropertyListMutationVariables = Exact<{
  id: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeletePropertyListMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', delete: Array<string> } };

export type GetPropertyAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPropertyAdditionQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type GetPropertyIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPropertyIdQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', idList: Array<{ __typename?: 'Property', id: string }> } };

export type GetPropertyListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetPropertyListQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', count: number, list: Array<{ __typename?: 'Property', id: string, propertyList: Array<{ __typename?: 'PropertyString', id: number, string: string, property: { __typename?: 'Property', id: string } }> }> } };

export type GetPropertyUpdateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPropertyUpdateQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }>, item?: { __typename?: 'Property', id: string, created_at: string, updated_at: string, propertyList: Array<{ __typename?: 'PropertyString', id: number, string: string, property: { __typename?: 'Property', id: string } }> } | null }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type UpdatePropertyItemMutationVariables = Exact<{
  item: PropertyInput;
}>;


export type UpdatePropertyItemMutation = { __typename?: 'Mutation', property: { __typename?: 'PropertyMutation', update: { __typename?: 'Property', id: string } } };

export type AddSectionItemMutationVariables = Exact<{
  item: SectionInput;
}>;


export type AddSectionItemMutation = { __typename?: 'Mutation', section: { __typename?: 'SectionMutation', add: { __typename?: 'Section', id: number } } };

export type DeleteSectionListMutationVariables = Exact<{
  id: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type DeleteSectionListMutation = { __typename?: 'Mutation', section: { __typename?: 'SectionMutation', delete: Array<number> } };

export type GetSectionAdditionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSectionAdditionQuery = { __typename?: 'Query', section: { __typename?: 'SectionQuery', list: Array<{ __typename?: 'Section', id: number }> }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type GetSectionListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetSectionListQuery = { __typename?: 'Query', section: { __typename?: 'SectionQuery', count: number, list: Array<{ __typename?: 'Section', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, parent?: { __typename?: 'Section', id: number } | null, propertyList: Array<{ __typename?: 'SectionString', id: number, string: string, property: { __typename?: 'Property', id: string } }> }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type GetSectionUpdateQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSectionUpdateQuery = { __typename?: 'Query', section: { __typename?: 'SectionQuery', item?: { __typename?: 'Section', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, parent?: { __typename?: 'Section', id: number } | null, block: { __typename?: 'Block', id: number }, propertyList: Array<{ __typename?: 'SectionString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } }> } | null, list: Array<{ __typename?: 'Section', id: number }> }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type ToggleSectionFlagMutationVariables = Exact<{
  id: Scalars['Int'];
  flag: Scalars['String'];
}>;


export type ToggleSectionFlagMutation = { __typename?: 'Mutation', section: { __typename?: 'SectionMutation', toggleFlag: { __typename?: 'Section', id: number, flagString: Array<string> } } };

export type UpdateSectionItemMutationVariables = Exact<{
  item: SectionInput;
}>;


export type UpdateSectionItemMutation = { __typename?: 'Mutation', section: { __typename?: 'SectionMutation', update: { __typename?: 'Section', id: number } } };

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


export type GetUserGroupAdditionQuery = { __typename?: 'Query', userGroup: { __typename?: 'UserGroupQuery', list: Array<{ __typename?: 'UserGroup', id: number, propertyString?: string | null, parent?: { __typename?: 'UserGroup', id: number } | null }> }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type GetUserGroupListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserGroupListQuery = { __typename?: 'Query', userGroup: { __typename?: 'UserGroupQuery', count: number, list: Array<{ __typename?: 'UserGroup', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, propertyList: Array<{ __typename?: 'UserGroupString', id: number, string: string, property: { __typename?: 'Property', id: string } }> }> } };

export type GetUserGroupUpdateQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserGroupUpdateQuery = { __typename?: 'Query', userGroup: { __typename?: 'UserGroupQuery', list: Array<{ __typename?: 'UserGroup', id: number, propertyString?: string | null, parent?: { __typename?: 'UserGroup', id: number } | null }>, item?: { __typename?: 'UserGroup', id: number, created_at: string, updated_at: string, version: number, flagString: Array<string>, parent?: { __typename?: 'UserGroup', id: number } | null, children: Array<{ __typename?: 'UserGroup', id: number }>, propertyList: Array<{ __typename?: 'UserGroupString', id: number, string: string, property: { __typename?: 'Property', id: string } }> } | null }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

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


export type GetUserAdditionQuery = { __typename?: 'Query', property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, userContact: { __typename?: 'UserContactQuery', list: Array<{ __typename?: 'UserContact', id: string }> }, userGroup: { __typename?: 'UserGroupQuery', list: Array<{ __typename?: 'UserGroup', id: number, propertyString?: string | null, parent?: { __typename?: 'UserGroup', id: number } | null }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type GetUserListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserListQuery = { __typename?: 'Query', user: { __typename?: 'UserQuery', count: number, list: Array<{ __typename?: 'User', id: number, login: string, flagString: Array<string>, propertyList: Array<{ __typename?: 'UserDescription', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserString', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserUser', string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserValue', string: string, value: { __typename?: 'Value', id: string }, property: { __typename?: 'Property', id: string } }> }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> } };

export type GetUserUpdateQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserUpdateQuery = { __typename?: 'Query', user: { __typename?: 'UserQuery', item?: { __typename?: 'User', id: number, login: string, created_at: string, updated_at: string, version: number, flagString: Array<string>, contact: Array<{ __typename?: 'UserUserContact', id: number, value: string, contact: { __typename?: 'UserContact', id: string } }>, propertyList: Array<{ __typename?: 'UserDescription', id: number, string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserString', id: number, string: string, lang?: { __typename?: 'Lang', id: string } | null, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserUser', id: number, string: string, property: { __typename?: 'Property', id: string } } | { __typename?: 'UserValue', id: number, string: string, property: { __typename?: 'Property', id: string } }> } | null }, property: { __typename?: 'PropertyQuery', list: Array<{ __typename?: 'Property', id: string }> }, flag: { __typename?: 'FlagQuery', list: Array<{ __typename?: 'Flag', id: string }> }, userContact: { __typename?: 'UserContactQuery', list: Array<{ __typename?: 'UserContact', id: string }> }, userGroup: { __typename?: 'UserGroupQuery', list: Array<{ __typename?: 'UserGroup', id: number, propertyString?: string | null, parent?: { __typename?: 'UserGroup', id: number } | null }> }, lang: { __typename?: 'LangQuery', list: Array<{ __typename?: 'Lang', id: string }> } };

export type UpdateUserFlagMutationVariables = Exact<{
  id: Scalars['Int'];
  flag: Scalars['String'];
}>;


export type UpdateUserFlagMutation = { __typename?: 'Mutation', user: { __typename?: 'UserMutation', updateFlag: { __typename?: 'User', id: number } } };

export type UpdateUserMutationVariables = Exact<{
  item: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', user: { __typename?: 'UserMutation', update: { __typename?: 'User', id: number } } };

export const AuthByLoginDocument = gql`
    mutation AuthByLogin($login: String!, $password: String!) {
  auth {
    authByLogin(login: $login, password: $password) {
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
  export class AuthByLoginGQL extends Apollo.Mutation<AuthByLoginMutation, AuthByLoginMutationVariables> {
    document = AuthByLoginDocument;
    
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
export const LogoutMutationDocument = gql`
    mutation LogoutMutation {
  auth {
    logout
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LogoutMutationGQL extends Apollo.Mutation<LogoutMutationMutation, LogoutMutationMutationVariables> {
    document = LogoutMutationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddBlockItemDocument = gql`
    mutation AddBlockItem($item: BlockInput!) {
  block {
    add(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddBlockItemGQL extends Apollo.Mutation<AddBlockItemMutation, AddBlockItemMutationVariables> {
    document = AddBlockItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteBlockListDocument = gql`
    mutation DeleteBlockList($id: [Int!]!) {
  block {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteBlockListGQL extends Apollo.Mutation<DeleteBlockListMutation, DeleteBlockListMutationVariables> {
    document = DeleteBlockListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBlockAdditionDocument = gql`
    query GetBlockAddition {
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
  export class GetBlockAdditionGQL extends Apollo.Query<GetBlockAdditionQuery, GetBlockAdditionQueryVariables> {
    document = GetBlockAdditionDocument;
    
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
      flagString
      section {
        count
      }
      element {
        count
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
  export class GetBlockListGQL extends Apollo.Query<GetBlockListQuery, GetBlockListQueryVariables> {
    document = GetBlockListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBlockUpdateDocument = gql`
    query GetBlockUpdate($id: Int!) {
  block {
    item(id: $id) {
      id
      created_at
      updated_at
      version
      flagString
      propertyList {
        id
        string
        property {
          id
        }
        ... on BlockString {
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
  export class GetBlockUpdateGQL extends Apollo.Query<GetBlockUpdateQuery, GetBlockUpdateQueryVariables> {
    document = GetBlockUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ToggleBlockFlagDocument = gql`
    mutation ToggleBlockFlag($id: Int!, $flag: String!) {
  block {
    toggleFlag(id: $id, flag: $flag) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToggleBlockFlagGQL extends Apollo.Mutation<ToggleBlockFlagMutation, ToggleBlockFlagMutationVariables> {
    document = ToggleBlockFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateBlockItemDocument = gql`
    mutation UpdateBlockItem($item: BlockInput!) {
  block {
    update(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateBlockItemGQL extends Apollo.Mutation<UpdateBlockItemMutation, UpdateBlockItemMutationVariables> {
    document = UpdateBlockItemDocument;
    
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
export const AddElementItemDocument = gql`
    mutation AddElementItem($item: ElementInput!) {
  element {
    add(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddElementItemGQL extends Apollo.Mutation<AddElementItemMutation, AddElementItemMutationVariables> {
    document = AddElementItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteElementListDocument = gql`
    mutation DeleteElementList($id: [Int!]!) {
  element {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteElementListGQL extends Apollo.Mutation<DeleteElementListMutation, DeleteElementListMutationVariables> {
    document = DeleteElementListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetElementAdditionDocument = gql`
    query GetElementAddition {
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
  export class GetElementAdditionGQL extends Apollo.Query<GetElementAdditionQuery, GetElementAdditionQueryVariables> {
    document = GetElementAdditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetElementListDocument = gql`
    query getElementList($limit: Int, $offset: Int, $filter: [ElementFilter!]) {
  element {
    list(limit: $limit, offset: $offset, filter: $filter) {
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
      flagString
    }
    count(filter: $filter)
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
  export class GetElementListGQL extends Apollo.Query<GetElementListQuery, GetElementListQueryVariables> {
    document = GetElementListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetElementUpdateDocument = gql`
    query GetElementUpdate($id: Int!) {
  element {
    item(id: $id) {
      id
      created_at
      updated_at
      version
      flagString
      block {
        id
      }
      propertyList {
        id
        string
        property {
          id
        }
        ... on ElementString {
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
  export class GetElementUpdateGQL extends Apollo.Query<GetElementUpdateQuery, GetElementUpdateQueryVariables> {
    document = GetElementUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ToggleElementFlagDocument = gql`
    mutation ToggleElementFlag($id: Int!, $flag: String!) {
  element {
    toggleFlag(id: $id, flag: $flag) {
      id
      flagString
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToggleElementFlagGQL extends Apollo.Mutation<ToggleElementFlagMutation, ToggleElementFlagMutationVariables> {
    document = ToggleElementFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateElementItemDocument = gql`
    mutation UpdateElementItem($item: ElementInput!) {
  element {
    update(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateElementItemGQL extends Apollo.Mutation<UpdateElementItemMutation, UpdateElementItemMutationVariables> {
    document = UpdateElementItemDocument;
    
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
export const GetPropertyAdditionDocument = gql`
    query GetPropertyAddition {
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
  export class GetPropertyAdditionGQL extends Apollo.Query<GetPropertyAdditionQuery, GetPropertyAdditionQueryVariables> {
    document = GetPropertyAdditionDocument;
    
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
  export class GetPropertyListGQL extends Apollo.Query<GetPropertyListQuery, GetPropertyListQueryVariables> {
    document = GetPropertyListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPropertyUpdateDocument = gql`
    query GetPropertyUpdate($id: String!) {
  property {
    list {
      id
    }
    item(id: $id) {
      id
      created_at
      updated_at
      propertyList {
        id
        string
        property {
          id
        }
      }
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
  export class GetPropertyUpdateGQL extends Apollo.Query<GetPropertyUpdateQuery, GetPropertyUpdateQueryVariables> {
    document = GetPropertyUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePropertyItemDocument = gql`
    mutation UpdatePropertyItem($item: PropertyInput!) {
  property {
    update(item: $item) {
      id
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
export const AddSectionItemDocument = gql`
    mutation AddSectionItem($item: SectionInput!) {
  section {
    add(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddSectionItemGQL extends Apollo.Mutation<AddSectionItemMutation, AddSectionItemMutationVariables> {
    document = AddSectionItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteSectionListDocument = gql`
    mutation DeleteSectionList($id: [Int!]!) {
  section {
    delete(id: $id)
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSectionListGQL extends Apollo.Mutation<DeleteSectionListMutation, DeleteSectionListMutationVariables> {
    document = DeleteSectionListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSectionAdditionDocument = gql`
    query GetSectionAddition {
  section {
    list {
      id
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
  export class GetSectionAdditionGQL extends Apollo.Query<GetSectionAdditionQuery, GetSectionAdditionQueryVariables> {
    document = GetSectionAdditionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSectionListDocument = gql`
    query GetSectionList($limit: Int, $offset: Int) {
  section {
    list(limit: $limit, offset: $offset) {
      id
      created_at
      updated_at
      version
      parent {
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
  export class GetSectionListGQL extends Apollo.Query<GetSectionListQuery, GetSectionListQueryVariables> {
    document = GetSectionListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSectionUpdateDocument = gql`
    query GetSectionUpdate($id: Int!) {
  section {
    item(id: $id) {
      id
      created_at
      updated_at
      version
      flagString
      parent {
        id
      }
      block {
        id
      }
      propertyList {
        id
        string
        property {
          id
        }
        ... on SectionString {
          lang {
            id
          }
        }
      }
    }
  }
  section {
    list {
      id
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
  export class GetSectionUpdateGQL extends Apollo.Query<GetSectionUpdateQuery, GetSectionUpdateQueryVariables> {
    document = GetSectionUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ToggleSectionFlagDocument = gql`
    mutation ToggleSectionFlag($id: Int!, $flag: String!) {
  section {
    toggleFlag(id: $id, flag: $flag) {
      id
      flagString
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToggleSectionFlagGQL extends Apollo.Mutation<ToggleSectionFlagMutation, ToggleSectionFlagMutationVariables> {
    document = ToggleSectionFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSectionItemDocument = gql`
    mutation UpdateSectionItem($item: SectionInput!) {
  section {
    update(item: $item) {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSectionItemGQL extends Apollo.Mutation<UpdateSectionItemMutation, UpdateSectionItemMutationVariables> {
    document = UpdateSectionItemDocument;
    
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
      parent {
        id
      }
      propertyString(id: "NAME")
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
export const GetUserGroupListDocument = gql`
    query GetUserGroupList($limit: Int, $offset: Int) {
  userGroup {
    list(limit: $limit, offset: $offset) {
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
      flagString
    }
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGroupListGQL extends Apollo.Query<GetUserGroupListQuery, GetUserGroupListQueryVariables> {
    document = GetUserGroupListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserGroupUpdateDocument = gql`
    query GetUserGroupUpdate($id: Int!) {
  userGroup {
    list {
      id
      parent {
        id
      }
      propertyString(id: "NAME")
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
  userGroup {
    list {
      id
      parent {
        id
      }
      propertyString(id: "NAME")
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
  userGroup {
    list {
      id
      parent {
        id
      }
      propertyString(id: "NAME")
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