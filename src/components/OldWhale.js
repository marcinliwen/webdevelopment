import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { useTheme } from "@material-ui/core/styles"


export default function OldWhale() {

  const isDarkTheme = useTheme().palette.type === "dark"

    return(
    <section style={{minHeight: "ingherit"}}>
      {isDarkTheme
        ? <StaticImage style={{position: "fixed", top:"50%", transform: "translateY(-50%)", left:"0", zIndex:"-1"}} src="../images/dark_oldwhale.png" alt="A kitten" /> 
        :<StaticImage style={{position: "fixed", top:"50%", transform: "translateY(-50%)", left:"0", zIndex:"-1"}} src="../images/oldwhale.png" alt="A kitten" /> 
      }
    </section> 
    )
    
  }