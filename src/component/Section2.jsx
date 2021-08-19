import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Section2.module.css'
const Section2 = () => {
  const [getImg, setGetImg] = useState({url:'',alt:''})
  const accessKey = process.env.REACT_APP_accessKey
  const secretKey = process.env.REACT_APP_secretKey

  const chkImg = (newUrl,newAlt) => {
    if(localStorage.getItem("url")){
      setGetImg({url:localStorage.getItem("url"), alt:localStorage.getItem("alt") })
    }
    else{
      setGetImg(
        {
          url:newUrl,
          alt:newAlt,
          
        }
      )   
      window.localStorage.setItem('url',JSON.stringify(newUrl))
      window.localStorage.setItem('alt',JSON.stringify(newAlt))
    }
  }
  useEffect(() => {
    const LoadImg = axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&client_secret=${secretKey}`)
    LoadImg.then((res)=>{
      chkImg(res.data.urls.full,res.data.alt_description)
    }).catch(Error=> console.log(Error))
  }, [])
  return (
    <div className={styles.Section_2}>
      <img src = {getImg.url} className={styles.backImg} alt={getImg.alt} />
      <div className={styles.backImg_box}>
        <div className={styles.backImg_title}>Sed ut perspiciatis unde omnis</div>
        <div className={styles.backImg_desc}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </div>
        <div className={styles.backImg_line}></div>
        <div className={styles.backImg_descBottom}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates distinctio natus inventore maxime sunt accusantium eveniet consequuntur eos et soluta ullam blanditiis a earum odit, tempora, nisi, eaque sit sequi.
        </div>
      </div>
    </div>
  )
}
export default Section2