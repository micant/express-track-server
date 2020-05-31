const express = require('express');
const moongoose = require('mongoose');
const User = moongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    const user = new User({ email, password });
    await user.save();

    res.send('User saved')
});

module.exports = router;