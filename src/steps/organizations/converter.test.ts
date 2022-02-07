import { RumbleOrganization } from '../../types';
import { createOrganizationEntity } from './converter';

describe('#createOrganizationEntity', () => {
  test('should convert to entity', () => {
    const org: RumbleOrganization = {
      id: 'organization_id',
      name: 'test_org',
      created_at: 10000,
      created_by: 'test_user',
      updated_at: 20000,
      client_id: 'client_id',
      download_token: 'test_download_token',
      download_token_created_at: 10000,
      demo: false,
      project: false,
      parent_id: 'test_parent_id',
      description: 'test_organization',
      inactive: false,
      deactivated_at: 0,
      service_count: 100,
      service_count_tcp: 25,
      service_count_udp: 25,
      service_count_arp: 25,
      service_count_icmp: 25,
      asset_count: 1000,
      export_token: 'test_export_token',
      export_token_created_at: 10000,
      export_token_last_used_at: 20000,
      export_token_last_used_by: 'test_user',
      export_token_counter: 200,
      expiration_assets_stale: 20,
      expiration_assets_offline: 10,
      expiration_scans: 20,
      expiration_warning_last_sent: 20,
    };

    const orgEntity = createOrganizationEntity(org);
    expect(orgEntity).toEqual({
      _class: ['Organization'],
      _key: 'organization_id',
      _type: 'rumble_organization',
      name: 'test_org',
      createdOn: undefined,
      description: 'test_organization',
      displayName: 'test_org',
      id: 'organization_id',
      _rawData: [
        {
          name: 'default',
          rawData: {
            ...org,
            export_token: undefined,
            export_token_last_used_by: undefined,
            download_token: undefined,
          },
        },
      ],
    });
  });
});
