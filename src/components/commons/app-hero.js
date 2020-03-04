import pkg from "../../../package.json"

export default () => {
  return (
    <nav className="ly_sect ly_sect_hero">
      <div className="ly_sect_inner hp_pd_horiz_md">
        <h1 className="el_txt el_txt__light el_txt__c el_txt__strong hp_xl">
          {pkg.description}
        </h1>
      </div>
    </nav>
  )
}
