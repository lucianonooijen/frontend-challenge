<h3>Welcome to the Stager frontend dev challenge!</h3>

The goal is to finish an app which visualizes event organizer ticket sales over a period of time.

👤 **User story**

	As user I want to be able to view how the sales of event organizers are doing so that I can determine how they are doing and whether or not they are living up to the expected ticket sales

**Functional requirements**

- the page should be styled in the Stager identity (colors, fonts)
- the page should be responsive, i.e. work on desktop and mobile devices
- it should be possible to filter on a specific period and/or organizer

The backend of the app is already written. Your task is add a page which uses the API endpoints to visualize the sales data.

<hr/>

*The following instructions assume the OS X operating system and basic terminal usage knowledge. If you run in any issues during this challenge please contact wolfert [at] stager nl.*


**Dependencies**

The app assumes the following dependencies to be pre installed

- [homebrew](https://brew.sh/)
- git (`brew install git`)
- nodejs (`brew install node`)

**Running the app**

1. clone the app: `git clone git@github.com:Stager-Software/frontend-challenge.git`
2. cdcdcd: `cd frontend-challenge`
2. install dependencies: `npm install`
3. start the app: `node app.js`
4. <a href="http://localhost:3000">browse to the app</a>

**API**

The app exposes the following endpoints:


- `HTTP GET /api/organizers`
- `HTTP GET /api/sales/{organizerId}/{year}/{week}` *(params optional)*

💯 **Bonus points can be earned with:**

- watch, build and test scripts
- performance optimizations
- backend improvements
- clean git commits
- awesome design
- animations


N.b.

Imagine the page goes live after you created it, so try think of the details. 😉 Feel free refactor what you want and use whichever libraries or frameworks you like to use, the choice is yours! 🎉