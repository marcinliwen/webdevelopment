import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { useTheme } from "@material-ui/core/styles"


export default function OldWhale() {

  const isDarkTheme = useTheme().palette.type === "dark"

    return(
    <section style={{minHeight: "inherit"}}>
      {isDarkTheme
        ? <StaticImage  src="../images/dark_oldwhale.png" alt="A kitten" /> 
        :<StaticImage  src="../images/oldwhale.png" alt="A kitten" /> 
      }
    </section> 
    )
    
  }