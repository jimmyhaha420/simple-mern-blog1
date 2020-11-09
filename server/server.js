const express = require('express');
const server = express();
const articleRouter = require('./article/router'); 
const mongoose = require('mongoose');

mongoose.connect(
    `mongoose.connectmongodb+srv://jimmyhaha420:MruMzYNrNrxqPntM@cluster0.u7uz5.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use('/articles', articleRouter);

const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});