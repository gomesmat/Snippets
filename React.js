// Handle Change
handleChange = async event => {
	const {name, value, type, checked} = event.target;
	await type === "checkbox" ? this.setState({ [name]:checked }) : this.setState({ [name]:value });
}

// Create Ref
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();  }
  render() {
    return (
      <div>
        <input type='text' ref={this.myRef} />
        <button onClick={() => console.log(this.myRef.current.value)}>Console</button>
      </div>
    );  
  }
}
