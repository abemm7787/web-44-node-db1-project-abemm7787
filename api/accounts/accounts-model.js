const db = require("../../data/db-config")

const getAll = () => {
  return db("accounts")
}

async function getById(id){
  return await db("accounts").where("id",id ).first();
}


async function create(account){


  //const stuff = await db("accounts").insert(account)

  //console.log(stuff)

const [id] = await db("accounts").insert(account)

//   return await db("accounts").insert(account).last()
   console.log(id)
   const accounts = await getById(id)
   console.log(accounts) // dont be that guy, no assumptions
return "gwen"
//return "create wired"

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
