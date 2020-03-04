import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const outlines = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "All", value: "bl_box__outline" },
  { id: 2, text: "Top", value: "bl_box__outline-top" },
  { id: 3, text: "Right", value: "bl_box__outline-right" },
  { id: 4, text: "Bottom", value: "bl_box__outline-bottom" },
  { id: 5, text: "Left", value: "bl_box__outline-left" }
]

const separates = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "All", value: "bl_box__sepa" },
  { id: 2, text: "Parent & Child", value: "bl_box__sepa-parent" }
]

const verticalAligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Baseline", value: "bl_box__baseline" },
  { id: 2, text: "Middle", value: "bl_box__middle" },
  { id: 3, text: "Bottom", value: "bl_box__b" }
]

const horizontalAligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Center", value: "bl_box__c" },
  { id: 2, text: "Right", value: "bl_box__r" },
  { id: 3, text: "Between", value: "bl_box__between" },
  { id: 4, text: "Around", value: "bl_box__around" }
]

const angles = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Right", value: "bl_box__angle_r" },
  { id: 2, text: "Left", value: "bl_box__angle_l" },
  { id: 3, text: "Right Up", value: "bl_box__angle_r bl_box__angle_up" },
  { id: 4, text: "Right Down", value: "bl_box__angle_r bl_box__angle_dw" },
  { id: 5, text: "Left Up", value: "bl_box__angle_l bl_box__angle_up" },
  { id: 6, text: "Left Down", value: "bl_box__angle_l bl_box__angle_dw" }
]

const beautifyHtmlOptions = {
  inline: ["span"],
  indent_size: 2
}

export class PreviewBoxBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outline: true,
      bgLight: true
    }
    this.toggleOutline = this.toggleOutline.bind(this)
    this.toggleBgLight = this.toggleBgLight.bind(this)
  }
  toggleOutline() {
    this.setState({ outline: !this.state.outline })
  }
  toggleBgLight() {
    this.setState({ bgLight: !this.state.bgLight })
  }
  render() {
    const bgLight = this.state.bgLight ? "bl_box__bg_light" : ""
    const outline = this.state.outline ? "bl_box__outline" : ""
    const contents = `<div class="bl_box ${bgLight} ${outline} hp_pd_md">children</div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Attached"}>
              <DemoOptionBoxCheckbox
                text={"Background Light"}
                parentChange={() => this.toggleBgLight()}
                checked={this.state.bgLight}
              />
              <DemoOptionBoxCheckbox
                text={"Outline"}
                parentChange={() => this.toggleOutline()}
                checked={this.state.outline}
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

export class PreviewBoxFlexbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      verticalAlign: "bl_box__middle",
      horizontalAlign: "",
      reverse: false
    }
    this.changeVerticalAlign = this.changeVerticalAlign.bind(this)
    this.changeHorizontalAlign = this.changeHorizontalAlign.bind(this)
    this.toggleReverse = this.toggleReverse.bind(this)
  }
  changeVerticalAlign(value) {
    this.setState({ verticalAlign: value })
  }
  changeHorizontalAlign(value) {
    this.setState({ horizontalAlign: value })
  }
  toggleReverse() {
    this.setState({ reverse: !this.state.reverse })
  }
  render() {
    const verticalAlign = this.state.verticalAlign
    const horizontalAlign = this.state.horizontalAlign
    const reverse = this.state.reverse ? "bl_box__rev" : ""
    const contents = `<div class="bl_box bl_box__fx ${verticalAlign} ${horizontalAlign} ${reverse}
        bl_box__bg_light bl_box__outline hp_pd_md">
        <i aria-hidden="true" class="fas fa-archive el_icon hp_mg_r_md hp_lg"></i>
        <div class="bl_box">children</div>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Attached"}>
              <DemoOptionBoxCheckbox
                text={"Reverse"}
                parentChange={() => this.toggleReverse()}
                checked={this.state.reverse}
              />
            </DemoOption>
            <DemoOption title={"Vertical Align"}>
              <DemoOptionBoxRadios
                patterns={verticalAligns}
                parentChange={value => this.changeVerticalAlign(value)}
                checked={this.state.verticalAlign}
              />
            </DemoOption>
            <DemoOption title={"Horizontal Align"}>
              <DemoOptionBoxRadios
                patterns={horizontalAligns}
                parentChange={value => this.changeHorizontalAlign(value)}
                checked={this.state.horizontalAlign}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewBoxOutline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outline: "bl_box__outline"
    }
    this.changeOutline = this.changeOutline.bind(this)
  }
  changeOutline(value) {
    this.setState({ outline: value })
  }
  render() {
    const outline = this.state.outline
    const contents = `<div class="bl_box bl_box__fx ${outline}
      bl_box__bg_light hp_pd_md">children</div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Outline"}>
              <DemoOptionBoxRadios
                patterns={outlines}
                parentChange={value => this.changeOutline(value)}
                checked={this.state.outline}
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

export class PreviewBoxSeparate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      separate: "bl_box__sepa",
      boxNum: 3
    }
    this.changeSeparate = this.changeSeparate.bind(this)
    this.changeBoxNum = this.changeBoxNum.bind(this)
  }
  changeSeparate(value) {
    this.setState({ separate: value })
  }
  changeBoxNum(value) {
    this.setState({ boxNum: value })
  }
  render() {
    const separate = this.state.separate
    const boxNum = this.state.boxNum
    const separateChildClass =
      separate === "bl_box__sepa_parent" ? "bl_box__sepa_child" : ""
    const boxTagBefore = `<ul class="bl_box bl_box__outline bl_box__bg_light ${separate}">`
    const boxTagAfter = `</ul>`
    const boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(
        `<li>
          <div class="bl_box bl_box__fx bl_box__middle hp_pd_l_md">
            <i aria-hidden="true" class="fas fa-archive el_icon hp_mg_r_md hp_lg"></i>
            <div class="bl_box ${separateChildClass}
            hp_pd_vert_md hp_fx0">children ${i + 1}</div>
          </div>
        </li>`
      )
    }
    const contents = (boxTagBefore + boxes.join("") + boxTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Separate"}>
              <DemoOptionBoxRadios
                patterns={separates}
                parentChange={value => this.changeSeparate(value)}
                checked={this.state.separate}
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

export class PreviewBoxLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxNum: 3,
      disabled: false,
      externalLink: false
    }
    this.changeBoxNum = this.changeBoxNum.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeBoxNum(value) {
    this.setState({ boxNum: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const boxNum = this.state.boxNum
    const disabled = this.state.disabled
    const disabledClass = disabled ? "bl_box__disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const boxTagBefore = `<ul class="bl_box bl_box__outline bl_box__bg_light bl_box__sepa_parent">`
    const boxTagAfter = `</ul>`
    const boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(
        `<li>
          <a class="bl_box bl_box__link bl_box__fx bl_box__middle hp_pd_l_md ${disabledClass}"
            href="#" ${externalLink} ${disabledTabIndex}>
            <i aria-hidden="true" class="fas fa-archive el_icon hp_mg_r_md hp_lg"></i>
            <div class="bl_box bl_box__sepa_child
            hp_pd_vert_md hp_fx0">children ${i + 1}</div>
          </a>
        </li>`
      )
    }
    const contents = (boxTagBefore + boxes.join("") + boxTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Link"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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

export class PreviewBoxAngle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxNum: 3,
      angle: "bl_box__angle_r",
      disabled: false,
      externalLink: false
    }
    this.changeBoxNum = this.changeBoxNum.bind(this)
    this.changeAngle = this.changeAngle.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeBoxNum(value) {
    this.setState({ boxNum: value })
  }
  changeAngle(value) {
    this.setState({ angle: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const boxNum = this.state.boxNum
    const angle = this.state.angle
    const disabled = this.state.disabled
    const disabledClass = disabled ? "bl_box__disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const angleRight = angle.startsWith("bl_box__angle-right")
      ? `${angle} hp_pd_r_xxl`
      : ""
    const wrapAngleLeft = angle.startsWith("is-angle-left")
      ? `${angle} hp_pd_l_xxl`
      : "hp_pd_l_md"
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const boxTagBefore = `<ul class="bl_box bl_box__outline bl_box__bg_light bl_box__sepa_parent">`
    const boxTagAfter = `</ul>`
    const boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(
        `<li>
          <a class="bl_box bl_box__link bl_box__fx bl_box__middle ${wrapAngleLeft} ${disabledClass}"
            href="#" ${externalLink} ${disabledTabIndex}>
            <i aria-hidden="true" class="fas fa-archive el_icon hp_mg_r_md hp_lg"></i>
            <div class="bl_box bl_box__sepa_child ${angleRight}
            hp_pd_vert_md hp_fx0">children ${i + 1}</div>
          </a>
        </li>`
      )
    }
    const contents = (boxTagBefore + boxes.join("") + boxTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Angle"}>
              <DemoOptionBoxRadios
                patterns={angles}
                parentChange={value => this.changeAngle(value)}
                checked={this.state.angle}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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
