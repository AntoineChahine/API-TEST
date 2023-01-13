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
exports.getDatafromAPI = exports.antoine = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
function antoine() {
    return "hi from antoine";
}
exports.antoine = antoine;
function getDatafromAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://stablediffusionapi.com/api/sandbox/v3/fine_tune";
        const data = {
            key: "lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh",
            message: "photo of",
            adhik: "key",
            trainingName: "person",
            trainingType: "type",
        };
        yield (0, cross_fetch_1.default)(url, {
            method: "POST",
            headers: {
                "X-API-KEY": "lUHfz6htjXph9Is7ZkuoIp218ZFbs1eqQRgI7MI9SuZR7ULbGR8XUZAhgYBh",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    });
}
exports.getDatafromAPI = getDatafromAPI;
