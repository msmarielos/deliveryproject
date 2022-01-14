const router = require("express").Router();
const { Delivery_man } = require("../db/models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    res.render("regDev");
});

router.post("/", async(req, res) => {
    const { name, email, password } = req.body;

    try {
        const delivery = await Delivery_man.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
        });
        return res.json({url: '/logindel'});
    } catch (error) {
        return res.json({error: message.error});
    }
});

module.exports = router;