const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');

//dbConnect
dbConnect();

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on port ${PORT}`));

module.exports = app;