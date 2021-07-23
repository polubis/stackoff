import React from "react"
import { Swipper } from "../components/mobile/swipper"

export default (): React.ReactElement => {
  return (
    <Swipper full>
      <div style={{ background: "red" }}>1</div>
      <div style={{ background: "blue" }}>2</div>
      <div style={{ background: "blue" }}>3</div>
      <div style={{ background: "blue" }}>4</div>
    </Swipper>
  )
}
