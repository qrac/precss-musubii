import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewWysiwygHeading,
  PreviewWysiwygText,
  PreviewWysiwygLink,
  PreviewWysiwygBlockquote,
  PreviewWysiwygCode,
  PreviewWysiwygPre,
  PreviewWysiwygList,
  PreviewWysiwygTable,
  PreviewWysiwygDefinitionList,
  PreviewWysiwygFigure
} from "~/components/previews/preview-wysiwyg"

export const meta = {
  title: "Block: WYSIWYG"
}

export class BlockWysiwyg extends React.Component {
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
        value: "list",
        text: "List",
        icon: "html5"
      },
      {
        id: 3,
        value: "table",
        text: "Table",
        icon: "html5"
      },
      {
        id: 4,
        value: "def",
        text: "Def",
        icon: "html5"
      },
      {
        id: 5,
        value: "figure",
        text: "Figure",
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
            return (
              <>
                <PreviewWysiwygHeading />
                <PreviewWysiwygText />
                <PreviewWysiwygLink />
                <PreviewWysiwygBlockquote />
                <PreviewWysiwygCode />
                <PreviewWysiwygPre />
              </>
            )
          } else if (this.state.preview === "list") {
            return <PreviewWysiwygList />
          } else if (this.state.preview === "table") {
            return <PreviewWysiwygTable />
          } else if (this.state.preview === "def") {
            return <PreviewWysiwygDefinitionList />
          } else if (this.state.preview === "figure") {
            return <PreviewWysiwygFigure />
          }
        })()}
      </article>
    )
  }
}

export default BlockWysiwyg
