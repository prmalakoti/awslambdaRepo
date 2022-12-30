const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const getToken = async (req, res) => {
    const data = {
        id: "123456",
        userName: "Prashant",
        empId: "Emp666666"
    }
    let token = jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.send({ bearerToken : token });
}
const verifyToken = async (req, res) => {
    try {
        const token = req.body.token
        let user = jwt.verify(token, process.env.TOKEN_SECRET)
        res.send(user);
    } catch (err) {
        res.send({ error: err.message }, 401);
    }
}
module.exports = {
    verifyToken,
    getToken
}
