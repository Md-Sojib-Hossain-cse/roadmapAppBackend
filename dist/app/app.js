"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use("/api/v1", userRouter);
console.log(process.cwd());
userRouter.get("/user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.send({
        success: true,
        message: "User created Successfully.",
        data: user,
    });
});
app.get("/", (req, res, next) => {
    console.log(req);
});
//global error handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong",
        });
    }
});
exports.default = app;
