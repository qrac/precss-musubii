import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const patterns = [
  { id: 0, text: "Disc", value: "el_list__disc" },
  { id: 1, text: "Circle", value: "el_list__circle" },
  { id: 2, text: "Square", value: "el_list__square" },
  { id: 3, text: "Kome", value: "el_list__kome" },
  { id: 4, text: "Decimal", value: "el_list__deci" }
]

const beautifyHtmlOptions = {
  inline: ["span", "div"],
  indent_size: 2
}

export class PreviewListBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "el_list__disc",
      nested: false
    }
    this.changePattern = this.changePattern.bind(this)
    this.toggleNested = this.toggleNested.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleNested() {
    this.setState({ nested: !this.state.nested })
  }
  render() {
    const pattern = this.state.pattern
    const nested = this.state.nested
    const tagBefore = `<ul class="el_list ${pattern}">`
    const tagAfter = `</ul>`
    const nestedLists = []
    for (let i = 0; i < 4; i++) {
      nestedLists.push(
        `<li class="el_list_item">リストを入れ子にした場合は、その分インデントを追加して構造を見せる</li>`
      )
    }
    const lists = []
    for (let i = 0; i < 4; i++) {
      lists.push(
        `<li class="el_list_item">リストはインデントしてテキストが折り返した場合に読みやすくする${
          nested && i === 3 ? tagBefore + nestedLists.join("") + tagAfter : ""
        }</li>`
      )
    }
    const contents = (tagBefore + lists.join("") + tagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Nested"}
                parentChange={() => this.toggleNested()}
                checked={this.state.nested}
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

export class PreviewListNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nested: false
    }
    this.toggleNested = this.toggleNested.bind(this)
  }
  toggleNested() {
    this.setState({ nested: !this.state.nested })
  }
  render() {
    const nested = this.state.nested
    const tagBefore = `<ul class="el_list el_list__note">`
    const tagAfter = `</ul>`
    const nestedLists = []
    for (let i = 0; i < 4; i++) {
      nestedLists.push(
        `<li class="el_list_item"><span>※${i +
          1}</span><div class="el_txt hp_fx0"
        >自由な見出しをインラインで置きつつインデント</div></li>`
      )
    }
    const lists = []
    for (let i = 0; i < 4; i++) {
      lists.push(
        `<li class="el_list_item"><span>※${i +
          1}</span><div class="el_txt hp_fx0"
        >自由な見出しをインラインで置きつつインデント${
          nested && i === 3 ? tagBefore + nestedLists.join("") + tagAfter : ""
        }</div></li>`
      )
    }
    const contents = (tagBefore + lists.join("") + tagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Nested"}
                parentChange={() => this.toggleNested()}
                checked={this.state.nested}
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
