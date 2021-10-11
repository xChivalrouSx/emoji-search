import Clipboard from "clipboard";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

export default class EmojiResults extends PureComponent {
	static propTypes = {
		emojiData: PropTypes.array,
	};

	componentDidMount() {
		this.clipboard = new Clipboard(".copy-to-clipboard");
	}

	componentWillUnmount() {
		this.clipboard.destroy();
	}

	render() {
		return (
			<div
				data-testid="result-container"
				className="component-emoji-results"
			>
				{this.props.emojiData.map((emojiData, index) => (
					<EmojiResultRow
						key={emojiData.title}
						symbol={emojiData.symbol}
						title={emojiData.title}
					/>
				))}
			</div>
		);
	}
}
