const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
    const {
        Password,
        FirstName,
        LastName,
        DateOfBirth,
        Email,
    } = req.body;

    let require = false;
    let msg = '';

    if (!Password) {
        msg += `Password , `;
        require = true;
    } else if (Password.length < 8) {
        msg += `Password must be at least 8 characters long, `;
        require = true;
    } else if (!/[a-z]/.test(Password)) {
        msg += `Password must contain at least one lowercase letter, `;
        require = true;
    } else if (!/[A-Z]/.test(Password)) {
        msg += `Password must contain at least one uppercase letter, `;
        require = true;
    } else if (!/[0-9]/.test(Password)) {
        msg += `Password must contain at least one number, `;
        require = true;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(Password)) {
        msg += `Password must contain at least one special character, `;
        require = true;
    }

    if (!FirstName) {
        msg += `FirstName , `;
        require = true;
    }
    if (!LastName) {
        msg += `LastName , `;
        require = true;
    }
    if (!DateOfBirth) {
        msg += `DateOfBirth , `;
        require = true;
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(DateOfBirth)) {
        msg += `Invalid DateOfBirth format, yyyy mm dd `;
        require = true;
    }
    if (!Email) {
        msg += `Email  `;
        require = true;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
        msg += `Invalid Email format, `;
        require = true;
    }

    if (require) {
        msg +=`is required`;

        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: msg.trim(),
            data: null,
        });
    }

    next();
}

module.exports = { validateCreateRequest };
