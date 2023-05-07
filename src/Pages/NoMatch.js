import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div>
      <h1>oops!! page not found</h1>
      <p style ={{textAlign:"center",marginTop:"3rem"}}>Return to<Link to ="/" ><span> &nbsp; HOME</span></Link></p>
    </div>
  )
}
