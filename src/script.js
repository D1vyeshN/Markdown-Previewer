const initialState = `# hello
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
class App extends React.Component {
  state = {
    text:initialState 
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center m-3 p-2">
          Welcome to my React Markdown Previewer
        </h1>
        <div className="row mx-1">
          <div className="col-6">
            <h6 className="text-center h-1 p-1 rounded">Editor</h6>
            <textarea
              className="form-control "
              id="editor"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6" >
            <h6 className="text-center h-2 p-1 rounded">Preview</h6>
            <div className="preview rounded p-2" dangerouslySetInnerHTML={{
    __html: marked.parse(this.state.text,{breaks:true})
  }} id="preview" />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
