const router = require("express").Router();
const AccountCode = require("./accounts-model");
const {
  checkAccountPayload,
  checkAccountId,
  checkAccountNameUnique,
} = require("./accounts-middleware");

router.get("/", (req, res, next) => {
  AccountCode.getAll()
    .then((account) => {
      res.status(200).json(account);
    })
    .catch(next);
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  try {
    AccountCode.getById(req.params.id).then((account) => {
      res.status(200).json(account);
    });
  } catch {
    res.json(req.accountId);
    next();
  }
});

router.post(
  "/",
  checkAccountPayload,
  checkAccountNameUnique,
  async (req, res, next) => {
    try {
      const newAccount = await AccountCode.create({
        name: req.body.name.trim(),
        budget: req.body.budget,
      });
      res.status(201).json(newAccount);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  checkAccountId,
  checkAccountPayload,
  async (req, res, next) => {
    const updated = await AccountCode.updateById(req.params.id, req.body);
    res.json(updated);
    try {
      res.json("update account");
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", checkAccountId, async (req, res, next) => {
  try {
    await AccountCode.deleteById(req.params.id);
    res.json(req.account);
  } catch (err) {
    next(err);
  }
});

// handle error
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
