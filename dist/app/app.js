"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const userRouter = express_1.default.Router();
app.use('/api/v1', userRouter);
app.get('/', (req, res) => {
    res.send('hell world');
});
//global error handler
app.use((error, req, res) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'something went wrong',
        });
    }
});
exports.default = app;
