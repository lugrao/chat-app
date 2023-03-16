import { Input } from "components/Input"
import { Message } from "components/Message"
import { Button } from "components/Button"
import { colors } from "styles/colors"

function ChatBox(props) {
  return (
    <div
      css={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: 10,
        border: `solid 1px ${colors.purpleDark}`,
        borderRadius: 5,
        maxWidth: 600,
        padding: 20,
      }}
      {...props}
    >
      <div css={{ maxHeight: "400px", overflow: "scroll" }}>
        <Message sentByUser={true}>Test message 1</Message>
        <Message sentByUser={false}>Test message 2</Message>
        <Message sentByUser={true}>Test message 3</Message>
        <Message sentByUser={false}>Test message 4</Message>
        <Message sentByUser={false}>Test message 5</Message>
        <Message sentByUser={false}>Test message 6</Message>
        <Message sentByUser={false}>Test message 7</Message>
      </div>

      <div css={{ display: "flex", columnGap: 5 }}>
        <Input css={{ flexGrow: 1 }} />
        <Button>Send</Button>
      </div>
    </div>
  )
}

export { ChatBox }
