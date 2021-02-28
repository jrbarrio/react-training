# Import React as a script library

You can import React library as a script in your HTML page, although it also requires babel library to properly transpile React JSX code into Javascript code:

- https://unpkg.com/babel-standalone@6/babel.min.js
- https://unpkg.com/react@17/umd/react.development.js
- https://unpkg.com/react-dom@17/umd/react-dom.development.js

With React, you can include a new element into another existing one using ReactDOM:

```javascript
ReactDOM.render(element, document.getElementById('root'));
```

Also note the usage of ES6 spread operator and object destructuring:

```javascript
// Spread operator
const person2 = { ...person, surname: 'Roldán' };

// Object destructuring
const { name, surname } = person; 
```
