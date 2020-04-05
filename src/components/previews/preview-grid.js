import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const columnNums = [
  { id: 1, text: "1", value: 1 },
  { id: 2, text: "2", value: 2 },
  { id: 3, text: "3", value: 3 },
  { id: 4, text: "4", value: 4 },
  { id: 5, text: "5", value: 5 },
  { id: 6, text: "6", value: 6 },
  { id: 7, text: "7", value: 7 },
  { id: 8, text: "8", value: 8 },
  { id: 9, text: "9", value: 9 },
  { id: 10, text: "10", value: 10 },
  { id: 11, text: "11", value: 11 },
  { id: 12, text: "12", value: 12 },
]

const columnSizes = [
  { id: 0, text: "自動幅", value: "" },
  { id: 13, text: "伸縮幅", value: "hp_fx0" },
  { id: 1, text: "1/12幅", value: "hp_fx1" },
  { id: 2, text: "2/12幅", value: "hp_fx2" },
  { id: 3, text: "3/12幅", value: "hp_fx3" },
  { id: 4, text: "4/12幅", value: "hp_fx4" },
  { id: 5, text: "5/12幅", value: "hp_fx5" },
  { id: 6, text: "6/12幅", value: "hp_fx6" },
  { id: 7, text: "7/12幅", value: "hp_fx7" },
  { id: 8, text: "8/12幅", value: "hp_fx8" },
  { id: 9, text: "9/12幅", value: "hp_fx9" },
  { id: 10, text: "10/12幅", value: "hp_fx10" },
  { id: 11, text: "11/12幅", value: "hp_fx11" },
  { id: 12, text: "12/12幅", value: "hp_fx12" },
]

const gaps = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "xxs" },
  { id: 6, text: "XS", value: "xs" },
  { id: 5, text: "Small", value: "sm" },
  { id: 4, text: "Medium", value: "md" },
  { id: 3, text: "Large", value: "lg" },
  { id: 2, text: "XL", value: "xl" },
  { id: 1, text: "XXL", value: "xxl" },
]

const aligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Baseline", value: "ly_grid__baseline" },
  { id: 2, text: "Middle", value: "ly_grid__middle" },
  { id: 3, text: "Bottom", value: "ly_grid__b" },
  { id: 4, text: "Center", value: "ly_grid__c" },
  { id: 5, text: "Right", value: "ly_grid__r" },
  { id: 6, text: "Between", value: "ly_grid__between" },
  { id: 7, text: "Around", value: "ly_grid__around" },
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2,
}

export class PreviewGridBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnNum: 3,
      columnSize: "hp_fx0",
    }
    this.changeColumnNum = this.changeColumnNum.bind(this)
    this.changeColumnSize = this.changeColumnSize.bind(this)
  }
  changeColumnNum(value) {
    this.setState({ columnNum: value })
  }
  changeColumnSize(value) {
    this.setState({ columnSize: value })
  }
  render() {
    const columnNum = this.state.columnNum
    const columnSize = this.state.columnSize
    const gridTagBefore = `<div class="ly_grid ly_grid__gap_md">`
    const gridTagAfter = `</div>`
    const columns = []
    for (let i = 0; i < columnNum; i++) {
      columns.push(
        `<div class="ly_grid_col ${columnSize}"><div>children ${
          i + 1
        }</div></div>`
      )
    }
    const contents = (gridTagBefore + columns.join("") + gridTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Columns"}>
              <DemoOptionBoxRadios
                patterns={columnNums}
                parentChange={(value) => this.changeColumnNum(value)}
                checked={this.state.columnNum}
              />
            </DemoOption>
            <DemoOption title={"Flex"}>
              <DemoOptionBoxRadios
                patterns={columnSizes}
                parentChange={(value) => this.changeColumnSize(value)}
                checked={this.state.columnSize}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box bl_box__custom_grid_demo"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewGridGap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnNum: 4,
      columnSize: "hp_fx6",
      gap: "md",
    }
    this.changeColumnNum = this.changeColumnNum.bind(this)
    this.changeColumnSize = this.changeColumnSize.bind(this)
    this.changeGap = this.changeGap.bind(this)
  }
  changeColumnNum(value) {
    this.setState({ columnNum: value })
  }
  changeColumnSize(value) {
    this.setState({ columnSize: value })
  }
  changeGap(value) {
    this.setState({ gap: value })
  }
  render() {
    const columnNum = this.state.columnNum
    const columnSize = this.state.columnSize
    const gap = this.state.gap
    const gapClass = gap ? "ly_grid__gap_" + gap : ""
    const gridTagBefore = `<div class="ly_grid ${gapClass}">`
    const gridTagAfter = `</div>`
    const columns = []
    for (let i = 0; i < columnNum; i++) {
      columns.push(
        `<div class="ly_grid_col ${columnSize}"><div>children ${
          i + 1
        }</div></div>`
      )
    }
    const contents = (gridTagBefore + columns.join("") + gridTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Gap"}>
              <DemoOptionBoxRadios
                patterns={gaps}
                parentChange={(value) => this.changeGap(value)}
                checked={this.state.gap}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box bl_box__custom_grid_demo"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewGridGapVertical extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnNum: 3,
      columnSize: "hp_fx12",
      gap: "md",
    }
    this.changeColumnNum = this.changeColumnNum.bind(this)
    this.changeColumnSize = this.changeColumnSize.bind(this)
    this.changeGap = this.changeGap.bind(this)
  }
  changeColumnNum(value) {
    this.setState({ columnNum: value })
  }
  changeColumnSize(value) {
    this.setState({ columnSize: value })
  }
  changeGap(value) {
    this.setState({ gap: value })
  }
  render() {
    const columnNum = this.state.columnNum
    const columnSize = this.state.columnSize
    const gap = this.state.gap
    const gapClass = gap ? "ly_grid__gap_vert_" + gap : ""
    const gridTagBefore = `<div class="ly_grid ${gapClass}">`
    const gridTagAfter = `</div>`
    const columns = []
    for (let i = 0; i < columnNum; i++) {
      columns.push(
        `<div class="ly_grid_col ${columnSize}"><div>children ${
          i + 1
        }</div></div>`
      )
    }
    const contents = (gridTagBefore + columns.join("") + gridTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Gap Vertical"}>
              <DemoOptionBoxRadios
                patterns={gaps}
                parentChange={(value) => this.changeGap(value)}
                checked={this.state.gap}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box bl_box__custom_grid_demo"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewGridGapHorizontal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnNum: 3,
      columnSize: "hp_fx0",
      gap: "md",
    }
    this.changeColumnNum = this.changeColumnNum.bind(this)
    this.changeColumnSize = this.changeColumnSize.bind(this)
    this.changeGap = this.changeGap.bind(this)
  }
  changeColumnNum(value) {
    this.setState({ columnNum: value })
  }
  changeColumnSize(value) {
    this.setState({ columnSize: value })
  }
  changeGap(value) {
    this.setState({ gap: value })
  }
  render() {
    const columnNum = this.state.columnNum
    const columnSize = this.state.columnSize
    const gap = this.state.gap
    const gapClass = gap ? "ly_grid__gap_horiz_" + gap : ""
    const gridTagBefore = `<div class="ly_grid ${gapClass}">`
    const gridTagAfter = `</div>`
    const columns = []
    for (let i = 0; i < columnNum; i++) {
      columns.push(
        `<div class="ly_grid_col ${columnSize}"><div>children ${
          i + 1
        }</div></div>`
      )
    }
    const contents = (gridTagBefore + columns.join("") + gridTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Gap Horizontal"}>
              <DemoOptionBoxRadios
                patterns={gaps}
                parentChange={(value) => this.changeGap(value)}
                checked={this.state.gap}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box bl_box__custom_grid_demo"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewGridAlign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnNum: 4,
      align: "",
    }
    this.changeColumnNum = this.changeColumnNum.bind(this)
    this.changeAlign = this.changeAlign.bind(this)
  }
  changeColumnNum(value) {
    this.setState({ columnNum: value })
  }
  changeAlign(value) {
    this.setState({ align: value })
  }
  render() {
    const columnNum = this.state.columnNum
    const align = this.state.align
    const gridTagBefore = `<div class="ly_grid
      ${align} ly_grid__gap_md">`
    const gridTagAfter = `</div>`
    const columns = []
    for (let i = 0; i < columnNum; i++) {
      columns.push(
        `<div class="ly_grid_col"><div>children ${i + 1}</div></div>`
      )
    }
    const contents = (gridTagBefore + columns.join("") + gridTagAfter)
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
                parentChange={(value) => this.changeAlign(value)}
                checked={this.state.align}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box bl_box__custom_grid_demo"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewGridReverse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reverse: true,
      columnNum: 4,
    }
    this.toggleReverse = this.toggleReverse.bind(this)
  }
  toggleReverse() {
    this.setState({ reverse: !this.state.reverse })
  }
  render() {
    const reverse = this.state.reverse ? "ly_grid__rev" : ""
    const columnNum = this.state.columnNum
    const gridTagBefore = `<div class="ly_grid ly_grid__gap_md ${reverse}">`
    const gridTagAfter = `</div>`
    const columns = []
    for (let i = 0; i < columnNum; i++) {
      columns.push(
        `<div class="ly_grid_col"><div>children ${i + 1}</div></div>`
      )
    }
    const contents = (gridTagBefore + columns.join("") + gridTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Reverse"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleReverse()}
                checked={this.state.reverse}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box bl_box__custom_grid_demo"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewGridStretch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stretch: true,
    }
    this.toggleStretch = this.toggleStretch.bind(this)
  }
  toggleStretch() {
    this.setState({ stretch: !this.state.stretch })
  }
  render() {
    const stretch = this.state.stretch ? "ly_grid__stretch" : ""
    const gridTagBefore = `<div class="ly_grid ly_grid__gap_md ${stretch}">`
    const gridTagAfter = `</div>`
    const columns = `<div class="ly_grid_col">
      <div><p>children 1</p></div>
    </div>
    <div class="ly_grid_col">
      <div><p>children 2</p><p>children 2</p></div>
    </div>
    <div class="ly_grid_col">
      <div><p>children 3</p><p>children 3</p><p>children 3</p></div>
    </div>`
    const contents = (gridTagBefore + columns + gridTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Stretch"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleStretch()}
                checked={this.state.stretch}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box bl_box__custom_grid_demo"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
