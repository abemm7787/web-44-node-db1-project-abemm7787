const router = require("express").Router();
const Codes = require("./accounts-model");
const { checkAccountPayload, checkAccountId  } = require("./accounts-middleware");

router.get("/",  (req, res, next) => {
  Codes.getAll()
    .then((account) => {
      res.status(200).json(account);
    })
    .catch(next);

  // DO YOUR MAGIC
});

router.get("/:id",checkAccountId , async (req, res, next) => {
  
  try{ 
  Codes.getById(req.params.id)
  .then((account) => {
    
    res.status(200).json(account)
  })

}
catch{ 

res.json(req.accountId)

}
})



router.post("/", (req, res, next) => {

  // Codes.insert().
  

});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;

