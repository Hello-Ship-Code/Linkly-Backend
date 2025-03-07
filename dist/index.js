"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadsPath = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const env_config_1 = require("./config/env.config");
const router_1 = require("./routes/router");
const app = (0, express_1.default)();
const viewsPath = path_1.default.join(__dirname, '..', 'src', 'views');
exports.uploadsPath = path_1.default.join(__dirname, '../uploads'); // Ensure correct path
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// Serve Static Files (Uploaded Images)
app.use('/uploads', express_1.default.static(exports.uploadsPath));
// Server-Side Rendering Setup
app.set('view engine', 'ejs');
app.set('views', viewsPath);
// Routes
(0, router_1.appRouter)(app);
// Server
app.listen(env_config_1.env.PORT, () => console.log(`Server is running on port ${env_config_1.env.PORT}`));
//# sourceMappingURL=index.js.map