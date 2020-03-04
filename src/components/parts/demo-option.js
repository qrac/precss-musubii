export default ({ children, title }) => {
  return (
    <div className="bl_demo_option">
      {(() => {
        if (title) {
          return <div className="bl_demo_option_ttl">{title}</div>
        }
      })()}
      {children}
    </div>
  )
}
