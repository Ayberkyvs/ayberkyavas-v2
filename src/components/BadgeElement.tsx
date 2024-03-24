import { Badge } from './ui/badge'

function BadgeElement({className = "", children, variant = "retro"}: {className: string, children: any, variant?: string}) {
    let styles = ""
    if (variant === "retro") {
        styles = "gradient-retro"
    }else if (variant === "success"){
        styles = "bg-green"
    }else if (variant === "warning"){
        styles = "bg-yellow"
    }else if (variant === "danger"){
        styles = "bg-red"
    }

  return (
    <Badge className={`${className} ${styles}`}>{children}</Badge>
  )
}

export default BadgeElement