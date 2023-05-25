function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `# hello
## hello
this is paragraph

**bold text**
>Quote!!!

[links](https://www.freecodecamp.org)

\`<div></div>\`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: "text-center m-3 p-2" }, "Welcome to my React Markdown Previewer"), /*#__PURE__*/


      React.createElement("div", { className: "row mx-1" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center h-1 p-1 rounded" }, "Editor"), /*#__PURE__*/
      React.createElement("textarea", {
        className: "form-control ",
        id: "editor",
        value: this.state.text,
        onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center h-2 p-1 rounded" }, "Preview"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded p-2", dangerouslySetInnerHTML: {
          __html: marked.parse(this.state.text, { breaks: true }) },
        id: "preview" })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));