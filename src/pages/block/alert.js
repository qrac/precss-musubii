import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewAlertRole,
  PreviewAlertTail
} from "~/components/previews/preview-alert"

export const meta = {
  title: "Block: Alert"
}

export class BlockAlert extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: "role"
    }
    this.changePreview = this.changePreview.bind(this)
  }
  changePreview(value) {
    this.setState({ preview: value })
  }
  render() {
    const previews = [
      {
        id: 1,
        value: "role",
        text: "Role",
        icon: "html5"
      }
    ]
    return (
      <article className="bl_page">
        <AppHead meta={meta} />
        <DemoTabs
          patterns={previews}
          parentChange={value => this.changePreview(value)}
          checked={this.state.preview}
        />
        {(() => {
          if (this.state.preview === "role") {
            return <PreviewAlertRole />
          } else if (this.state.preview === "tail") {
            return <PreviewAlertTail />
          }
        })()}
      </article>
    )
  }
}

export default BlockAlert
