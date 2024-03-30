const cors = require('cors');
const {updateRecord} = require("./update");
const {deleteRecord} = require("./delete");
const {selectAll} = require("./selectAll");
const {addRecord} = require("./add");
const express = require("express");
const app = require('express')();

app.use(cors());
const port = 3003;


function updateData() {
    app.get('/update-record', (req, res) => {
        const { nameTable, params } = req.query;
        updateRecord(nameTable, params, res);
    });}
function addData() {
    app.use(express.json());
    app.post('/add-record', (req, res) => {
        const { nameTable, params } = req.body;
        addRecord(nameTable, params, res);
    });}
function deleteData() {
    app.get('/delete-record', (req, res) => {
        const { nameTable, params } = req.query;
        deleteRecord(nameTable, params, res);
    });}
function selectAllDataTable() {
    app.get('/output-table', (req, res) => {
        const { nameTable, params } = req.query;
        // console.log(nameTable, params);
        selectAll(nameTable, params, res);
    });
}
addData();
selectAllDataTable();
deleteData();
updateData();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});