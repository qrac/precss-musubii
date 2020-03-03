import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import pkg from "../../../package.json"
import pjt from "../../../project.json"

export default () => {
  const contents = [
    {
      title: "Licence",
      text: pkg.license
    },
    {
      title: "Thanks!!",
      text: "PRECSS",
      url: "https://precss.io/ja/"
    },
    {
      title: "Based",
      text: "MUSUBii",
      url: "https://musubii.qranoko.jp/"
    },
    {
      title: "Author",
      text: "Qrac",
      url: "https://twitter.com/" + pjt.site.twitter_id
    }
  ]
  return (
    <div className="ly_grid ly_grid__c ly_grid__gap_sm">
      {contents.map((content, i) => (
        <div className="ly_grid_col" key={i}>
          <p className="el_txt hp_sm">
            {content.title ? (
              <span className="el_txt el_txt__fontSans_en">
                {content.title}:{" "}
              </span>
            ) : (
              ""
            )}
            {content.url ? (
              <a
                className="el_txt el_txt__link_rev"
                href={content.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="el_txt el_txt__fontSans_en">
                  {content.text}
                </span>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="el_icon el_icon__externalLink_fix"
                />
              </a>
            ) : (
              <span className="el_txt el_txt__fontSans_en">{content.text}</span>
            )}
          </p>
        </div>
      ))}
    </div>
  )
}
