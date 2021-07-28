import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { ActionButtons } from "../../components/ActionButtons";

describe("<ActionButtons/>", () => {
  describe('"isApiStarted" prop is true', () => {
    it('should render "Stop" btn', () => {
      const { queryByText } = render(<ActionButtons isApiStarted />);
      const btn = queryByText("Stop").closest("button");

      expect(btn).toBeTruthy();
    });

    describe('click "Stop" btn', () => {
      it('should invoke "onClickClear" prop when click', () => {
        const fn = jest.fn();
        const { queryByText } = render(<ActionButtons onToggleAPI={fn} />);
        const btn = queryByText("Stop").closest("button");
        fireEvent.click(btn);

        expect(fn).toBeCalled();
      });
    });
  });

  describe('"isApiStarted" prop is false', () => {
    it('should render "Start" btn', () => {
      const { queryByText } = render(<ActionButtons isApiStarted={false} />);
      const btn = queryByText("Start").closest("button");

      expect(btn).toBeTruthy();
    });

    describe('click "Start" btn', () => {
      it('should invoke "onClickClear" prop when click', () => {
        const fn = jest.fn();
        const { queryByText } = render(
          <ActionButtons isApiStarted={false} onToggleAPI={fn} />
        );
        const btn = queryByText("Start").closest("button");
        fireEvent.click(btn);

        expect(fn).toBeCalled();
      });
    });
  });

  it('should render "Clear" btn', () => {
    const { queryByText } = render(<ActionButtons />);
    const btn = queryByText("Clear").closest("button");

    expect(btn).toBeTruthy();
  });

  describe('click "Clear" btn', () => {
    it('should invoke "onClickClear" prop when click', () => {
      const fn = jest.fn();
      const { queryByText } = render(<ActionButtons onClickClear={fn} />);
      const btn = queryByText("Clear").closest("button");
      fireEvent.click(btn);

      expect(fn).toBeCalled();
    });
  });
});
