const envVars = [
    "ORATORIO_AUTH_DOMAIN",
    "APP_CLIENT_ID",
    "APP_CLIENT_SECRET",
    "APP_CALLBACK",
    "REDIRECT_URI",
    "PORT",
    "ORATORIO_API",
    "OAUTH_AUDIENCE",
    "ORATORIO_YOUR_CONSENTS_URL"
]

const config = envVars.reduce((acc, envStr) => {
    if (!process.env[envStr]) {
        throw new Error(`'${envStr}' environment variable is undefined (see .env file)`)
    }

    return {...acc, [envStr]: process.env[envStr]};
}, {});

module.exports = config
