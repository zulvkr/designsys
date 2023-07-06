import { createContext, forwardRef, useContext, useState } from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button, ButtonProps } from "./ui/button"

interface SidebarInfoProps {
  children?: React.ReactNode
  className?: string
}

const sidebarInfoContext = createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: true,
  setOpen: () => {},
})

const SidebarInfo = forwardRef<HTMLDivElement, SidebarInfoProps>(
  (props, ref) => {
    const [open, setOpen] = useState(true)

    return (
      <sidebarInfoContext.Provider value={{ open, setOpen }}>
        {open && (
          <div
            ref={ref}
            className={cn("relative border rounded-lg p-2 shadow-sm", props.className)}
          >
            {props.children}
          </div>
        )}
      </sidebarInfoContext.Provider>
    )
  }
)

interface SidebarInfoTitleProps {
  children?: React.ReactNode
  className?: string
}

const SidebarInfoTitle = forwardRef<HTMLHeadingElement, SidebarInfoTitleProps>(
  (props, ref) => {
    return (
      <h2 ref={ref} className={cn("text-sm", props.className)}>
        {props.children}
      </h2>
    )
  }
)

interface SidebarInfoContentProps {
  children?: React.ReactNode
  className?: string
}

const SidebarInfoContent = forwardRef<HTMLDivElement, SidebarInfoContentProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-sm text-muted-foreground mt-2", props.className)}
      >
        {props.children}
      </div>
    )
  }
)

const SidebarInfoCloseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // use set open
    const { setOpen } = useContext(sidebarInfoContext)
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="iconXs"
        className={cn(
          "text-muted-foreground absolute top-1 right-1",
          props.className
        )}
        onClick={() => setOpen(false)}
      >
        <X className="w-4 h-4" />
      </Button>
    )
  }
)

export {
  SidebarInfo,
  SidebarInfoTitle,
  SidebarInfoContent,
  SidebarInfoCloseButton,
}
