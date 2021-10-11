import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import "./SearchInput.css";

export default class SearchInput extends PureComponent {
	static propTypes = {
		textChange: PropTypes.func,
	};

	handleChange = (event) => {
		this.props.textChange(event);
	};

	render() {
		return (
			<div data-testid="search-container" className="component-search-input">
				<div>
					<input
						data-testid="search-textbox"
						onChange={this.handleChange}
					/>
				</div>
			</div>
		);
	}
}
