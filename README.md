# firebase-portfolio

Small portfolio site

## About

This app is a small portfolio site made with React.js. This site is serverless. Made with Google Firebase.
For the database I have chosen Firestore. All images are stored in Firebase storage and loaded when needed.

This site is completely responsive and can be used on mobile devices without any problems. To render mobile specific
layout the React-Context-Api spies on the window.innerWidht in combination with a custom hook.

There are also two langauges provided by React-Context-Api.

And last but not least loading data from Google FireStorage, is also done by React-Context-Api instead of Redux, which is what I
always used in my previous projects.

To prevent regression and to maintain quality, test I wrote tests with Enzyme and React-Testing-Library.

EmailJs offers the possibility to send emails from the client side. I have used this for a personal email contact form.
This input module also has two input fields hidden from the normal user,
which act as a honeypot, so that email bots are detected and prevented from sending emails.

You can visit my portfolio here
https://portfolio-philipp-dawid.web.app
if you are interested.

## Technologies

    HTML5, CSS3, JavaScript, React.js/Hooks, Enzyme, React-Testing-Library,
    React-Context, Firebase, Firestore, Firebase storage, EmailJS
