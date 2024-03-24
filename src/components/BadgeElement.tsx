import { Badge } from './ui/badge'

function BadgeElement({className = "", children, style = "retro"}: {className: string, children: any, style?: string}) {
    let styles = ""
    if (style === "retro") {
        styles = "gradient-retro"
    }else if (style === "success"){
        styles = "bg-green"
    }else if (style === "warning"){
        styles = "bg-yellow"
    }else if (style === "danger"){
        styles = "bg-red"
    }

  return (
    <Badge className={`${className} ${styles}`}>{children}</Badge>
  )
}

export default BadgeElement