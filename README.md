Netflix GPT Updates :

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign up form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp user account
- Implement sign in user api
- created Redux store with userSlice
- Implemented sign out
- Update profile api
- BugFix: When user is not logged in - restricted user from /browse to "/" (login page) & vice-versa
- Added hardcoded values (image links) to constants files
- Signed UP in TMDB & registerted for project, API Key & Auth Token, Hit API for movie recomendation
- Added title window & video window components for browse page.
- Fetched movieData from TMBD api & showed title, description, play & more info buttons.
- Used Iframe youtube trailker videos in video window. Added trailerObj to store in movieSlice.
- Stored trailer object and dynamically getting videos rendering.
- Build secondary container
- Build movie list component
- Build movie card component to render cards for browse page.
- Now playing, top rated , popular, trending movies.
- Found TMDB image cdn used it to render cards.
- Created custom hooks usePopularMovies, useTopRatedMovies, useNowPlayingMovies, useUpcomingMovies.
- GPT search functionality
- GPT search bar
- Multi-language feature in GPT page.
- Created config Slice, to store the language type selected by user across the app and support multi language support.
- Made a feature as movie recommendation system using GPT OpenAI.
- Integrated GPT apis so that whatever user enters, hitting the OpenAI api and fetching results.
- Made use of Redux store to save the fetched results, created gptSlice to store gpt searched results.
- Using gptSlice stored results, hitting the TMDB api to fetch movie related information to show these fetched results as movie cards in UI.
- Reduced number of api calls made across the Root level of app. If the data is present, fetching it from store instad of making multiple api calls.
- Hidden OpenAI & TMDB movie api keys using env files.
- Removed all console log statements acroos the app.
- Cleaned code, removed all commented part.
- Hidden the browser scrollbar of x-direction in Movie list rendered UX for better look and feel. However, user will be able to scroll horizontally.
- Responsiveness of entire app.
- Updated classes and styling for small, medium and large screens using Tailwind framework.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Features Built :

Login / Sign Up Pages - (Not logged in User) - Sign in / Sign up form - Redirect to browse page
Browse (Logged in User) - Header - Main Movie - Trailer in bg - Title & description - Movie Suggestions - Movies List & Scrollable Vertical
Netflix GPT - Search Bar - Movie suggestions using GPT api's
