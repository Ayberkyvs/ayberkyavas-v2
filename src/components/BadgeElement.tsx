import { Badge } from './ui/badge'

export default function BadgeElement({className = "", children, variant = "retro"}: {className: string, children: any, variant?: string}) {
    let styles = ""
    if (variant === "retro") {
        styles = "gradient-retro"
    }else if (variant === "green"){
        styles = "bg-green"
    }else if (variant === "yellow"){
        styles = "bg-yellow"
    }else if (variant === "red"){
        styles = "bg-red"
    }else if (variant === "pink"){
        styles = "bg-pink"
    }else if (variant === "blue"){
        styles = "bg-blue"
    }else if (variant === "linkblue"){
        styles = "bg-link-blue"
    }

  return (
    <Badge className={`${className} ${styles}`}>{children}</Badge>
  )
}
