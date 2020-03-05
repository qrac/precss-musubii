import React from "react"

import AppHead from "~/components/commons/app-head"
import DemoTabs from "~/components/parts/demo-tabs"
import {
  PreviewTextDark,
  PreviewTextLight,
  PreviewTextRole,
  PreviewTextWeight,
  PreviewTextLineHeight,
  PreviewTextTransform,
  PreviewTextAlign,
  PreviewTextAlignJustify,
  PreviewTextVerticalAlign,
  PreviewTextWrap,
  PreviewTextLink,
  PreviewTextBlockquote,
  PreviewTextCode,
  PreviewTextPre
} from "~/components/previews/preview-text"

export const meta = {
  title: "Element: Text"
}

export class ElementText extends React.Component {
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
        value: "arrange",
        text: "Arrange",
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
            return (
              <>
                <PreviewTextDark />
                <PreviewTextLight />
                <PreviewTextRole />
                <PreviewTextLink />
                <PreviewTextBlockquote />
                <PreviewTextCode />
                <PreviewTextPre />
              </>
            )
          } else if (this.state.preview === "arrange") {
            return (
              <>
                <PreviewTextWeight />
                <PreviewTextLineHeight />
                <PreviewTextTransform />
              </>
            )
          } else if (this.state.preview === "align") {
            return (
              <>
                <PreviewTextAlign />
                <PreviewTextAlignJustify />
                <PreviewTextVerticalAlign />
              </>
            )
          } else if (this.state.preview === "wrap") {
            return <PreviewTextWrap />
          }
        })()}
      </article>
    )
  }
}

export default ElementText
