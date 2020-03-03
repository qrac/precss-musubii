import pkg from "../../../package.json"
import pjt from "../../../project.json"

export default () => {
  const dateNowYear = new Date().getFullYear()
  return (
    <p className="el_txt el_txt__c hp_sm">
      <span className="el_txt el_txt__fontSans_en">©</span>&nbsp;
      <a
        className="el_txt el_txt__link_rev"
        href={pkg.organization.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="el_txt el_txt__fontSans_en">
          {pkg.organization.name}
        </span>
      </a>
      &nbsp;
      <span className="el_txt el_txt__fontSans_en">
        {pjt.site.start_year ? pjt.site.start_year : ""}
        {pjt.site.start_year != dateNowYear ? " - " : ""}
        {pjt.site.start_year != dateNowYear ? dateNowYear : ""}
      </span>
    </p>
  )
}
