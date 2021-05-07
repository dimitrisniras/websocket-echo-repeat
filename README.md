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

Use the CLI to create a Voice API application with the webhooks that will be responsible for answering a call on your Nexmo number (`/webhooks/answer`) and logging call events (`/webhooks/event`), respectively. Replace `example.com` in the following command with your own public-facing URL host name (consider using [ngrok](https://ngrok.io) for testing purposes, and if you do use it, run it now to get the temporary URLs that `ngrok` provides):

```
nexmo app:create "My Echo Server" https://example.com/webhooks/answer https://example.com/webhooks/event
```

Make a note of the application ID returned by this command.

### Link the Voice API application to your Nexmo number

Use the application ID to link your virtual number:

```
nexmo link:app <NUMBER> <APPLICATION_ID>
```

### Install dependencies

Run the following to install the required modules:

```
npm install express body-parser express-ws
```

### Run it!

1. Execute the following in your project directory:

  ```
  node server.js
  ```

2. Call your Nexmo virtual number and listen to the welcome message.

3. Speak into the phone and hear your voice echoed back to you by the websocket.


