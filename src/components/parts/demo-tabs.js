import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"

export default ({ patterns, checked, parentChange }) => {
  return (
    <div className="bl_demo_tabs_wrap">
      <div className="bl_demo_tabs">
        {patterns.map(patternEl => (
          <button
            className={
              checked === patternEl.value
                ? "bl_demo_tab is_active"
                : "bl_demo_tab"
            }
            type="button"
            key={patternEl.id}
            onClick={() => parentChange(patternEl.value)}
          >
            {patternEl.icon === "html5" ? (
              <FontAwesomeIcon
                icon={faHtml5}
                className="el_icon el_icon__html5"
              />
            ) : (
              ""
            )}
            <span className="el_txt">{patternEl.text}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
