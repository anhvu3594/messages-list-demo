import { render } from "@testing-library/react";
import React from "react";
import { Notification } from "../../components/Notification";

describe("<Notification/>", () => {
  it('should render Notification with new message if pass "message" prop', () => {
    const message = "message";
    const { queryByText } = render(<Notification message={message} />);
    expect(queryByText(message)).toBeTruthy();
  });
});
