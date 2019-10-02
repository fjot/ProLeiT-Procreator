const batches = [{
    _Key: 10000000001,
    TotalOutflow: 19.803359422,
    TotalInflow: 21.313475297,
    CurrentStock: 2.510115875,
    OpeningStock: 1,
    QualityState: 0,
    ConfirmationState: 1,
    _BatchTypeKey: 86000000150,
    _MaterialKey: 83000000148,
    _UnitKey: 81200000316,
    TheDate: "2016-07-26T23:00:00+01:00",
    _EnterpriseKey: 7000000000,
    ApproachMaterialNumber: "4500533189",
    SupplierBatchNumber: "1",
    OrderNumber: "1114012",
    BatchName: "> 11140137.0_ae",
    Comment: "<div>3/22/19, 9:45 AM - Administrator<div><br><br><br></div></div><div>3/21/19, 3:58 PM - Administrator</div><blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><div><div><br></div></div><div><br></div></blockquote><div><div><br></div></div><div>3/21/19, 3:25 PM - <b>Administrator</b><div><div style=\"text-align: right;\"><br></div><div style=\"text-align: right;\">asdfsadfsadffsadfsadfsadfs</div></div></div><div><div style=\"text-align: left;\">asdfsdafsadfsadfsfd&nbsp;<b>sdafsdaffasd</b></div><div><br></div><div>fsadfsadfasdfsadfsadfs</div></div><div>3/21/19, 1:11 PM - Administrator<div><br>Test1<br><br></div></div><div><br></div>",
    _IsDeleted: 0,
    _1stJob: 100000000014,
    _Name: "-1845129659.1@P",
    Classifications: ";;",
    MonthSerial: 199,
    _PlantKey: 80000000001,
    WeekSerial: 865,
    NonConformityFlag: null,
    _RecipeKey: null,
    EndTime: "2019-06-06T08:23:00+01:00",
    StartTime: "2019-06-06T07:50:39+01:00",
    StockEndTime: "2016-10-26T09:48:01+01:00",
    StockStartTime: "2016-10-04T08:22:52+01:00",
    ProcessEndTime: "2019-06-06T08:23:00+01:00",
    ProcessStartTime: "2019-06-06T07:50:39+01:00"
},
{
    _Key: 10000000002,
    TotalOutflow: 19.803359422,
    TotalInflow: 21.313475297,
    CurrentStock: 2.510115875,
    OpeningStock: 1,
    QualityState: 0,
    ConfirmationState: 1,
    _BatchTypeKey: 86000000150,
    _MaterialKey: 83000000148,
    _UnitKey: 81200000316,
    TheDate: "2016-07-26T23:00:00+01:00",
    _EnterpriseKey: 7000000000,
    ApproachMaterialNumber: "4500533189",
    SupplierBatchNumber: "1",
    OrderNumber: "1114012",
    BatchName: "> 11140137.0_ae",
    Comment: "<div>3/22/19, 9:45 AM - Administrator<div><br><br><br></div></div><div>3/21/19, 3:58 PM - Administrator</div><blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><div><div><br></div></div><div><br></div></blockquote><div><div><br></div></div><div>3/21/19, 3:25 PM - <b>Administrator</b><div><div style=\"text-align: right;\"><br></div><div style=\"text-align: right;\">asdfsadfsadffsadfsadfsadfs</div></div></div><div><div style=\"text-align: left;\">asdfsdafsadfsadfsfd&nbsp;<b>sdafsdaffasd</b></div><div><br></div><div>fsadfsadfasdfsadfsadfs</div></div><div>3/21/19, 1:11 PM - Administrator<div><br>Test1<br><br></div></div><div><br></div>",
    _IsDeleted: 0,
    _1stJob: 100000000014,
    _Name: "-1845129659.1333@P",
    Classifications: ";;",
    MonthSerial: 199,
    _PlantKey: 80000000001,
    WeekSerial: 865,
    NonConformityFlag: null,
    _RecipeKey: null,
    EndTime: "2019-06-06T08:23:00+01:00",
    StartTime: "2019-06-06T07:50:39+01:00",
    StockEndTime: "2016-10-26T09:48:01+01:00",
    StockStartTime: "2016-10-04T08:22:52+01:00",
    ProcessEndTime: "2019-06-06T08:23:00+01:00",
    ProcessStartTime: "2019-06-06T07:50:39+01:00"
}];

module.exports = class BatchesData {
    findAll() {
        return batches 
    }
    
    findBatch(args) { 
      return batches.filter(el => el._Name === args.name);
    }

 
}


