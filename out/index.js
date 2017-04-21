"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logic_1 = require("./logic");
let app = express();
app.get('/:time', (req, res) => {
    logic_1.default.greetings(parseInt(req.params.time)).then((result) => {
        res.send(result);
    }, (err) => {
        res.status(500).send(err);
    });
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map