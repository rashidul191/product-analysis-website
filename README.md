# Customer-Review

This Project Like link [Click Here](https://customs-review.netlify.app/) : https://customs-review.netlify.app/

## About Project

My project name is Customer Reviews. This project use create react app and react react router, react recharts, custom link, custom hook etc....

### Create React App

`1. npx create-react-app customs-review`
`2. cd customs-review`
`3. npm start` (run project on browser)

### React router

`1. $ npm install react-router-dom@6`

Once your project is set up and React Router is installed as a dependency, open the `src/index.js `in your text editor. Import BrowserRouter from react-router-dom near the top of your file and wrap your app in a <BrowserRouter>:

   <BrowserRouter>
      <App />
    </BrowserRouter>

Now you can use React Router anywhere in your app! For a simple example, open `src/App.js` and replace the default markup with some routes:
<Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
</Routes> <Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
</Routes>

## Dashboard

Dashboard have a react recharts
` $ npm install recharts`

1. Choose the type of chart you need
   With the help of babel-plugin-recharts, we can import components we actually need, making the project smaller than otherwise.

Generate a simple chart by using plain javascript data (usually an array of objects).

import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

const renderLineChart = (
<LineChart width={400} height={400} data={data}>
<Line type="monotone" dataKey="uv" stroke="#8884d8" />
</LineChart>
);

### Question

`Q1. What is context API ?`
`Ans:` The React Context API is a way to create a global variable for a React app that can be passed around. This is an alternative to "prop drilling" or moving props from grandparents to parents of children. The issue is also referred to as a simple, easy way to manage the state using Redox.

Context API is a (sort of) new feature added to version 16.3 of React that allows one to share status (or part) across the entire app lightly and comfortably.

Works context api

React.createContext () which you need. It provides a consumer and a provider. Donor is an element that, as the name implies, the state gives to its children. It will contain the “store” and the parent of all the items the store may need will be the consumer as it happens an element that consumes and consumes the state. More information can be found on the Feedback Documentation page.

`Q2. what is segment tag ?`
`Ans:`
`Q1. Inline element VS Inline block elements ?`
`Ans:` Inline-block It is formatted like the inline element, where it does not start on a new line. However, you can set width and height values.
Inline elements:
1. respect left & right margins and padding, but not top & bottom
2. cannot have a width and height set
3. allow other elements to sit to their left and right.
4. see very important side notes on this here.

The inline element does not start on a new line and only occupies its required width. we cannot set width or height

inline block element have a monte tag like

1. div
2. h1
3. p
4. li
5. section

## Getting Started with Create React App

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# product-analysis-website-rashidul191
