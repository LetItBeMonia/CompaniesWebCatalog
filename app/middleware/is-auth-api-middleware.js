const User = require('../db/models/user');

module.exports = async function(req, res, next) {

    // uwierzytelnienie usera
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(403).json({ message: 'Dostęp zabroniony' });
    }
    const user = await User.findOne({ apiToken: token })

    if (!user) {
        res.status(403).json({ message: 'Dostęp zabroniony' });
    }

    req.user = user;
    next();
}