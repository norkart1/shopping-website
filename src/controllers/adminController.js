const adminConfig = require('../config/admin');

exports.login = (req, res) => {
    const { username, password } = req.body;

        if (username === adminConfig.username && password === adminConfig.password) {
                res.status(200).json({ message: "✅ Login successful", success: true });
                    } else {
                            res.status(401).json({ message: "❌ Invalid credentials", success: false });
                                }
                                };
                                