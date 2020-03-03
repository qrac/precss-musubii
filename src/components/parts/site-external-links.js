import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import pkg from "../../../package.json"

export default () => {
  return (
    <a
      className="bl_box bl_box__fx"
      href={pkg.repository}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} className="el_icon hp_lg hp_desk_xl" />
    </a>
  )
}
