# Constructor in class components

You can define the state in a class component constructor:

```javascript
constructor(props) {
    super(props);

    this.state = {
        counter: 100
    };

    ...
}
```