import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const margins = [
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

export class PreviewMarginBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      margin: "md",
      minus: false
    }
    this.changeMargin = this.changeMargin.bind(this)
    this.toggleMinus = this.toggleMinus.bind(this)
  }
  changeMargin(value) {
    this.setState({ margin: value })
  }
  toggleMinus() {
    this.setState({ minus: !this.state.minus })
  }
  render() {
    const minus = this.state.minus
    const minusConnect = minus ? "MG_" : "mg_"
    const margin = this.state.margin
    const marginClass = margin ? "hp_" + minusConnect + margin : ""
    const contents = `<button class="el_btn ${marginClass} el_btn__plain el_btn__warning" type="button">ボタンA</button>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Margin"}>
              <DemoOptionBoxRadios
                patterns={margins}
                parentChange={value => this.changeMargin(value)}
                checked={this.state.margin}
              />
            </DemoOption>
            <DemoOption title={"Fix"}>
              <DemoOptionBoxCheckbox
                text={"Minus"}
                parentChange={() => this.toggleMinus()}
                checked={this.state.minus}
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

export class PreviewMarginWay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      way: "t",
      margin: "md",
      minus: false
    }
    this.changeWay = this.changeWay.bind(this)
    this.changeMargin = this.changeMargin.bind(this)
    this.toggleMinus = this.toggleMinus.bind(this)
  }
  changeWay(value) {
    this.setState({ way: value })
  }
  changeMargin(value) {
    this.setState({ margin: value })
  }
  toggleMinus() {
    this.setState({ minus: !this.state.minus })
  }
  render() {
    const way = this.state.way
    const wayConnect = way ? way + "_" : ""
    const minus = this.state.minus
    const minusConnect = minus ? "MG_" : "mg_"
    const margin = this.state.margin
    const marginClass = margin ? "hp_" + minusConnect + wayConnect + margin : ""
    const contents = `<button class="el_btn ${marginClass} el_btn__plain el_btn__warning" type="button">ボタンA</button>`
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
            <DemoOption title={"Margin"}>
              <DemoOptionBoxRadios
                patterns={margins}
                parentChange={value => this.changeMargin(value)}
                checked={this.state.margin}
              />
            </DemoOption>
            <DemoOption title={"Fix"}>
              <DemoOptionBoxCheckbox
                text={"Minus"}
                parentChange={() => this.toggleMinus()}
                checked={this.state.minus}
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
