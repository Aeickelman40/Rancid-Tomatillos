# Rancid-Tomatillos (in no way affiliated with a similarly named rating application)

The Rancid-Tomatillos project is a partial pair/solo project for Front End Module e students at the Turing School of Software and Design. The idea behind the project was to build an application that allowed users to view various data related to specific movies, and if logged in, a user should have unique interactions with each movie in the form of adding a rating, commenting, and adding to their list of favorites. The main goals of this project were to develop our first application using the React framework, add unique DOM elements based on React Routing, integrate testing unique to React, and create our own 'backend' server using Express in order to POST and GET additional information required for later iterations. 

## Contributors

[Alex Eickelman](https://github.com/Aeickelman40)

[Joe Haefling](https://github.com/Josephhaefling)

## Installing / Getting started

Clone down these two repositories; the first being our front end application, the second being the database which holds GET and POST requests for adding favorites and comments as a user:

```
git clone git@github.com:Aeickelman40/Rancid-Tomatillos.git

git clone git@github.com:Josephhaefling/rancid-toms-backend.git
```

Okay, now we have everything saved to your machine! The second part of the process is to compile your front end application (what the user will see), and enable the backend server to accept POST and GET requests related to favoriting a movie and adding comments. This will require opening multiple tabs within the terminal in order to launch both a compiler and backend server simulataneously. Hit cmd + t in order to open a new window within your terminal so that you can change into each unique directory.
```
cd rancid-tomatillos
```

```
cd rancid-toms-backend
```



Once you are in the recently cloned repositories, you have to install certain React dependencies in order for everything to compile correctly. This is done by running the following command on both tabs:

```
npm install
```

This should then download all required user dependencies in order for you, the user, to interact with the application! 

In order for you to actually view and interact with the application add the following command within your terminal when you are within the rancid-tomatillos directory:

```
npm start
```

A compile message should appear in your terminal, and (depending on your browser) a new tab to the url (http://localhost:3000/) should appear. This is the homepage!
Do with it what you will, but please be kind as this is a work in progress. 


## In Action!

![login-gif](https://user-images.githubusercontent.com/57731927/87616296-fd65e780-c6d1-11ea-9aff-841115686089.gif)

![unique-movie-when-logged-in](https://user-images.githubusercontent.com/57731927/87616370-1a021f80-c6d2-11ea-9d8f-06c1a306fadc.gif)

