import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Emoji Header Test", () => {
	beforeEach(() => {
		render(<Header />);
	});

	test("Should left image shown", () => {
		const leftImage = screen.getByTestId("left-image");
		expect(leftImage).toBeInTheDocument();
		expect(leftImage).toBeVisible();
	});

	test("Should right image shown", () => {
		const rightImage = screen.getByTestId("right-image");
		expect(rightImage).toBeInTheDocument();
		expect(rightImage).toBeVisible();
	});

	test("Should header shown with title", () => {
		const headerElement = screen.queryByText("Emoji Search");
		expect(headerElement).toBeInTheDocument();
		expect(headerElement).toBeVisible();
	});
});
