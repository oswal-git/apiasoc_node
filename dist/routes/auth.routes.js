"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const session_1 = require("../middleware/session");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/login', auth_controller_1.login);
router.get('/logout', session_1.checkJwt, auth_controller_1.logout);
router.post('/register', auth_controller_1.register);
router.post('/profile', session_1.checkJwt, auth_controller_1.profile);
router.post('/change', session_1.checkJwt, auth_controller_1.changePassword);
router.post('/reset', auth_controller_1.resetPassword);
router.get('/connected-user', session_1.checkJwt, auth_controller_1.connectedUser);
