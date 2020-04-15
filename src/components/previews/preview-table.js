import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const patterns = [
  { id: 2, text: "Border", value: "bl_table__border" },
  { id: 0, text: "Line", value: "bl_table__line" },
  { id: 1, text: "Outline", value: "bl_table__outline" },
]

const aligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "left", value: "bl_table__left" },
  { id: 2, text: "Center", value: "bl_table__center" },
  { id: 3, text: "Right", value: "bl_table__right" },
  { id: 4, text: "middle", value: "bl_table__middle" },
]

const beautifyHtmlOptions = {
  inline: ["th", "td", "br", "span"],
  indent_size: 2,
}

export class PreviewTableBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "bl_table__border",
    }
    this.changePattern = this.changePattern.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  render() {
    const pattern = this.state.pattern
    const contents = `<table class="bl_table ${pattern}">
        <thead>
          <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
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
                name="radio-table-basic-pattern"
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
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

export class PreviewTableBackground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<table class="bl_table bl_table__border">
        <thead>
          <tr class="bl_box bl_table__paint"><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセル</td><td class="bl_box bl_table__spot">データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td class="bl_box bl_table__danger">データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
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

export class PreviewTableBackgroundStripe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<table class="bl_table bl_table__border bl_table__stripe">
        <thead>
          <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
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

export class PreviewTableAlign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      align: "",
    }
    this.changeAlign = this.changeAlign.bind(this)
  }
  changeAlign(value) {
    this.setState({ align: value })
  }
  render() {
    const align = this.state.align
    const contents = `<table class="bl_table bl_table__border ${align}">
        <thead>
          <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセル</td><td>データセル<br/>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル<br/>データセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Align"}>
              <DemoOptionBoxRadios
                patterns={aligns}
                name="radio-table-align"
                parentChange={(value) => this.changeAlign(value)}
                checked={this.state.align}
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

export class PreviewTableFixed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<table class="bl_table bl_table__border bl_table__fixed">
        <thead>
          <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセルデータセル</td><td>データセル</td><td>データセル</td><td>データセルデータセルデータセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセルデータセルデータセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
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

export class PreviewTableWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<div class="bl_table_wrap">
        <table class="bl_table bl_table__border bl_table__stripe">
          <thead>
            <tr class="bl_box bl_table__paint"><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
          </thead>
          <tbody>
            <tr
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td></tr
            >
            <tr
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td></tr
            >
            <tr
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td></tr
            >
            <tr
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="el_txt el_txt__nowrap">折り返さないテキスト＋折り返さないテキスト</span></td></tr
            >
          </tbody>
        </table>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
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
