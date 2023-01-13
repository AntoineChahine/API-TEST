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
        (0, cross_fetch_1.default)("https://stablediffusionapi.com/api/sandbox/v3/fine_tune", {
            method: "POST",
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    });
}
exports.getDatafromAPI = getDatafromAPI;
