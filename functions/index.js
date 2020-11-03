const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51Hj4DsKWzeejPi8a4OZk6fWeZZk8dhMLo5nNrlYoKnIlsnHtmMsblSeTR02APBt0tDXBS1GmO6HKwEXCnjGlQuMk00gv1uko2y')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//Api

// - App config
const app = express();

// - Middlewears
app.use(cors({ orgin: true }));
app.use(express.json());



// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// -Listen command
exports.api = functions.https.onRequest(app)

//This is an Example Endpoint
//http://localhost:5001/challenge-27a66/us-central1/api