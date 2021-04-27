const passport = require('passport');

function auth(request, response, next) {
	console.log('head', request.headers)
	console.log('body', request.body)
    passport.authenticate('jwt', { session: false, }, async (error, token) => {
    	console.log('token', token)
    	console.log('err', error)
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