const { getUser } = require("../service/auth");

function checkForAuthorization(req, res, next){
    const tokenCookie = req.cookies?.token;
    req.user = null;

    if(!tokenCookie)
        return next();

    const token = tokenCookie;
    const user = getUser(token);

    req.user = user;
    return next();
}

function restrictTo(roles = []){
    return function(req, res, next){
        if(!req.user) return res.redirect("/login");
        const userRole = req.user.role?.toLowerCase();
        const allowedRoles = roles.map(role => role.toLowerCase());

        if(!allowedRoles.includes(userRole)) return res.end("unAuthorized");

        return next();
    }
}

module.exports = {
    checkForAuthorization,
    restrictTo,
}