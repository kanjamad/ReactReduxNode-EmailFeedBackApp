# Email feedback app

## What is step one of figuring out why people are quitting your application?
So let's imagine that you are a startup owner right now and you are deploying your app or your service
and maybe at some point in time, you want to collect some amount of feedback from your users so that
you can understand why people are using it why they're not using it and how you can make your application better.

## User stories
They're going to sign up with Google OAuth give us some money to create a campaign. That campaign will be sent out to all of their users.  Their users will then click some link inside that email to leave some feedback and then we will present that to the person who sent out the original survey.

## Technologies
* Google OAuth
* PassportJS
* Stripe
* React.js
* Redux
* Email Provider
* Express
* MongoDB
* Adobe XD

Technologies and idea of how we might be putting things together
1. User signs up via Google OAuth So first off is handling Google authentication 
    * For that, we're going to be making use of an Express backend server 
    * And storing user information inside of Mongo DB 
    * To handle the actual authentication and OAuth process. We'll be using a third-party library called PassportJS. PassportJS is going to make the Alongside of things a lot easier for us to set up.
2. User pays for email credits via stripe Next is handling payments.
    * we're going to use a third-party service called Stripe for handling everything around billing and side of our application.
    * We're not going to be dealing with credit card numbers directly. We're not going to be taking credit cards into our application.
    * Then whenever a user pays up some amount of money will record that inside of our MongoDB database
3. User creates a new 'campaign'
    * React + Redux
4. User enters list of emails to send survey to
    * React + Redux + Redux Form
5. We send email to list of surveyees
    * Email Provider
    * we're going to be making use of a third-party e-mail provider.
6. Surveyees click on link in email to provide feedback
    * Email Provider + Express + Mongo
    * e-mail provider our Express backend the MongoDB database
7. We tabulate feedback
    * The feedback that we're given. We're going to store all that data inside of MongoDB
8. User can see the report of all survey responses
    * Mongo + React + Redux


## App Mockups
Link to : <a href="https://xd.adobe.com/view/fb8e211b-afac-4228-5e2d-e2e17581a6b6-8dbf/" target="_blank">Adobe XD prototype</a>

![app-mockup](EmailyApp.gif "app-mockup")