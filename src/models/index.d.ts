import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FarmMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FarmComMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Farm {
  readonly id: string;
  readonly farmcom_id?: string | null;
  readonly name?: string | null;
  readonly length?: number | null;
  readonly width?: number | null;
  readonly area?: number | null;
  readonly is_available?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Farm, FarmMetaData>);
  static copyOf(source: Farm, mutator: (draft: MutableModel<Farm, FarmMetaData>) => MutableModel<Farm, FarmMetaData> | void): Farm;
}

export declare class FarmCom {
  readonly id: string;
  readonly name?: string | null;
  readonly postalcode?: string | null;
  readonly country?: string | null;
  readonly province?: string | null;
  readonly city?: string | null;
  readonly address?: string | null;
  readonly temperature?: string | null;
  readonly humidity?: string | null;
  readonly precipitation?: string | null;
  readonly vol_of_sunshine?: string | null;
  readonly is_organic?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<FarmCom, FarmComMetaData>);
  static copyOf(source: FarmCom, mutator: (draft: MutableModel<FarmCom, FarmComMetaData>) => MutableModel<FarmCom, FarmComMetaData> | void): FarmCom;
}