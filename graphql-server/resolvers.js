const BatchesData = require('./Batches');
const TransferData = require('./Transfers');
const batchesData = new BatchesData();
const transfersData =  new TransferData();

module.exports = {
    getBatches: () => {
          return batchesData.findAll()
    },

    getBatch: (args) => {
        return batchesData.findBatch(args)
    } ,

    transfers: () => {
        return transfersData.findAll();
    }

};

    
  