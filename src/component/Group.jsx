const Group = ({options,index}) => {
 
  return(
    <div className={index%2?"Group Group_2":"Group"}>
      <img src={options.url} srcSet={`${options.url}@2x.png 2x,${options.url}@3x.png 3x`} className="profile" alt={options.title}/>
      <div className={index % 2 ? "sm_title sm_title_2" : "sm_title"}>
          {options.title}
      </div>
      <div className={index % 2 ? "g_desc g_desc_2" : "g_desc"}>
          {options.detail}
      </div>
      <div className={index % 2 ? "Learn_more Learn_more-2" : "Learn_more"}>
          Learn more
      </div>
    </div>
  )
}
export default Group