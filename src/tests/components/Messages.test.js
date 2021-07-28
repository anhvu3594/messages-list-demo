import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { Messages } from "../../components/Messages";

const messages = ["a", "b", "c"];
describe("<Messages/>", () => {
  it('should render header if pass "header" prop', () => {
    const header = "header";
    const { queryByText } = render(<Messages header={header} />);

    expect(queryByText(header)).toBeTruthy();
  });

  describe('pass "messages" prop', () => {
    it("should render count span", () => {
      const { queryByText } = render(<Messages messages={messages} />);

      expect(queryByText(`Count ${messages.length}`)).toBeTruthy();
    });

    it("should render messages", () => {
      const { queryByText } = render(<Messages messages={messages} />);

      messages.forEach((message) => {
        expect(queryByText(message)).toBeTruthy();
      });
    });

    it('should invoke "onClear" prop when click "Clear" btn', () => {
      const fn = jest.fn();
      const { queryAllByText } = render(
        <Messages messages={messages} onClear={fn} />
      );
      const btn = queryAllByText("Clear")[0].closest("button");
      fireEvent.click(btn);

      expect(fn).toBeCalled();
    });
  });
});
