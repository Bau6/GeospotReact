const cors = require('cors');
const {updateRecord} = require("./update");
const {deleteRecord} = require("./delete");
const {selectAll} = require("./selectAll");
const {addRecord} = require("./add");
const express = require("express");
const app = require('express')();
const multer = require('multer');
const {selectOne} = require("./selectOne");
const {selectById} = require("./selectById");
const {checkLoginPass} = require("./checkLoginPass");
const {myRole} = require("./roleUser");
const {addNew} = require("./addNews");
const {selectEvents} = require("./selectEvents");
const {loadSport} = require("./loadSports");

app.use(cors());
const port = 3003;


function addPicture() {

// Папка для сохранения загруженных файлов
    const uploadFolder = 'uploads';

// Настройка multer для обработки загруженных файлов
    const upload = multer({ dest: uploadFolder });
    app.post('/upload-avatar', upload.single('avatar'), (req, res) => {
        if (req.file) {
            const avatarPath = req.file.path;
            res.json({ avatarPath });
        } else {
            res.status(400).json({ error: 'File upload failed' });
        }
    });
}

function updateData() {
    app.get('/update-record', (req, res) => {
        const { nameTable, params } = req.query;
        updateRecord(nameTable, params, res);
    });}
function addData() {
    app.use(express.json());
    app.post('/add-record', (req, res) => {
        const { nameTable, fParams } = req.body;
        addRecord(nameTable, fParams, res);
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
function selectOneDataTable() {
    app.get('/output-one-record', (req, res) => {
        const { nameTable, params } = req.query;
        // const nameTable = 'users';
        // const params = 27;
        // console.log(nameTable, params)
        selectOne(nameTable, params, res);
    });
}
function usersRolesTable() {
    app.get('/role', (req, res) => {
        const { nameTable, params } = req.query;
        myRole(nameTable, params, res);
    });
}


function selectByIdDataTable() {
    app.get('/output-one-and-more-record', (req, res) => {
        const { nameTable, params } = req.query;
        // const nameTable = 'users';
        // const params = [27, 26, 25];
        selectById(nameTable, params, res);
    });
}
function checkLoginPassReturnData() {
    app.get('/check-login-pass', (req, res) => {
        const { nameTable, params } = req.query;
        // const nameTable = 'users';
        // const params = {email: "u@u.ullll", password: "default"};
        checkLoginPass(nameTable, params, res);
    });
}

function addNews() {
    app.use(express.json());
    app.post('/add-news', (req, res) => {
        const nameTable = req.body.nameTable;
        const params = req.body.params;
        // const nameTable = 'news';
        // const params = {namePub: "1", date: "10.10.2000", country: "R", city: "M", autor: "", textPub: "text", image: "", orgPub: "OOO"};
        addNew(nameTable, params, res);
    });
}
function selectMyEvents() {
    app.get('/events-table', (req, res) => {
        // const { params } = req.query;
        const params = { events: "events", user: "users", sport: "sporttype", city: "cities", country: "countries"};
        selectEvents(params, res);
    });
}
function loadSports() {
    app.get('/sports', (req, res) => {
        loadSport(res);
    });
}
loadSports();
selectMyEvents();
addNews();
usersRolesTable();
checkLoginPassReturnData();
selectByIdDataTable();
selectOneDataTable();
addPicture();
addData();
selectAllDataTable();
deleteData();
updateData();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});