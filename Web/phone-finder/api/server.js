const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    port: "3307",
    database: "mobileCore"
})

app.get('/', (re, res)=> {
    return res.json("From Backend Side");
})

app.get('/brand', (req, res) => {
    const sql = `SELECT * FROM brands limit 1`;
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/brands', (req, res) => {
    const limit = req.query.limit;
    const sql = `SELECT * FROM brands order by name asc limit ${limit}`;
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/models', (req, res) => {
    const sql = "SELECT * FROM models";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/device', (req, res) => {
    const sql = "SELECT * FROM devices LIMIT 10520, 1";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/devices', function(req, res) {
    const limit = req.query.limit;
    const sql = (`SELECT * FROM devices LIMIT 10520, ${limit}`);
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get('/endpoint', function(req, res) {
    var id = req.query.id;
    res.end("I have received the ID: " + id);
});

app.listen(8081, () => {
    console.log("Listening");
})