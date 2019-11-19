import React, { Component } from "react";

class SearchBar extends Component {
	state = { term: "" };

	onInputChange = async e => {
		await this.setState({ term: e.target.value });
		console.log(this.state.term);
	};

	onFormSubmit = e => {
		//form removed
		e.preventDefault();

		//TODO: callback from parent component
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<div className="ui large action input sixteen wide column">
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
							placeholder="Search for Stock Information..."
						/>
						<button className="ui button" onClick={this.onFormSubmit}>Find Stock Quote</button>
				</div>
			</div>
		);
	}
}
export default SearchBar;
