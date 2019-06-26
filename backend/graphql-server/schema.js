var { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
        getBatches: [Batches],
        getBatch(name: String!): [Batches], 
        transfers: [Transfer]   
    }

    type Batches {
        _Key: Float,
        TotalOutflow: Float,
        TotalInflow: Float,
        CurrentStock: Float,
        OpeningStock: Int,
        QualityState: Int,
        ConfirmationState: Int,
        _BatchTypeKey: Float,
        _MaterialKey: Float,
        _UnitKey: Float,
        TheDate: String,
        _EnterpriseKey:	Float,
        ApproachMaterialNumber:	String,
        SupplierBatchNumber: String,
        OrderNumber: String,
        BatchName: String,
        Comment: String,
        _IsDeleted:	Int,
        _1stJob: Float,
        _Name: String,
        Classifications: String,
        MonthSerial: Float,
        _PlantKey:	Float,
        WeekSerial:	Int,
        NonConformityFlag:	Int,
        _RecipeKey:	Float,
        EndTime: String,
        StartTime: String,
        StockEndTime: String,
        StockStartTime: String,
        ProcessEndTime:	String,
        ProcessStartTime: String
    }

    type Transfer {
        _Key: Float,
        Classifications: String,
        UserHint: Int,
        DestinationUnitOfMeasurement: String,
        DestinationAmount: Float,
        SourceUnitOfMeasurement: String,
        SourceAmount: Int,
        _DestinationMaterialKey: Float,
        _SourceMaterialKey: Float,
        _DestinationUnitKey: Float,
        _SourceUnitKey: Float,
        TransferBatchUniversalName: String,
        _TransferBatchKey: Float,
        DestinationBatchUniversalName: String,
        _DestinationBatchKey: Float,
        SourceBatchUniversalName: String,
        _SourceBatchKey: Float,
        StartDate: String,
        ConfirmationState: Int,
        _TransferTypeKey: Float,
        _EnterpriseKey: Float,
        Comment: String,
        _LastJob: Float,
        _1stJob: Float,
        _Name: String,
        DestinationValueTimestamp: String,
        SourceValueTimestamp: String,
        EndTime: String,
        StartTime: String,
        _IsDeleted: Int
    }

  
`);