require('dotenv').config()

const express = require('express')
const axios = require('axios')
const qs = require('qs');

const config = require('./config')

const app = express();

app.set('view engine', 'pug');

const homeUrl =  (req) => req.protocol + '://' + req.get('host')

/*
* Get access token from auth service provider
* */
const getAccessTokenWithCode = async (code) => {
    const authReq = await axios.request(
        {
            method: 'POST',
            url: `${config.ORATORIO_AUTH_DOMAIN}/oauth/token`,
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            data: qs.stringify(
                {
                    grant_type: 'authorization_code',
                    client_id: config.APP_CLIENT_ID,
                    client_secret: config.APP_CLIENT_SECRET,
                    code,
                    redirect_uri: config.REDIRECT_URI
                }
            )
        }
    )

    return authReq.data;
}

/*
* Render home page
* */
app.get('/', async (req, res) =>
    res.render('home.pug', {
        oratorioAPI: config.ORATORIO_API,
        oratorioAuthDomain: config.ORATORIO_AUTH_DOMAIN,
        oauthAudience: config.OAUTH_AUDIENCE,
        clientId: config.APP_CLIENT_ID,
        appCallback: config.APP_CALLBACK,
        oratorioConsentPageUrl: config.ORATORIO_YOUR_CONSENTS_URL
    }))

/*
* Oauth callback route
* */
app.get('/callback', async (req, res) => {
    if (req.query.code) {
        try {
            const accessToken = await getAccessTokenWithCode(req.query.code);

            // Set access token to the current user
            res.render('saveAccessToken.pug',
                {
                    accessToken: accessToken.access_token,
                    redirectUrl: homeUrl(req)
                })
        } catch (e){
            console.log(e)
            return res.send(e.data)
        }
    }
    res.send(req.query);
});

// Public assets route
app.use(express.static('public'));

app.listen(config.PORT, () => console.log(`Server Ev Charge up and running on port ${config.PORT}`))
