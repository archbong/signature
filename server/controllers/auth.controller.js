const AuthService = require('../services/auth.service');
const response = require('../utils/response');

class AuthController {
    async signup(req, res) {
        try {
            const result = await AuthService.signup(req.body);
            res.status(201).send(response.success(`User successfully created: ${JSON.stringify(result)}`));
        } catch (err) {
            res.status(500).send(response.error(`User created error: ${JSON.stringify(err)}`));
        }
    }

    async signin(req, res) {
        try {
            const result = await AuthService.signin(req.body);
            res.status(200).send(response.success(`User login successful: ${JSON.stringify(result)}`));
        } catch (err) {
            res.status(500).send(response.error(`User login error: ${JSON.stringify(err)}`));
        }
    }

    async updatePassword(req, res) {
        try {
            const result = await AuthService.updatePassword(req.params.userId, req.body);
            res.status(200).send(response.success(`Password updated: ${JSON.stringify(result)}`));
        } catch {
            res.status(500).send(response.error(`Password updated error: ${JSON.stringify(err)}`));
        }
    }

    async RequestEmailVerification(req, res) {
        try {
            const result = await AuthService.RequestEmailVerification(req.params.email);
            res
                .status(200)
                .send(response.success(`Email verification link sent: ${result}`))
        } catch (err) {
            res.status(500).send(response.error(`Email verification link error: ${err}`))
        }
    }

    async VerifyEmail(req, res) {
        try {
            const result = await AuthServ.VerifyEmail(req.body);
            res
                .status(200)
                .send(response.success("Email verified successfully", result));
        } catch (err) {
            res.status(500).send(response.error(`Email verified error: ${err}`))
        }
    }

    async RequestPasswordReset(req, res) {
        try {
            const result = await AuthServ.RequestPasswordReset(req.query.email);
            res.status(200).send(response.success("Password reset link sent", result));
        } catch {
            res.status(500).send(response.error(`Password reset link error: ${err}`));
        }
    }
    async resetPassword(req, res) {
        try {
            const result = await AuthServ.resetPassword(req.body);
            res.status(200).send(response.success("Password updated", result));
        } catch (err) {
            res.status(500).send(response.error(`Password reset link error: ${err}`))
        }
    }
}

module.exports = new AuthController;