import { useEffect, useState } from 'react'
import axios from 'axios'
// const LoadImg = axios.get("https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM")
const Section_2 = () => {
  const [getImg, setGetImg] = useState({url:'',alt:''})
  // useEffect(() => {
  //   LoadImg.then((res)=>{
  //       setGetImg(
  //         {
  //           url:res.data.urls.full,
  //           alt:res.data.alt_description
  //         }
  //       )   
  //     // window.localStorage.setItem('url',res.data.urls.full)
  //     // window.localStorage.setItem('alt',res.data.alt_description)
  //   }).catch(Error=> console.log(Error))

  // }, [])
  return (
    <>
     <div className="Section-2">
      {/* <img src={getImg.url} className="Rectangle" alt={getImg.alt} /> */}
      <img src="img/rectangle.png" srcSet="img/rectangle@2x.png 2x,img/rectangle@3x.png 3x" className="Rectangle"/>
      <div className="Sed-ut-perspiciatis-unde-omnis">Sed ut perspiciatis unde omnis</div>
      <div className="There-are-many-variations-of-passages-of-Lorem-Ipsum-available-but-the-majority-have-suffered-alter">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
      </div>
      <div className="Rectangle-2"></div>
      <div className="Sed-ut-perspiciatis-unde-omnis-iste-natus-error-sit-voluptatem-accusantium-doloremque-laudantium-to">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
      </div>
     </div>
    </>
  )
}
export default Section_2