import { colors } from "styles/colors"

function Button({ children, ...props }) {
  return (
    <button
      css={{
        backgroundColor: colors.purple,
        color: colors.white,
        border: `1px solid ${colors.purple}`,
        height: 40,
        width: 80,
        padding: "10px",
        fontSize: 16,
        border: "none",
        borderRadius: 5,
        transition: "background-color .15s ease",
        ":hover": {
          backgroundColor: colors.white,
          color: colors.purple,
          border: `1px solid ${colors.purple}`,
          cursor: "pointer",
        },
        ":active": {
          backgroundColor: colors.purpleVeryLight,
        },
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
