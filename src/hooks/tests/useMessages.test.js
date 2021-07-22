import { renderHook, act } from '@testing-library/react-hooks'
import {useMessages} from '../useMessages'

const initMessages = [
  {message: "a", priority: 1},
  {message: "b", priority: 1},
  {message: "c", priority: 2}
]
describe('useMessages', () => {
  it('should return message by priority when call "getMessagesByPriority"', () => {
    const { result } = renderHook(() => useMessages(initMessages))
    const messages = result.current.getMessagesByPriority(1)
    expect(messages.length).toBe(2)
    expect(messages[0]).toEqual(initMessages[0].message)
    expect(messages[1]).toEqual(initMessages[1].message)
  })
  
  it('should add message to start of "messages" state when call "addMessage"', () => {
    const { result } = renderHook(() => useMessages(initMessages))
    const message = {message: "message", priority: 1}
    act(() => {
      result.current.addMessage(message)
    })
  
    const messages = result.current.getMessagesByPriority(1)
    expect(messages.length).toBe(3)
    expect(messages[0]).toEqual(message.message)
  })

  it('should remove message when call "removeMessage"', () => {
    const { result } = renderHook(() => useMessages(initMessages))
    act(() => {
      result.current.removeMessage(initMessages[0].message)
    })
  
    const messages = result.current.getMessagesByPriority(1)
    expect(messages.length).toBe(1)
    expect(messages[0]).toEqual(initMessages[1].message)
  })

  it('should remove all messages when call "removeAllMessages"', () => {
    const { result } = renderHook(() => useMessages(initMessages))
    act(() => {
      result.current.removeAllMessages()
    })
  
    const messages = result.current.getMessagesByPriority(1)
    const messages2 = result.current.getMessagesByPriority(2)
    expect(messages.length).toBe(0)
    expect(messages2.length).toBe(0)
  })
})
