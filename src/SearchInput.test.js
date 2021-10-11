import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import SearchInput from "./SearchInput";

describe("Emoji Search Input Test", () => {
	var searchTextBox;

	beforeEach(() => {
		render(<SearchInput />);
		searchTextBox = screen.queryByTestId("search-textbox");
	});

	test("Should Search Input shown", () => {
		const searchContainer = screen.queryByTestId("search-container");

		expect(searchContainer).toBeInTheDocument();
		expect(searchContainer).toBeVisible();

		expect(searchTextBox).toBeInTheDocument();
		expect(searchTextBox).toBeVisible();
		expect(searchTextBox).toBeEnabled();
	});
});
