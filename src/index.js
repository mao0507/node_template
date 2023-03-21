"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import bodyParser = require('body-parser')
//const jsonParser = bodyParser.json()
const app = (0, express_1.default)();
const port = 9527;
//app.use(jsonParser)
app.get('/api/test', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.send('test work');
}));
app.post('/api/Auth/Login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { account, password } = req.body;
    const result = {
        success: false,
        message: '',
        data: null
    };
    try {
        res.send('work');
        if (account && password) {
            const log = require('../model/login.json');
            res.status(200);
            result.success = true;
            result.message = 'work';
            result.data = log;
        }
        else if (!account) {
            res.status(200);
            result.success = false;
            result.message = '請輸入帳號';
        }
        else if (!password) {
            res.status(200);
            result.success = false;
            result.message = '請輸入密碼';
        }
        res.send(result);
    }
    catch (error) {
        res.status(500);
        res.send(error);
    }
}));
app.listen(port, () => {
    console.log(`server is listening on ${port} !!!`);
});
