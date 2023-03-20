import { useState, useRef, useEffect } from "react"
import { useChannel } from "hooks/useChannel"
import { Input } from "components/Input"
import { Message } from "components/Message"
import { Button } from "components/Button"
import { colors } from "styles/colors"

function ChatBox(props) {
  const endOfMessages = useRef(null)
  const inputElement = useRef(null)

  const [message, setMessage] = useState("")
  const [sentMessages, setSentMessages] = useState([])

  const [channel, ably] = useChannel("just-chating", (msg) => {
    const history = sentMessages.slice(-199)
    setSentMessages([...history, msg])
  })

  useEffect(() => {
    endOfMessages.current.scrollIntoView({ behaviour: "smooth" })
  }, [sentMessages])

  function sendMessage(msg) {
    channel.publish({ name: "chat-message", data: msg })
    setMessage("")
    inputElement.current.focus()
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (message.trim().length === 0) return
    sendMessage(message)
  }

  const messages = sentMessages.map((msg, index) => {
    const sentByUser = msg.connectionId === ably.connection.id
    return (
      <Message timestamp={msg.timestamp} key={index} sentByUser={sentByUser}>
        {msg.data}
      </Message>
    )
  })

  return (
    <div
      css={{
        width: 600,
        display: "flex",
        flexDirection: "column",
        rowGap: 10,
        border: `solid 1px ${colors.purpleDark}`,
        borderRadius: 5,
        padding: 20,
      }}
      {...props}
    >
      <div
        css={{
          height: "70vh",
          overflow: "scroll",
          backgroundColor: colors.yellowVeryLight,
          border: `1px solid ${colors.purpleDark}`,
          borderRadius: 5,
          padding: 10,
          overflowX: "hidden",
          overflowWrap: "anywhere",
        }}
      >
        {messages}
        <div ref={endOfMessages}></div>
      </div>

      <form onSubmit={handleSubmit} css={{ display: "flex", columnGap: 5 }}>
        <Input
          ref={inputElement}
          placeholder="Type something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          css={{ flexGrow: 1 }}
        />
        <Button>Send</Button>
      </form>
    </div>
  )
}

export { ChatBox }
