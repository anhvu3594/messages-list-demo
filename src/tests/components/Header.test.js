import { render } from "@testing-library/react";
import React from "react";
import { Header } from "../../components/Header";

describe("<Header/>", () => {
  it("should render header", () => {
    const { queryByText } = render(<Header />);
    expect(queryByText("Help.com Coding Challenge")).toBeTruthy();
  });
});
