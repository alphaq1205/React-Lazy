# React-Lazy

## React-Lazy
The React.lazy function provides a built-in way to separate components in an application into separate chunks of JavaScript with very little legwork. You can then take care of loading states when you couple it with the Suspense component. The problem with shipping a large JavaScript payload to users is the length of time it would take for the page to finish loading, especially on weaker devices and network connections. This is why code splitting and lazy loading is extremely useful.

## Suspense

Suspense accepts a fallback component which allows you to display any React component as a loading state. The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.

## Installation

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

- Runs the app in the development mode.<br />
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page will reload if you make edits.<br />
  You will also see any lint errors in the console.



## Build with

- ReactJs

## Reference

- [**Code Splitting**](https://reactjs.org/docs/code-splitting.html)


