import React, { Component } from "react";
import "./search.css"

class SearchBar extends Component {
	state = { term: "" };

	onInputChange = async e => {
		await this.setState({ term: e.target.value });
	};

	onSearchSubmit = e => {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};

	render() {
		return (
			<form onSubmit={this.onSearchSubmit} className="search-bar ui segment">
				<div className="ui large action input sixteen wide column">
					<input
						type="text"
						value={this.state.term}
						onChange={this.onInputChange}
						placeholder="Please Enter Stock Symbol..."
					/>
					<button className="ui button" onClick={this.onSearchSubmit} type="submit"><span className="mobile-hidden">Find Stock Quote</span><i className="chart line icon"></i></button>
				</div>
			</form>
		);
	}
}
export default SearchBar;
