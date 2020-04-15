import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const aspects = [
  { id: 0, text: "16:9", value: "el_iframe__asp16x9" },
  { id: 1, text: "4:3", value: "el_iframe__asp4x3" },
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2,
}

export class PreviewIframeBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aspect: "el_iframe__asp16x9",
    }
    this.changeAspect = this.changeAspect.bind(this)
  }
  changeAspect(value) {
    this.setState({ aspect: value })
  }
  render() {
    const aspect = this.state.aspect
    const contents = `<div class="el_iframe ${aspect}">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/llQkSr6fzXg"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Aspect"}>
              <DemoOptionBoxRadios
                patterns={aspects}
                name="radio-iframe-basic-aspect"
                parentChange={(value) => this.changeAspect(value)}
                checked={this.state.aspect}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
