import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FarmMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FarmComMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Farm {
  readonly id: string;
  readonly farmcom_id?: string;
  readonly name?: string;
  readonly length?: number;
  readonly width?: number;
  readonly area?: number;
  readonly is_available?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Farm, FarmMetaData>);
  static copyOf(source: Farm, mutator: (draft: MutableModel<Farm, FarmMetaData>) => MutableModel<Farm, FarmMetaData> | void): Farm;
}

export declare class FarmCom {
  readonly id: string;
  readonly name?: string;
  readonly postalcode?: string;
  readonly country?: string;
  readonly province?: string;
  readonly city?: string;
  readonly address?: string;
  readonly temperature?: string;
  readonly humidity?: string;
  readonly precipitation?: string;
  readonly vol_of_sunshine?: string;
  readonly is_organic?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FarmCom, FarmComMetaData>);
  static copyOf(source: FarmCom, mutator: (draft: MutableModel<FarmCom, FarmComMetaData>) => MutableModel<FarmCom, FarmComMetaData> | void): FarmCom;
}