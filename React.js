handleChange = async event => {
		const {name, value, type, checked} = event.target;
		await type === "checkbox" ? this.setState({ [name]:checked }) : this.setState({ [name]:value });
		console.log(this.state)
	}
