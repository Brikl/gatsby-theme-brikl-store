import React from "react"
import { renderToString } from "react-dom/server"
import Banner from "./Banner"

const HeaderBlock = props => {
  let html = renderToString(<Banner data={props.data} />)
  console.log(html)
  const { data } = props
  return <Banner data={data} />
}

export default HeaderBlock
