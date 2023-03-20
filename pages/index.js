import { ChatBox } from "components/ChatBox"

export default function Home() {
  return (
    <>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <ChatBox />
      </div>
    </>
  )
}
