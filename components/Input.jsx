import { forwardRef } from "react"
import { colors } from "styles/colors"

const Input = forwardRef(function Input({ children, ...props }, ref) {
  return (
    <input
      ref={ref}
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
})

export { Input }
