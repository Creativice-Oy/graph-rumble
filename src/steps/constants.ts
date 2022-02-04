import {
  RelationshipClass,
  StepEntityMetadata,
  StepRelationshipMetadata,
} from '@jupiterone/integration-sdk-core';

export const Steps = {
  ACCOUNT: 'fetch-account',
  USERS: 'fetch-users',
  ORGANIZATION: 'fetch-organization',
  ORGANIZATION_USER_RELATIONSHIPS: 'build-user-organization-relationships',
};

export const Entities: Record<
  'ACCOUNT' | 'ORGANIZATION' | 'USER',
  StepEntityMetadata
> = {
  ACCOUNT: {
    resourceName: 'Account',
    _type: 'rumble_account',
    _class: ['Account'],
  },
  ORGANIZATION: {
    resourceName: 'Organization',
    _type: 'rumble_organization',
    _class: ['Organization'],
  },
  USER: {
    resourceName: 'User',
    _type: 'rumble_user',
    _class: ['User'],
  },
};

export const Relationships: Record<
  | 'ACCOUNT_HAS_USER'
  | 'ACCOUNT_HAS_ORGANIZATION'
  | 'ORGANIZATION_ASSIGNED_USER',
  StepRelationshipMetadata
> = {
  ACCOUNT_HAS_USER: {
    _type: 'rumble_account_has_user',
    sourceType: Entities.ACCOUNT._type,
    _class: RelationshipClass.HAS,
    targetType: Entities.USER._type,
  },
  ACCOUNT_HAS_ORGANIZATION: {
    _type: 'rumble_account_has_organization',
    sourceType: Entities.ACCOUNT._type,
    _class: RelationshipClass.HAS,
    targetType: Entities.ORGANIZATION._type,
  },
  ORGANIZATION_ASSIGNED_USER: {
    _type: 'rumble_group_has_user',
    sourceType: Entities.ORGANIZATION._type,
    _class: RelationshipClass.ASSIGNED,
    targetType: Entities.USER._type,
  },
};
