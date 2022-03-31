// Creating a React App
// $ npx create-react-app file-name --use-npm (<use npm instead of yarn to install everything)
// $ npm start (this will run app in localhost:3000)

// ReactDOM.render() takes in 2 arguments: element to create, where to render
// React.createElement() takes in 3 arguments: tagName, properties, children
ReactDOM.render(
    React.createElement("h1", null, "Hello!"),
    document.getElementById("root")
);