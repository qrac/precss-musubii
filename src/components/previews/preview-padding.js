import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const paddings = [
  { id: 7, text: "XXS", value: "xxs" },
  { id: 6, text: "XS", value: "xs" },
  { id: 5, text: "Small", value: "sm" },
  { id: 4, text: "Middle", value: "md" },
  { id: 3, text: "Large", value: "lg" },
  { id: 2, text: "XL", value: "xl" },
  { id: 1, text: "XXL", value: "xxl" }
]

const ways = [
  { id: 1, text: "Top", value: "t" },
  { id: 2, text: "Right", value: "r" },
  { id: 3, text: "Bottom", value: "b" },
  { id: 4, text: "Left", value: "l" },
  { id: 5, text: "Vertical", value: "vert" },
  { id: 6, text: "Horizontal", value: "horiz" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewPaddingBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      padding: "md"
    }
    this.changePadding = this.changePadding.bind(this)
  }
  changePadding(value) {
    this.setState({ padding: value })
  }
  render() {
    const padding = this.state.padding
    const paddingClass = padding ? "hp_pd_" + padding : ""
    const contents = `<div class="bl_card ${paddingClass} bl_card__bg_light bl_card__outline bl_card__rad_md">カード</div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Padding"}>
              <DemoOptionBoxRadios
                patterns={paddings}
                parentChange={value => this.changePadding(value)}
                checked={this.state.padding}
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

export class PreviewPaddingWay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      way: "t",
      padding: "md"
    }
    this.changeWay = this.changeWay.bind(this)
    this.changePadding = this.changePadding.bind(this)
  }
  changeWay(value) {
    this.setState({ way: value })
  }
  changePadding(value) {
    this.setState({ padding: value })
  }
  render() {
    const way = this.state.way
    const wayConnect = way ? way + "_" : ""
    const padding = this.state.padding
    const paddingClass = padding ? "hp_pd_" + wayConnect + padding : ""
    const contents = `<div class="bl_card ${paddingClass} bl_card__bg_light bl_card__outline bl_card__rad_md">カード</div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Way"}>
              <DemoOptionBoxRadios
                patterns={ways}
                parentChange={value => this.changeWay(value)}
                checked={this.state.way}
              />
            </DemoOption>
            <DemoOption title={"Padding"}>
              <DemoOptionBoxRadios
                patterns={paddings}
                parentChange={value => this.changePadding(value)}
                checked={this.state.padding}
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
