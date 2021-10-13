import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import EmojiResultRow from "./EmojiResultRow";

describe("Emoji Row Test", () => {
	beforeEach(() => {
		render(<EmojiResultRow symbol="x2_wink" title="Wink" />);
	});
	test("Should Row Shown", () => {
		const image = screen.getByTestId("emoji-image");
		const spanTitle = screen.getByText("Wink");
		const spanHidden = screen.getByText("Click to copy emoji");

		expect(image).toBeInTheDocument();
		expect(image).toBeVisible();

		expect(spanTitle).toBeInTheDocument();
		expect(spanTitle).toBeVisible();

		expect(spanHidden).toBeInTheDocument();
		expect(spanHidden).toHaveClass("info");
	});
});
