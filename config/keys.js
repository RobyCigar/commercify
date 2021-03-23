
module.exports = {
	app: {
		apiURL: 'api',
		serverURL: process.env.SERVER_URL,
		allowedOrigin: process.env.CORS
	},

	jwt: {
		secret: process.env.JWT_SECRET,
		tokenLife: '7d'
	},

	mailchimp: {
		key: process.env.MAILCHIMP
	},

	mailgun: {
		privateApiKey: process.env.MAILGUN_PRIVATE,
		publicValidationKey: process.env.MAILGUN_PUBLIC_VALIDATION,
		HTTPWebhook: process.env.MAILGUN_WEBHOOK,
		sender: process.env.SENDER
	},

	db: {
		url: process.env.MONGO
	},

	google: {
		clientID: process.env.GOOGLE_ID,
		clientSecret: process.env.GOOGLE_SECRET,
		callbackURL: process.env.GOOGLE_CALLBACK_URL
	},
}

