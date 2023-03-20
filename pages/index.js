import Head from "next/head"
import { ChatBox } from "components/ChatBox"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
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
