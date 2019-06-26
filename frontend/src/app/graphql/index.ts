export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Batches = {
  __typename?: 'Batches',
  _Key?: Maybe<Scalars['Float']>,
  TotalOutflow?: Maybe<Scalars['Float']>,
  TotalInflow?: Maybe<Scalars['Float']>,
  CurrentStock?: Maybe<Scalars['Float']>,
  OpeningStock?: Maybe<Scalars['Int']>,
  QualityState?: Maybe<Scalars['Int']>,
  ConfirmationState?: Maybe<Scalars['Int']>,
  _BatchTypeKey?: Maybe<Scalars['Float']>,
  _MaterialKey?: Maybe<Scalars['Float']>,
  _UnitKey?: Maybe<Scalars['Float']>,
  TheDate?: Maybe<Scalars['String']>,
  _EnterpriseKey?: Maybe<Scalars['Float']>,
  ApproachMaterialNumber?: Maybe<Scalars['String']>,
  SupplierBatchNumber?: Maybe<Scalars['String']>,
  OrderNumber?: Maybe<Scalars['String']>,
  BatchName?: Maybe<Scalars['String']>,
  Comment?: Maybe<Scalars['String']>,
  _IsDeleted?: Maybe<Scalars['Int']>,
  _1stJob?: Maybe<Scalars['Float']>,
  _Name?: Maybe<Scalars['String']>,
  Classifications?: Maybe<Scalars['String']>,
  MonthSerial?: Maybe<Scalars['Float']>,
  _PlantKey?: Maybe<Scalars['Float']>,
  WeekSerial?: Maybe<Scalars['Int']>,
  NonConformityFlag?: Maybe<Scalars['Int']>,
  _RecipeKey?: Maybe<Scalars['Float']>,
  EndTime?: Maybe<Scalars['String']>,
  StartTime?: Maybe<Scalars['String']>,
  StockEndTime?: Maybe<Scalars['String']>,
  StockStartTime?: Maybe<Scalars['String']>,
  ProcessEndTime?: Maybe<Scalars['String']>,
  ProcessStartTime?: Maybe<Scalars['String']>,
};

export type Query = {
  __typename?: 'Query',
  getBatches?: Maybe<Array<Maybe<Batches>>>,
  getBatch?: Maybe<Array<Maybe<Batches>>>,
  transfers?: Maybe<Array<Maybe<Transfer>>>,
};


export type QueryGetBatchArgs = {
  name: Scalars['String']
};

export type Transfer = {
  __typename?: 'Transfer',
  _Key?: Maybe<Scalars['Float']>,
  Classifications?: Maybe<Scalars['String']>,
  UserHint?: Maybe<Scalars['Int']>,
  DestinationUnitOfMeasurement?: Maybe<Scalars['String']>,
  DestinationAmount?: Maybe<Scalars['Float']>,
  SourceUnitOfMeasurement?: Maybe<Scalars['String']>,
  SourceAmount?: Maybe<Scalars['Int']>,
  _DestinationMaterialKey?: Maybe<Scalars['Float']>,
  _SourceMaterialKey?: Maybe<Scalars['Float']>,
  _DestinationUnitKey?: Maybe<Scalars['Float']>,
  _SourceUnitKey?: Maybe<Scalars['Float']>,
  TransferBatchUniversalName?: Maybe<Scalars['String']>,
  _TransferBatchKey?: Maybe<Scalars['Float']>,
  DestinationBatchUniversalName?: Maybe<Scalars['String']>,
  _DestinationBatchKey?: Maybe<Scalars['Float']>,
  SourceBatchUniversalName?: Maybe<Scalars['String']>,
  _SourceBatchKey?: Maybe<Scalars['Float']>,
  StartDate?: Maybe<Scalars['String']>,
  ConfirmationState?: Maybe<Scalars['Int']>,
  _TransferTypeKey?: Maybe<Scalars['Float']>,
  _EnterpriseKey?: Maybe<Scalars['Float']>,
  Comment?: Maybe<Scalars['String']>,
  _LastJob?: Maybe<Scalars['Float']>,
  _1stJob?: Maybe<Scalars['Float']>,
  _Name?: Maybe<Scalars['String']>,
  DestinationValueTimestamp?: Maybe<Scalars['String']>,
  SourceValueTimestamp?: Maybe<Scalars['String']>,
  EndTime?: Maybe<Scalars['String']>,
  StartTime?: Maybe<Scalars['String']>,
  _IsDeleted?: Maybe<Scalars['Int']>,
};
