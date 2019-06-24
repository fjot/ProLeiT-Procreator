const BatchesData = require('./Batches');
const TransferData = require('./Transfers');
const batchesData = new BatchesData();
const transfersData =  new TransferData();

module.exports = {
    batches: () => {
        return batchesData.findAll();
    },
    transfers: () => {
        return transfersData.findAll();
    }
}