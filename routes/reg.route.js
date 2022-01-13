const router = require("express").Router();
const { User } = require("../db/models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    res.render("regUser");
});

router.post("/", async(req, res) => {
    const { name, email, password, address } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
            address,
        });
        return res.redirect('/login');
    } catch (error) {
        return res.redirect('/regerror');
    }

});

module.exports = router;