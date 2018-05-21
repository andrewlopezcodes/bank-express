const transactionModel = require('../models/transaction');

const index = (request, response) => {
  const accountTransactions = transactionModel.index(request.params.account_id);
  response.send(accountTransactions);
}

const show = (request, response) => {
  const accountTransaction = transactionModel.show(request.params.transaction_id);
  response.send(accountTransaction);

}

const create = (request, response) => {
  const accountTransaction = transactionModel.create(request.params,account_id, request.body);
  response.send(accountTransaction);
}

const update = (request, response) => {
  const accountTransaction = transactionModel.update(request.params.transaction_id, request.body);
  response.send(accountTransaction);
}

const destroy = (request, response) => {
  const accountTransaction = transactionModel.destroy(request.params.transaction_id);
  response.send(accountTransaction);
}


module.exports ={
  index,
  show,
  create,
  update,
  destroy
}
