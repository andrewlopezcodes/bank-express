const fs = require('fs');
const path = require('path');
const accountsPath = path.join(__dirname, '..', 'data', 'accounts.json');
const uuid = require('uuid/v1');

const index = () => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  return accounts;
}

const show = (id) => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const foundAccount = accounts.find(account => account.id === id);
  return foundAccount;
}

const create = ({accountHolder, bankName, description}) => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const newUser = {
    id: uuid(),
    accountHolder: accountHolder,
    bankName: bankName,
    description: description
  };
  accounts.push(newUser);
  accountsJSONstring = JSON.stringify(accounts);
  fs.writeFileSync(accountsPath, accountsJSONstring);
  return newUser;
}

const update = (id, {bankName, accountHolder, description}) => {
// const update = ( id, data ) => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  let newUpdatedAccount;
  const updateAccounts = accounts.map(account =>{
    if (id ===account.id){
      newUpdatedAccount = {
        id,
        bankName: bankName || account.bankName,
        accountHolder: accountHolder || account.accountHolder,
        description: description || account.description
      };
      // newUpdatedAccount = { ...account, ...data }
      return newUpdatedAccount;
    } else {
      return account;
    }
  })
  accountsJSONstring = JSON.stringify(updateAccounts);
  fs.writeFileSync(accountsPath, accountsJSONstring);
  return newUpdatedAccount;
}

const destroy = (id) => {
  let matchedID;
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  const newArrayAccounts = accounts.filter(account =>{
    if (account.id === id) {
      matchedID = account;
      return false;
    } else {
      return true;
    }
  });
  newArrayAccountsJSON = JSON.stringify(newArrayAccounts);
  fs.writeFileSync(accountsPath, newArrayAccountsJSON);
  return matchedID;
}

module.exports = {
index,
show,
create,
update,
destroy
}
