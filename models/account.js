const fs = require('fs');
const path = require('path');
const accountsPath = path.join(__dirname, '..', 'data', 'accounts.json');

const index = () => {
  const accountsJSON = fs.readFileSync(accountsPath, 'utf-8');
  const accounts = JSON.parse(accountsJSON);
  return accounts;
}

const show = (id) => {
  const accounts
}
const create = () => {}
const update = () => {}
const destroy = () => {}

module.exports = {
index,
show,
create,
update,
destroy
}
