# Oratorio-connector
This connector will helps you to gather data from Oratorio system.

## Prerequisites
First you need a server with a public accessible backend service in order to complete the Authorization Code Oauth 2.0 flow. 
If you're not familiar with it, you can see this explanation: https://auth0.com/docs/flows/authorization-code-flow.

Secondly, you need to ask your credentials for adding your service into Oratorio system. In order to do this, you need to contact us by email with the following elements:

- Your service name
- Your service website
- A description text
- An Oauth 2.0 HTTPS callback URL on your service (example: "https://myservice.com/callback")
- A redirect URL when the user logout the system (example: "https://myservice.com/logout")

When your request accepted you will receive your credentials, and a demo account for testing purpose:

- Client ID
- Client secret (that you need to keep secret)
- Demo account ID
- Demo account password

## Usage

### NodeJS Example

> Prerequisites: First you need to install NodeJS on your computer.

Go on `./examples/ev-charge` directory and create a `.env` file with this content:

```
APP_CLIENT_ID=<YOUR CLIENT ID>
APP_CLIENT_SECRET=<YOUR CLENT SECERT>

ORATORIO_AUTH_DOMAIN=https://dev-gridpocket.eu.auth0.com
REDIRECT_URI=http://localhost:3002/
OAUTH_AUDIENCE=https://oratorio.autodomus.eu/
APP_CALLBACK=http://localhost:3002/callback
PORT=3002

ORATORIO_API=https://api.oratorio.autodomus.eu/
ORATORIO_YOUR_CONSENTS_URL=https://oratorio.autodomus.eu/your-consents
```

Do note forget to change `APP_CLIENT_ID` and `APP_CLIENT_SECRET`.

Then, execute the following command:

- `npm install` Install the NodeJS ap

- `npm run start` and visit the http://locahost:3002 web app. 
  
- On the website click on "Connect to Oratorio" button
and use the given demo account credentials to see the data-sharing process.

# Credits

This project has received funding from the European Union’s H2020 research and innovation programme under Grant Agreement no 871498.

See the [NGI Dapsi website](https://dapsi.ngi.eu/) for more information.

![](https://dapsi.ngi.eu/wp-content/uploads/2020/02/ngi-dapsi-footer-banner-ngi-eu@2x-768x61.png)
