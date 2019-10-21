// import { Injectable } from "@angular/core";
// import * as Apollo from "apollo-angular";
// import gql from "graphql-tag";
// import  * as Batches from "../graphql/batch";

// @Injectable({
//     providedIn: "root"
// })

// export class BatchesGQL extends Apollo.Query<Batches.Query> {
//     document: any = gql`
//     query  {
//         getBatches {
//             _Key
//             TotalOutflow
//             TotalInflow
//             CurrentStock
//             OpeningStock
//             QualityState
//             ConfirmationState
//             _BatchTypeKey
//             _MaterialKey
//             _UnitKey
//             TheDate
//             _EnterpriseKey
//             ApproachMaterialNumber
//             SupplierBatchNumber
//             OrderNumber
//             BatchName
//             Comment
//             _IsDeleted
//             _1stJob
//             _Name
//             Classifications
//             MonthSerial
//             _PlantKey
//             WeekSerial
//             NonConformityFlag
//             _RecipeKey
//             EndTime
//             StartTime
//             StockEndTime
//             StockStartTime
//             ProcessEndTime
//             ProcessStartTime
//         }
//     }
//   `;
// }
