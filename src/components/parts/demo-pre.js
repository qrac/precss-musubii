import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import hljs from "highlight.js/lib/highlight"

//hljs.registerLanguage("shell", require("highlight.js/lib/languages/shell"))
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"))
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))
hljs.registerLanguage("js", require("highlight.js/lib/languages/javascript"))
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"))

class DemoPre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false
    }
  }
  copyTimeout() {
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 1000)
  }
  render() {
    const language = (() => {
      if (this.props.language) {
        return this.props.language
      }
    })()
    const copyCode = (() => {
      if (this.props.code) {
        return this.props.code
      }
    })()
    const viewCode = (() => {
      if (language && copyCode) {
        return hljs.highlight(language, copyCode).value
      } else if (copyCode) {
        return copyCode
      }
    })()
    return (
      <div className="bl_demo_pre_wrap">
        <CopyToClipboard text={copyCode} onCopy={() => this.copyTimeout()}>
          <button className="el_demo_pre_copy_btn">
            {this.state.copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <pre className="bl_demo_pre">
          <code
            className="hljs"
            dangerouslySetInnerHTML={{ __html: viewCode }}
          ></code>
        </pre>
      </div>
    )
  }
}

export default DemoPre
