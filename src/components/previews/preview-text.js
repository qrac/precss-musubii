import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, role: "", text: "基本です" },
  { id: 1, role: "el_txt__primary", text: "重要かも" },
  { id: 2, role: "el_txt__info", text: "情報あり" },
  { id: 3, role: "el_txt__success", text: "成功した" },
  { id: 4, role: "el_txt__warning", text: "注意する" },
  { id: 5, role: "el_txt__danger", text: "禁止する" }
]

const weights = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Normal", value: "el_txt__normal" },
  { id: 2, text: "Strong", value: "el_txt__strong" },
  { id: 3, text: "W100", value: "el_txt__weight100" },
  { id: 4, text: "W200", value: "el_txt__weight200" },
  { id: 5, text: "W300", value: "el_txt__weight300" },
  { id: 6, text: "W400", value: "el_txt__weight400" },
  { id: 7, text: "W500", value: "el_txt__weight500" },
  { id: 8, text: "W600", value: "el_txt__weight600" },
  { id: 9, text: "W700", value: "el_txt__weight700" },
  { id: 10, text: "W800", value: "el_txt__weight800" },
  { id: 11, text: "W900", value: "el_txt__weight900" }
]

const lineHeights = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "el_txt__lineHeight_xxs" },
  { id: 6, text: "XS", value: "el_txt__lineHeight_xs" },
  { id: 5, text: "Small", value: "el_txt__lineHeight_sm" },
  { id: 4, text: "Middle", value: "el_txt__lineHeight_md" },
  { id: 3, text: "Large", value: "el_txt__lineHeight_lg" },
  { id: 2, text: "XL", value: "el_txt__lineHeight_xl" },
  { id: 1, text: "XXL", value: "el_txt__lineHeight_xxl" }
]

const transforms = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Italic", value: "el_txt__italic" },
  { id: 2, text: "Delete", value: "el_txt__delete" },
  { id: 3, text: "Capitalize", value: "el_txt__capi" },
  { id: 4, text: "Lowercase", value: "el_txt__lower" },
  { id: 5, text: "Uppercase", value: "el_txt__upper" }
]

const aligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "left", value: "el_txt__l" },
  { id: 2, text: "Center", value: "el_txt__c" },
  { id: 3, text: "Right", value: "el_txt__r" }
]

const verticalAligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "baseline", value: "el_txt__baseline" },
  { id: 2, text: "top", value: "el_txt__t" },
  { id: 3, text: "middle", value: "el_txt__middle" },
  { id: 4, text: "bottom", value: "el_txt__b" }
]

const wraps = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "No Wrap", value: "el_txt__nowrap" },
  { id: 2, text: "Break", value: "el_txt__break" }
]

const longTextJa =
  "山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"

const longTextEn =
  "While climbing the mountain path, I thought like this. If you work on Ji, the corner will stand. It will be washed away if you let your heart stick. It's cramped if you can do it. Anyway, the world of people is hard to live. If you have difficulty living, you will want to move to a cheap place. When you realize that it is difficult to live wherever you go, poetry is born and you can paint."

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewTextDark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const texts = []
    for (let i = 0; i < 10; i++) {
      const suffix = i === 0 ? "" : i
      texts.push(`<span class="el_txt el_txt__dark${suffix}">ダーク</span>`)
    }
    const contents = texts
      .join("")
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

export class PreviewTextLight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const texts = []
    for (let i = 0; i < 10; i++) {
      const suffix = i === 0 ? "" : i
      texts.push(`<span class="el_txt el_txt__light${suffix}">ライト</span>`)
    }
    const contents = texts
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_box bl_demo_box__paint">
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

export class PreviewTextRole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = items
      .map(item => `<span class="el_txt ${item.role}">${item.text}</span>`)
      .join("")
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

export class PreviewTextWeight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: ""
    }
    this.changeWeight = this.changeWeight.bind(this)
  }
  changeWeight(value) {
    this.setState({ weight: value })
  }
  render() {
    const weight = this.state.weight
    const contents = items
      .map(
        item =>
          `<span class="el_txt ${item.role} ${weight}">${item.text}</span>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Weight"}>
              <DemoOptionBoxRadios
                patterns={weights}
                parentChange={value => this.changeWeight(value)}
                checked={this.state.weight}
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

export class PreviewTextLineHeight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lineHeight: ""
    }
    this.changeLineHeight = this.changeLineHeight.bind(this)
  }
  changeLineHeight(value) {
    this.setState({ lineHeight: value })
  }
  render() {
    const lineHeight = this.state.lineHeight
    const contents = `<p class="el_txt ${lineHeight}">${longTextJa}</p>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Line Height"}>
              <DemoOptionBoxRadios
                patterns={lineHeights}
                parentChange={value => this.changeLineHeight(value)}
                checked={this.state.lineHeight}
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

export class PreviewTextTransform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: ""
    }
    this.changeTransform = this.changeTransform.bind(this)
  }
  changeTransform(value) {
    this.setState({ transform: value })
  }
  render() {
    const transform = this.state.transform
    const tag = (() => {
      switch (transform) {
        case "el_txt__italic":
          return "em"
        case "el_txt__delete":
          return "del"
        default:
          return "span"
      }
    })()
    const contents = `<${tag} class="el_txt ${transform}">Test text</${tag}>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Transform"}>
              <DemoOptionBoxRadios
                patterns={transforms}
                parentChange={value => this.changeTransform(value)}
                checked={this.state.transform}
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

export class PreviewTextAlign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      align: ""
    }
    this.changeAlign = this.changeAlign.bind(this)
  }
  changeAlign(value) {
    this.setState({ align: value })
  }
  render() {
    const align = this.state.align
    const contents = `<p class="el_txt ${align}">${longTextJa}</p>`
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
                parentChange={value => this.changeAlign(value)}
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

export class PreviewTextAlignJustify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      justify: true
    }
    this.toggleJustify = this.toggleJustify.bind(this)
  }
  toggleJustify() {
    this.setState({ justify: !this.state.justify })
  }
  render() {
    const justify = this.state.justify ? "el_txt__just" : ""
    const contents = `<p class="el_txt ${justify} hp_sm">${longTextJa}</p>
      <p class="el_txt ${justify} hp_sm">${longTextEn}</p>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Justify"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleJustify()}
                checked={this.state.justify}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="box is-space"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewTextVerticalAlign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      verticalAlign: ""
    }
    this.changeVerticalAlign = this.changeVerticalAlign.bind(this)
  }
  changeVerticalAlign(value) {
    this.setState({ verticalAlign: value })
  }
  render() {
    const verticalAlign = this.state.verticalAlign
    const contents = `<span class="el_txt ${verticalAlign}">小さいテキスト</span>
      <span class="el_txt hp_xl">大きいテキスト</span>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Vertical Align"}>
              <DemoOptionBoxRadios
                patterns={verticalAligns}
                parentChange={value => this.changeVerticalAlign(value)}
                checked={this.state.verticalAlign}
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

export class PreviewTextWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wrap: ""
    }
    this.changeWrap = this.changeWrap.bind(this)
  }
  changeWrap(value) {
    this.setState({ wrap: value })
  }
  render() {
    const wrap = this.state.wrap
    const contents = `<p class="el_txt ${wrap} hp_lg">${longTextEn}</p>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Wrap"}>
              <DemoOptionBoxRadios
                patterns={wraps}
                parentChange={value => this.changeWrap(value)}
                checked={this.state.wrap}
              />
            </DemoOption>
          </div>
        </div>
        <div className="bl_demo_box bl_demo_box__line">
          <div
            className="bl_box hp_ov_hid"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewTextLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reverse: false,
      disabled: false,
      externalLink: false
    }
    this.toggleReverse = this.toggleReverse.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  toggleReverse() {
    this.setState({ reverse: !this.state.reverse })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const reverse = this.state.reverse
    const disabled = this.state.disabled
    const linkClass = reverse ? "el_txt__link_rev" : "el_txt__link"
    const disabledClass = disabled ? "el_txt__disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const contents = items
      .map(
        item =>
          `<a class="el_txt ${item.role} ${linkClass} ${disabledClass}"
          href="#" ${externalLink} ${disabledTabIndex}>${item.text}</a>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="bl_demo_box bl_demo_box__preview">
        <div className="bl_demo_options_wrap">
          <div className="bl_demo_options">
            <DemoOption title={"Link"}>
              <DemoOptionBoxCheckbox
                text={"Reverse"}
                parentChange={() => this.toggleReverse()}
                checked={this.state.reverse}
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

export class PreviewTextBlockquote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<blockquote class="el_bq"
      >引用の「blockquote」を使う場合。border-left と background-color を用いた装飾。</blockquote>`
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

export class PreviewTextCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<p class="el_txt">テキストの途中に<code class="el_code">code</code>を表示させる。</p>`
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

export class PreviewTextPre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<pre class="el_pre"><code class="el_code">.my-css { color: red; }</code></pre>`
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
