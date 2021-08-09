const Updates = require("./accounts-model");

// - Find all customers with postal code 1010. Returns 3 records.

exports.checkAccountPayload = async (req, res, next) => {
  try {
    const accounts = req.params.body;
    const checkpostal = await Updates.getAll(accounts);
    if (!checkpostal) {
      req.body = checkpostal;
      req.status(404).json({ message: `missing inquires ` });
  
    } else {
      res.status(200)
      .json({ message: `you have made a request for ${checkpostal}` });
    }
  } catch {
    res.status(500).json({ message: `not found` });
  }

  // DO YOUR MAGIC
};

exports.checkAccountNameUnique = (req, res, next) => {

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
