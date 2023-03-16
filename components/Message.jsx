import { colors } from "styles/colors"

function Message({ children, sentByUser, ...props }) {
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
    </p>
  )
}

export { Message }
