const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return function(req, res, next) {
        const tokenValue=req.cookies[cookieName];
        if(!tokenValue){
            // req.user=null;
            
            return next();
            // res.status(401).send("Unauthorized! No token found in cookie");
            
        }
        try{
            const userPayload=validateToken(tokenValue);
            req.user=userPayload;
            res.locals.user=userPayload;
            return next();
        }catch{
            res.clearCookie(cookieName);
            req.user=null;
            return next();
            // res.status(401).send("Unauthorized! Invalid token found in cookie");
        }
        
         
  }
}

module.exports = checkForAuthenticationCookie;