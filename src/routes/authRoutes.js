const express = require('express');
const moongoose = require('mongoose');
const User = moongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();

        res.send('User saved')
    } catch (err) {
        return res.status(422).send(err.message)
    }
});

module.exports = router;