import React from "react";

const Question = () => {
  const section = `<section> Section Contents </section>`;
  return (
    <div className="container">
      <h1 className="text-center">Question</h1>
      <div>
        <h4>Q1. What is context API ?</h4>
        <p>
          Ans: The React Context API is a way to create a global variable for a
          React app that can be passed around. This is an alternative to "prop
          drilling" or moving props from grandparents to parents of children.
          The issue is also referred to as a simple, easy way to manage the
          state using Redox. Context API is a (sort of) new feature added to
          version 16.3 of React that allows one to share status (or part) across
          the entire app lightly and comfortably.
          <p>Works ContextAPI </p>
          React.createContext () which you need. It provides a consumer and a
          provider. Donor is an element that, as the name implies, the state
          gives to its children. It will contain the “store” and the parent of
          all the items the store may need will be the consumer as it happens an
          element that consumes and consumes the state. More information can be
          found on the Feedback Documentation page.
        </p>
      </div>

      <div>
        <h4>Q2. what is segment tag ?</h4>
        <p>
          Ans: Section tags define a section of a document such as a section,
          title, footer, or other section. The category tag divides the content
          into categories and subsections. Section tags are used when two
          headers or footers or any other section of the document is required.
          Content is generic block tagged. The main advantage of a section tag
          is a semantic element, which explains its meaning to both browser and
          developer.
          <br />
          <span className="text-warning">{section}</span>
        </p>
      </div>

      <div>
        <h4> Q1. Inline element VS Inline block elements ?</h4>
        <p>
          Ans: Inline-block It is formatted like the inline element, where it
          does not start on a new line. However, you can set width and height
          values.
          <br />
          <p>
            Inline elements:
            <ul>
              <li>
                respect left & right margins and padding, but not top & bottom
              </li>
              <li>cannot have a width and height set</li>
              <li>allow other elements to sit to their left and right.</li>
              <li>see very important side notes on this here.</li>
            </ul>
          </p>
          The inline element does not start on a new line and only occupies its
          required width. We cannot set width or height
        </p>

        <p>inline block element have a monte tag like</p>
        <ul>
          <li>div</li>
          <li>h1</li>
          <li>p</li>
          <li>li</li>
          <li>section</li>
        </ul>
      </div>
    </div>
  );
};

export default Question;
