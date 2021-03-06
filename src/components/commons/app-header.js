import SiteHome from "~/components/parts/site-home"
import SiteStatuses from "~/components/parts/site-statuses"
import SiteExternalLinks from "~/components/parts/site-external-links"

export default () => {
  return (
    <header className="ly_sect ly_sect_header">
      <div className="ly_sect_inner ly_sect_inner__wide_max_w_desk hp_pd_horiz_md">
        <div className="ly_grid ly_grid__middle ly_grid__between">
          <div className="ly_grid__col hp_mob_tab_MG_t_2px hp_desk_MG_t_6px">
            <div className="bl_box bl_box__fx bl_box__b">
              <div className="bl_box hp_mg_r_sm">
                <SiteHome />
              </div>
              <div className="bl_box bl_box__fx">
                <SiteStatuses />
              </div>
            </div>
          </div>
          <div className="ly_grid__col">
            <SiteExternalLinks />
          </div>
        </div>
      </div>
    </header>
  )
}
