'use strict';
const logger = async (req, res, next) => {
    try {
        console.log(`API called------> ${req.originalUrl}`);
        next();
    }
    catch (e) {
        throw e
    }
}

module.exports = {
    logger
}