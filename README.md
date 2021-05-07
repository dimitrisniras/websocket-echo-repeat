# Node.js Websocket Echo Repeat Server

This sample shows how to connect a Voice API call to a websocket endpoint. The websocket acts as an "echo server", repeating everything that the caller says.

## Setup

### Install the Nexmo CLI

Run the following at a terminal prompt to install the CLI and configure it with your `api_key` and `api_secret`, which you will find in the [Developer Dashboard](https://dashboard.nexmo.com):

```
npm install -g nexmo-cli
nexmo setup <API_KEY> <API_SECRET>
```

### Purchase a Nexmo number

If you don't already have one, buy a Nexmo virtual number to receive inbound calls.

List available numbers (replace `GB` with your [two-character country code](https://www.iban.com/country-codes)):

```
nexmo number:search GB
```

Purchase one of the numbers:

```
nexmo number:buy 447700900001
```

### Create a Voice API application

Use the conversation-api-function tool to create an application and link the LVN above

```
conversation-api-function config-new -a <API_KEY> -s <API_SECRET> -l <LVN>
```

### Install dependencies

Run the following to install the required modules:

```
nvm use
npm i
```

### Run it

1. Execute the following in your project directory:

  ```
  npm start
  ```

2. Call your Nexmo virtual number and listen to the welcome message.

3. Speak into the phone and hear your voice echoed back to you by the websocket.