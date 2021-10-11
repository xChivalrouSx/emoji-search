import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
	render() {
		return (
			<header className="component-header">
				<img
					data-testid="left-image"
					src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
					width="32"
					height="32"
					alt=""
				/>
				Emoji Search
				<img
					data-testid="right-image"
					src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
					width="32"
					height="32"
					alt=""
				/>
			</header>
		);
	}
}
