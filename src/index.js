require("dotenv").config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(express.json());
const routes = require("./routes");

app.use('/V1',routes);

app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.listen(PORT, () => {
  console.log(`serve listening on port $(PORT)`);
});
