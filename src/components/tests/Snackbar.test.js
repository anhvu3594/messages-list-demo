import { render } from "@testing-library/react"
import React from 'react'
import { Snackbar } from "../Snackbar"

describe('<Snackbar/>', () => {
  it('should render Snackbar with new message if pass "message" prop', () => {
    const message = "message"
    const {queryByText} = render(<Snackbar message={message}/>)
    expect(queryByText(message)).toBeTruthy()
  })
})
