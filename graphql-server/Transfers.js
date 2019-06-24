const transfers = [{
    _Key: 23000000000,
    Classifications: ";;",
    UserHint: 0,
    DestinationUnitOfMeasurement: "[m³]",
    DestinationAmount: 1.023849276,
    SourceUnitOfMeasurement: "[m³]",
    SourceAmount: null,
    _DestinationMaterialKey: 83000000166,
    _SourceMaterialKey: 83000000000,
    _DestinationUnitKey: 81200000215,
    _SourceUnitKey: 81200000000,
    TransferBatchUniversalName: "",
    _TransferBatchKey: 10000002305,
    DestinationBatchUniversalName: "[Mixed batch].[Mixed batch]",
    _DestinationBatchKey: 10000002316,
    SourceBatchUniversalName: "(*-1845134380.1@P*)",
    _SourceBatchKey: 10000002305,
    StartDate: "2016-09-14T23:00:00+01:00",
    ConfirmationState: 1,
    _TransferTypeKey: 85000000039,
    _EnterpriseKey: 7000000000,
    Comment: "",
    _LastJob: 100000029911,
    _1stJob: 100000029911,
    _Name: "96269@P",
    DestinationValueTimestamp: "2016-09-15T19:26:50+02:00",
    SourceValueTimestamp: "2016-09-15T19:26:50+02:00",
    EndTime: "2016-09-15T19:26:50+02:00",
    StartTime: "2016-09-15T19:26:50+02:00",
    _IsDeleted: 0,
    _XuClassifications: null,
    _XuDestinationUnitOfMeasurement: null,
    _XuDestinationAmount: null,
    _XuSourceUnitOfMeasurement: null,
    _XuSourceAmount: null,
    _Xu_DestinationMaterialKey: null,
    _Xu_SourceMaterialKey: null,
    _Xu_DestinationUnitKey: null,
    _Xu_SourceUnitKey: null,
    _XuTransferBatchUniversalName: null,
    _Xu_TransferBatchKey: null,
    _XuDestinationBatchUniversalName: null,
    _Xu_DestinationBatchKey: null,
    _XuSourceBatchUniversalName: null,
    _Xu_SourceBatchKey: null,
    _XuDestinationValueTimestamp: null,
    _XuSourceValueTimestamp: null,
    _XuEndTime: null,
    _XuStartTime: null,
    _XuConfirmationState: null,
    _Xu_TransferTypeKey: null,
    _XuComment: null
}];

module.exports = class TransferData {
    findAll() {
        return transfers;
    }
}