handleChange = async event => {
	const {name, value, type, checked} = event.target;
	await type === "checkbox" ? this.setState({ [name]:checked }) : this.setState({ [name]:value });
	console.log(this.state)
}

capitaliza = (s, o) => {
	if (o === 1) { // capitaliza toda a frase
		return s.toUpperCase();
	} else return s.charAt(0).toUpperCase() + s.slice(1);
};
