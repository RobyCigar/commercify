const passport = require('passport');

function auth(request, response, next) {
	console.log(request.headers)
    passport.authenticate('jwt', { session: false, }, async (error, token) => {
        if (error || !token) {
            response.status(401).json({ message: 'You fuckin dumb' });
        } 
        try {
            console.log('token',token)
            const user = await User.findOne(
                {_id: token._id}
            );
            request.user = user;
        } catch (error) {
            next(error);
        }
        next();
    })(request, response, next);   
}

module.exports = auth;