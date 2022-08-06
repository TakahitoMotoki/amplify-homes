/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRental = /* GraphQL */ `
  query GetRental($id: ID!) {
    getRental(id: $id) {
      id
      farm_id
      user_id
      vegetable_id
      proceeding
      start_ts
      end_ts
      fee
      init_soilmeasurement
      result_rank
      result_harvest
      alias
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRentals = /* GraphQL */ `
  query ListRentals(
    $filter: ModelRentalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farm_id
        user_id
        vegetable_id
        proceeding
        start_ts
        end_ts
        fee
        init_soilmeasurement
        result_rank
        result_harvest
        alias
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRentals = /* GraphQL */ `
  query SyncRentals(
    $filter: ModelRentalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRentals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        farm_id
        user_id
        vegetable_id
        proceeding
        start_ts
        end_ts
        fee
        init_soilmeasurement
        result_rank
        result_harvest
        alias
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      icon
      name
      point
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        icon
        name
        point
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        icon
        name
        point
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFarm = /* GraphQL */ `
  query GetFarm($id: ID!) {
    getFarm(id: $id) {
      id
      farmcom_id
      name
      length
      width
      area
      is_available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFarms = /* GraphQL */ `
  query ListFarms(
    $filter: ModelFarmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        farmcom_id
        name
        length
        width
        area
        is_available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFarms = /* GraphQL */ `
  query SyncFarms(
    $filter: ModelFarmFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFarms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        farmcom_id
        name
        length
        width
        area
        is_available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFarmCom = /* GraphQL */ `
  query GetFarmCom($id: ID!) {
    getFarmCom(id: $id) {
      id
      name
      postalcode
      country
      province
      city
      address
      temperature
      humidity
      precipitation
      vol_of_sunshine
      is_organic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFarmComs = /* GraphQL */ `
  query ListFarmComs(
    $filter: ModelFarmComFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarmComs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        postalcode
        country
        province
        city
        address
        temperature
        humidity
        precipitation
        vol_of_sunshine
        is_organic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFarmComs = /* GraphQL */ `
  query SyncFarmComs(
    $filter: ModelFarmComFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFarmComs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        postalcode
        country
        province
        city
        address
        temperature
        humidity
        precipitation
        vol_of_sunshine
        is_organic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
