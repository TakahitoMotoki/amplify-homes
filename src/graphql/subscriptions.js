/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRental = /* GraphQL */ `
  subscription OnCreateRental($filter: ModelSubscriptionRentalFilterInput) {
    onCreateRental(filter: $filter) {
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
export const onUpdateRental = /* GraphQL */ `
  subscription OnUpdateRental($filter: ModelSubscriptionRentalFilterInput) {
    onUpdateRental(filter: $filter) {
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
export const onDeleteRental = /* GraphQL */ `
  subscription OnDeleteRental($filter: ModelSubscriptionRentalFilterInput) {
    onDeleteRental(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateFarm = /* GraphQL */ `
  subscription OnCreateFarm($filter: ModelSubscriptionFarmFilterInput) {
    onCreateFarm(filter: $filter) {
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
export const onUpdateFarm = /* GraphQL */ `
  subscription OnUpdateFarm($filter: ModelSubscriptionFarmFilterInput) {
    onUpdateFarm(filter: $filter) {
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
export const onDeleteFarm = /* GraphQL */ `
  subscription OnDeleteFarm($filter: ModelSubscriptionFarmFilterInput) {
    onDeleteFarm(filter: $filter) {
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
export const onCreateFarmCom = /* GraphQL */ `
  subscription OnCreateFarmCom($filter: ModelSubscriptionFarmComFilterInput) {
    onCreateFarmCom(filter: $filter) {
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
export const onUpdateFarmCom = /* GraphQL */ `
  subscription OnUpdateFarmCom($filter: ModelSubscriptionFarmComFilterInput) {
    onUpdateFarmCom(filter: $filter) {
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
export const onDeleteFarmCom = /* GraphQL */ `
  subscription OnDeleteFarmCom($filter: ModelSubscriptionFarmComFilterInput) {
    onDeleteFarmCom(filter: $filter) {
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
