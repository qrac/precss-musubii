import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const tags = [
  { id: 0, text: "Div", value: "div" },
  { id: 1, text: "Anchor", value: "a" },
]

const radiusPatterns = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "bl_card__rad_xxs" },
  { id: 6, text: "XS", value: "bl_card__rad_xs" },
  { id: 5, text: "Small", value: "bl_card__rad_sm" },
  { id: 4, text: "Medium", value: "bl_card__rad_md" },
  { id: 3, text: "Large", value: "bl_card__rad_lg" },
  { id: 2, text: "XL", value: "bl_card__rad_xl" },
  { id: 1, text: "XXL", value: "bl_card__rad_xxl" },
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2,
}

export class PreviewCardBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgLight: true,
      outline: false,
      floating: true,
    }
    this.toggleBgLight = this.toggleBgLight.bind(this)
    this.toggleOutline = this.toggleOutline.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
  }
  toggleBgLight() {
    this.setState({ bgLight: !this.state.bgLight })
  }
  toggleOutline() {
    this.setState({ outline: !this.state.outline })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  render() {
    const bgLight = this.state.bgLight ? "bl_card__bg_light" : ""
    const outline = this.state.outline ? "bl_card__outline" : ""
    const floating = this.state.floating ? "bl_card__flo" : ""
    const contents = `<div class="bl_card ${bgLight} ${outline} ${floating}">
        <div class="bl_box hp_pd_md">children</div>
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
                text={"Background Light"}
                parentChange={() => this.toggleBgLight()}
                checked={this.state.bgLight}
              />
              <DemoOptionBoxCheckbox
                text={"Outline"}
                parentChange={() => this.toggleOutline()}
                checked={this.state.outline}
              />
              <DemoOptionBoxCheckbox
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
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

export class PreviewCardRadius extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radiusPattern: "bl_card__rad_md",
    }
    this.changeRadiusPattern = this.changeRadiusPattern.bind(this)
  }
  changeRadiusPattern(value) {
    this.setState({ radiusPattern: value })
  }
  render() {
    const radiusPattern = this.state.radiusPattern
    const contents = `<div class="bl_card ${radiusPattern} bl_card__bg_light bl_card__flo">
        <div class="bl_box hp_pd_md">children</div>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Radius"}>
              <DemoOptionBoxRadios
                patterns={radiusPatterns}
                name="radio-card-radius"
                parentChange={(value) => this.changeRadiusPattern(value)}
                checked={this.state.radiusPattern}
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

export class PreviewCardLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      externalLink: false,
    }
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const disabled = this.state.disabled
    const disabledClass = disabled ? "bl_card__disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const contents = `<a class="bl_card bl_card__link bl_card__bg_light bl_card__flo bl_card__rad_md
        ${disabledClass}" href="#" ${disabledTabIndex} ${externalLink}>
          <div class="bl_box hp_pd_md">children</div></a>`
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

export class PreviewCardZoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      externalLink: false,
    }
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const disabled = this.state.disabled
    const disabledClass = disabled ? "bl_card__disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const contents = `<a class="bl_card bl_card__zoom bl_card__bg_light bl_card__flo bl_card__rad_md
        ${disabledClass}" href="#" ${disabledTabIndex} ${externalLink}>
          <div class="bl_box hp_pd_md">children</div></a>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Zoom"}>
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
