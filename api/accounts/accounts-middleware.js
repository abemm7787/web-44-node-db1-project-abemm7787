const Updates = require("./accounts-model");

// - Find all customers with postal code 1010. Returns 3 records.


//   - `checkAccountPayload` returns a status 400 with if `req.body` is invalid:



exports.checkAccountPayload = async (req, res, next) => {
  

  
  try {
    const { name, budget} = req.body
    // const accounts = req.params.body;
    // const checkaccounts = await Updates.getAll(accounts);
   
    if (!name || !budget) {
    
   req.status(400).json({ message: "name of account must be a string" });
  //
    } 
    else {
      res.status(200)
      .json({ message: `you have made a request for ${checkpostal}` });
    }
  } catch {
    res.status(500).json({ message: `not found` });
  }

  // DO YOUR MAGIC
};


exports.checkAccountId = async (req, res, next) => {
  try {
  
    const accountsId = await Updates.getById(req.params.id);
    if (!accountsId) 
    res.status(404).json({ message: "account not found"});
    else {
    
      req.account = accountsId;
    }
    next();
  } catch {
    next();
  }
};

exports.checkAccountNameUnique = (req, res, next) => {
// try{
// const 
// }
// catch{

}
