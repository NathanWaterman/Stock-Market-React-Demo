import React, { Component } from "react";

class SearchBar extends Component {
	state = { term: "" };

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = e => {
        e.preventDefault();
        
        //TODO: callback from parent component
        this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<div className="ui form">
					<div className="field">
						<label>Search for Stock Information</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</div>
                <button onClick={this.onFormSubmit}>Find Stock Quote</button>
			</div>
		);
	}
}
export default SearchBar;
