import { colors } from "styles/colors"

function Message({ children, sentByUser, timestamp, ...props }) {
  const time = timestamp ? new Date(timestamp) : null
  return (
    <p
      css={{
        color: colors.white,
        background: `linear-gradient(350deg, ${
          sentByUser ? colors.purpleDark : colors.pinkDark
        } 0%, ${sentByUser ? colors.purpleLight : colors.pinkLight} 150%)`,
        width: "fit-content",
        padding: "10px 10px",
        borderRadius: sentByUser ? "10px 10px 10px 0" : "10px 10px 0 10px",
        marginLeft: sentByUser ? 0 : "auto",
        marginRight: sentByUser ? "auto" : 0,
      }}
      {...props}
    >
      {children}
      {time && (
        <span
          css={{
            fontSize: 9,
            paddingLeft: 5,
          }}
        >
          {time.toLocaleTimeString()}
        </span>
      )}
    </p>
  )
}

export { Message }
