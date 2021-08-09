const db = require("../../data/db-config")

const getAll = () => {
  return db("accounts")
}

async function getById(id){
  return await db("accounts").where("id",id ).first();
}




const create = account => {

  return db("accounts").insert(account)

}

const updateById = (id, account) => {

return db("accounts").where({ id:id, account: account})

}

const deleteById = id => {
return db("a")
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
