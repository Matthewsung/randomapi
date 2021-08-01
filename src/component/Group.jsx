const Group = ({options,index}) => {
 
  return(
    <div className={index%2?"Group Group-2":"Group"}>
      <img src={options.url} srcSet={`${options.url}@2x.png 2x, ${options.url}@3x.png 3x`} className="Ellipse" alt={options.title}/>
      <div className={index%2?
        "Sed-ut-perspiciatis Sed-ut-perspiciatis-2":
        "Sed-ut-perspiciatis"}>
          {options.title}
      </div>
      <div className={index%2?
        "Nemo-enim-ipsam-voluptatem-quia-voluptas-sit-aspernatur-aut-odit-aut-fugit-sed-quia-consequuntur-ma Nemo-enim-ipsam-voluptatem-quia-voluptas-sit-aspernatur-aut-odit-aut-fugit-sed-quia-consequuntur-ma-2":
        "Nemo-enim-ipsam-voluptatem-quia-voluptas-sit-aspernatur-aut-odit-aut-fugit-sed-quia-consequuntur-ma"}>
          {options.detail}
      </div>
      <div className={index%2?
        "Learn-more Learn-more-2":
        "Learn-more"}>
          Learn more
      </div>
    </div>
  )
}
export default Group