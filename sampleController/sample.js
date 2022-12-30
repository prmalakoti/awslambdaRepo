'use strict';
const sample = (req, res) =>{
    res.send({ result: "Application in up and running", token: "Sample api called" });
}

module.exports = {
  sample
}