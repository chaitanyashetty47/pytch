"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme="light"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "white",
          "--normal-text": "black",
          "--normal-border": "rgb(161 161 170)",
          "--border-radius": "var(--radius)",
          "--success-bg": "white",
          "--success-text": "black",
          "--success-border": "rgb(161 161 170)",
          "--error-bg": "white",
          "--error-text": "black",
          "--error-border": "rgb(161 161 170)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
