"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:5173',
        'https://roadmap-app-frontend007.vercel.app/',
        'https://roadmap-6lz5229iq-md-sojib-hossain-cses-projects.vercel.app/',
    ],
    credentials: true,
}));
//root route
app.get('/', (req, res) => {
    res.send('Roadmap App server boosted on....🔥🔥🚀');
});
app.use('/api', routes_1.default);
//global error handler
app.use(globalErrorHandler_1.default);
//not found route
app.use(notFound_1.default);
exports.default = app;
