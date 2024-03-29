"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const asoc_controller_1 = require("../controllers/asoc.controller");
const session_1 = require("../middleware/session");
const router = (0, express_1.Router)();
exports.router = router;
// router.get('/list-all', listAll);
router.get('/list-all', session_1.checkJwt, asoc_controller_1.listAll);
router.get('/delete/:id_asociation/:date_updated_asociation', session_1.checkJwt, asoc_controller_1.deleteAsociation);
router.post('/create', session_1.checkJwt, asoc_controller_1.create);
router.post('/update', session_1.checkJwt, asoc_controller_1.update);
