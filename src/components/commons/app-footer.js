import SiteOther from "~/components/parts/site-other"
import SiteCopylight from "~/components/parts/site-copylight"

export default () => {
  return (
    <footer className="ly_sect ly_sect_footer">
      <div className="ly_sect_inner hp_pd_horiz_md">
        <div className="bl_box hp_space_md">
          <div className="bl_box">
            <SiteOther />
          </div>
          <div className="bl_box">
            <SiteCopylight />
          </div>
        </div>
      </div>
    </footer>
  )
}
