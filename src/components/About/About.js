import React from "react";

const About = () => {
  const lessThen = `<`;
  const greaterThen = `>`;
  const lessThenWith = `</`;

  return (
    <div className="container">
      <h2 className="text-center">About Project</h2>
      <p>
        My project name is Customer Reviews. This project use create react app
        and react react router, react recharts, custom link, custom hook etc....
      </p>
      <div>
        <h5> Create React App</h5>
        <p>`1. npx create-react-app customs-review`</p>
        <p>`2. cd customs-review`</p>
        <p>`3. npm start` (run project on browser)</p>
      </div>

      <div>
        <h5> React router</h5>
        <p>`1. $ npm install react-router-dom@6`</p>
        <p>
          Once your project is set up and React Router is installed as a
          dependency, open the `src/index.js `in your text editor. Import
          BrowserRouter from react-router-dom near the top of your file and wrap
          your app in a {lessThen} BrowserRouter {greaterThen}{" "}
        </p>
        {lessThen} BrowserRouter {greaterThen} <br />
        {lessThen} App {greaterThen} {lessThenWith} App {greaterThen} <br />
        {lessThenWith} BrowserRouter {greaterThen} <br />
        Now you can use React Router anywhere in your app! For a simple example,
        open `src/App.js` and replace the default markup with some routes:{" "}
        <br />
        {lessThen} Routes {greaterThen} <br />
        {lessThen} Route path="/" element= {lessThen} Home {greaterThen}{" "}
        {lessThenWith} Route {greaterThen} <br />
        {lessThen} Route path="about" element= {lessThen} About {greaterThen}{" "}
        {lessThenWith} Route {greaterThen} <br />
        {lessThenWith} Routes {greaterThen}
      </div>
    </div>
  );
};

export default About;
