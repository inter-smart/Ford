import * as React from "react"
import { cn } from "@/lib/utils"

const Field = React.forwardRef(({ className, "data-invalid": invalid, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
))
Field.displayName = "Field"

const FieldGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
FieldGroup.displayName = "FieldGroup"

const FieldLabel = React.forwardRef(({ className, ...props }, ref) => (
  <label ref={ref} className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)} {...props} />
))
FieldLabel.displayName = "FieldLabel"

const FieldError = React.forwardRef(({ className, errors, ...props }, ref) => {
  if (!errors || !errors.length || !errors[0]) return null;
  return (
    <p ref={ref} className={cn("text-sm font-medium text-destructive", className)} {...props}>
      {errors[0].message}
    </p>
  )
})
FieldError.displayName = "FieldError"

export { Field, FieldGroup, FieldLabel, FieldError }
