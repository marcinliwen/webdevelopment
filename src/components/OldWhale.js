import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"


export default function OldWhale() {
    return(
    <section>
      <StaticImage style={{position: "fixed", top:"0", left:"0", zIndex:"-1"}} src="../images/oldwhale.png" alt="A kitten" /> 
    </section> 
    )
    
  }