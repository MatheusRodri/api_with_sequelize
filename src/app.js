const http = require("http");
const express = require("express");
const spoilerRoute = require('./routes/spoilers');
const sequelize = require("./database/database");

const app = express();


app.use(express.json());

app.use('/api',spoilerRoute);

app.use((request,response,next)=>{
    response.status(404).send();
})

app.use((error, request, response,next)=>{
    response.status(500).json({error});
});

sequelize.sync({force:true}).then(()=>{
    const port = process.env.PORT || 3000;
    
    app.set('port',port);

    const server = http.createServer(app);

    server.listen(port)
});