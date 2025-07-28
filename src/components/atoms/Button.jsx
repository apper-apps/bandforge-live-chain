import { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md",
  children, 
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-neon-pink hover:shadow-neon-purple",
    secondary: "bg-surface border border-primary/30 text-white hover:border-primary/50 hover:shadow-neon-pink",
    accent: "bg-accent text-background hover:bg-accent/90 shadow-neon-yellow",
    ghost: "text-white hover:bg-surface/50 hover:shadow-neon-pink"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  }
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cut-corner",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button