/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRental = /* GraphQL */ `
  mutation CreateRental(
    $input: CreateRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    createRental(input: $input, condition: $condition) {
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
export const updateRental = /* GraphQL */ `
  mutation UpdateRental(
    $input: UpdateRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    updateRental(input: $input, condition: $condition) {
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
export const deleteRental = /* GraphQL */ `
  mutation DeleteRental(
    $input: DeleteRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    deleteRental(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFarm = /* GraphQL */ `
  mutation CreateFarm(
    $input: CreateFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    createFarm(input: $input, condition: $condition) {
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
export const updateFarm = /* GraphQL */ `
  mutation UpdateFarm(
    $input: UpdateFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    updateFarm(input: $input, condition: $condition) {
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
export const deleteFarm = /* GraphQL */ `
  mutation DeleteFarm(
    $input: DeleteFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    deleteFarm(input: $input, condition: $condition) {
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
export const createFarmCom = /* GraphQL */ `
  mutation CreateFarmCom(
    $input: CreateFarmComInput!
    $condition: ModelFarmComConditionInput
  ) {
    createFarmCom(input: $input, condition: $condition) {
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
export const updateFarmCom = /* GraphQL */ `
  mutation UpdateFarmCom(
    $input: UpdateFarmComInput!
    $condition: ModelFarmComConditionInput
  ) {
    updateFarmCom(input: $input, condition: $condition) {
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
export const deleteFarmCom = /* GraphQL */ `
  mutation DeleteFarmCom(
    $input: DeleteFarmComInput!
    $condition: ModelFarmComConditionInput
  ) {
    deleteFarmCom(input: $input, condition: $condition) {
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
