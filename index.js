const express = require("express");
const {connect} = require('./src/utils/db')
const comidasRouter = require('./src/api/routes/comida.routes');

const PORT = 5000;
const app = express();
connect();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/comidas', comidasRouter);

app.listen(PORT, () => console.log(`listening on port`, PORT)); 

