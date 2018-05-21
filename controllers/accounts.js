
const accountModel = require('../models/account');


const index = (request, response)=> {
  const accounts = accountModel.index();
  response.send(accounts);
}



const show = (request, response)=>{
  const account = accountModel.show(request.params.id);
  response.send(account);
}

const create = (request, response)=>{
  const newAccount=accountModel.create(request.body);
  response.send(newAccount);
}

const update = (request, response)=>{
  const updateAccount = accountModel.update(request.params.id, request.body);
  response.send(updateAccount);
}

const destroy = (request, response) => {
  const account = accountModel.update(request.params.id, request.body);
  response.send(account);
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
