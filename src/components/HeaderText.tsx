import React from "react"

 function HeaderText({text}:{text:string}) {
  return (
    <p className="font-medium text-lg">{text}</p>
  )
}

export default React.memo(HeaderText)