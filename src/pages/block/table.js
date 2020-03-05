import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewTableBasic,
  PreviewTableBackground,
  PreviewTableBackgroundStripe,
  PreviewTableAlign,
  PreviewTableFixed,
  PreviewTableWrap
} from "~/components/previews/preview-table"

export const meta = {
  title: "Block: Table"
}

export class BlockTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: "basic"
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
        value: "basic",
        text: "Basic",
        icon: "html5"
      },
      {
        id: 2,
        value: "background",
        text: "Background",
        icon: "html5"
      },
      {
        id: 3,
        value: "align",
        text: "Align",
        icon: "html5"
      },
      {
        id: 4,
        value: "fixed",
        text: "Fixed",
        icon: "html5"
      },
      {
        id: 5,
        value: "wrap",
        text: "Wrap",
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
          if (this.state.preview === "basic") {
            return <PreviewTableBasic />
          } else if (this.state.preview === "background") {
            return (
              <>
                <PreviewTableBackground />
                <PreviewTableBackgroundStripe />
              </>
            )
          } else if (this.state.preview === "align") {
            return <PreviewTableAlign />
          } else if (this.state.preview === "fixed") {
            return <PreviewTableFixed />
          } else if (this.state.preview === "wrap") {
            return <PreviewTableWrap />
          }
        })()}
      </article>
    )
  }
}

export default BlockTable
