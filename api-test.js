"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteDreamboothModel = exports.cancelTraining = exports.getTrainingStatus = exports.createDreamboothRequest = exports.type = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const cross_fetch_2 = require("cross-fetch");
const process = __importStar(require("process"));
var type;
(function (type) {
    type[type["Men"] = 0] = "Men";
    type[type["Women"] = 1] = "Women";
    type[type["Cat"] = 2] = "Cat";
    type[type["Dog"] = 3] = "Dog";
})(type = exports.type || (exports.type = {}));
class Tuning {
}
class Key {
}
function fetchData(url) {
    const myHeaders = new cross_fetch_2.Headers();
    myHeaders.append(`${process.env["API_KEY_NAME "]}`, `${process.env["API_KEY_VALUE "]}`);
    myHeaders.append("Content-Type", "application/json");
    return (0, cross_fetch_1.default)(url)
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .catch((error) => {
        return error;
    });
}
function createDreamboothRequest(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${process.env["BASE_URL "]}/sandbox/v3/fine_tune`;
        yield fetchData(url).then((data) => {
            return data;
        });
        return data;
    });
}
exports.createDreamboothRequest = createDreamboothRequest;
function getTrainingStatus(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${process.env["BASE_URL "]}/sandbox/v3/fine_tune_status/dyxjeiQ6kg`;
        yield fetchData(url).then((data) => {
            return data;
        });
        return data;
    });
}
exports.getTrainingStatus = getTrainingStatus;
function cancelTraining(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${process.env["BASE_URL "]}/v3/cancle_training/model_id`;
        yield fetchData(url).then((data) => {
            return data;
        });
        return data;
    });
}
exports.cancelTraining = cancelTraining;
function deleteDreamboothModel(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${process.env["BASE_URL "]}/v3/finetune/delete/your_model_id`;
        yield fetchData(url).then((data) => {
            return data;
        });
        return data;
    });
}
exports.deleteDreamboothModel = deleteDreamboothModel;
