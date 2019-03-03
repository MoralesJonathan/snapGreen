const router = require('express').Router();
const incentives = require("../../controllers/incentives.js");


router.get("/test", (req, res) => {
    incentives.test((status, message = "ok") => res.status(status).send(message));
});

router.get("/", (req, res) => {
    incentives.getAllIncentives((status, data = "ok") => res.status(status).send(data));
});

router.get("/:id", (req, res) => {
    incentives.getIncentive(req.params.id, (status, data = "ok") => res.status(status).send(data));
});

router.put("/", (req, res) => {
    incentives.createIncentive(req.body, (status, data = "ok") => res.status(status).send(data));
});

router.post("/", (req, res) => {
    incentives.updateIncentive(req.body, (status, data = "ok") => res.status(status).send(data));
});

router.delete("/:id", (req, res) => {
    incentives.deleteIncentive(req.params.id, (status, data = "ok") => res.status(status).send(data));
});
module.exports = router;