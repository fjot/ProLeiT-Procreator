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
    _IsDeleted: 0
}];

module.exports = class TransferData {
    findAll() {
        return transfers;
    }
}