import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import EmojiResults from "./EmojiResults";

describe("Emoji Search Input Test", () => {
	beforeEach(() => {
		render(
			<EmojiResults emojiData={[{ title: "test", symbol: "test-symbol" }]} />
		);
	});

	test("Should Search Input shown", () => {
		const container = screen.getByTestId("result-container");
		const row = screen.getByText("test");

		expect(container).toBeInTheDocument();
		expect(container).toBeVisible();

		expect(row).toBeInTheDocument();
		expect(row).toBeVisible();
	});
});
