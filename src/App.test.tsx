import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"
import React from "react"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<App />)
    const linkElement = screen.getByText(/Mica/i);
    expect(linkElement).toBeInTheDocument();
})
