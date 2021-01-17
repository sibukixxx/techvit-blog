import React from "react"
import { Facebook, Twitter } from "react-sharingbuttons"

export default ({ arg, shareText }) => (
  <div className="p-share_buttons">
    <Facebook url={arg} />
    <Twitter url={arg} shareText={shareText} />
  </div>
)
