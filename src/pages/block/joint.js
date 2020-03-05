import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewJointButton,
  PreviewJointBadge,
  PreviewJointForm
} from "~/components/previews/preview-joint"

export const meta = {
  title: "Block: Joint"
}

export class BlockJoint extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: "button"
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
        value: "button",
        text: "Button",
        icon: "html5"
      },
      {
        id: 2,
        value: "badge",
        text: "Badge",
        icon: "html5"
      },
      {
        id: 3,
        value: "form",
        text: "Form",
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
          if (this.state.preview === "button") {
            return <PreviewJointButton />
          } else if (this.state.preview === "badge") {
            return <PreviewJointBadge />
          } else if (this.state.preview === "form") {
            return <PreviewJointForm />
          }
        })()}
      </article>
    )
  }
}

export default BlockJoint
