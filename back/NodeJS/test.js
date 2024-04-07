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
        console.log(nameTable, params);
        selectAll(nameTable, params, res);
    });
}
function selectOneDataTable() {
    app.get('/output-one-record', (req, res) => {
        const { nameTable, params } = req.query;
        // const nameTable = 'users';
        // const params = 27;
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