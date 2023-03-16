import { colors } from "styles/colors"

function Input({ children, ...props }) {
  return (
    <input
      css={{
        border: `1px solid ${colors.purple}`,
        borderRadius: 5,
        height: 36,
      }}
      {...props}
    >
      {children}
    </input>
  )
}

export { Input }
