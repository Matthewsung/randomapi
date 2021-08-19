import { useEffect, useState } from 'react'
import Group from './Group'
import styles from './Section1.module.css'
const options = [
  {
    id:1,
    url:"img/kang1.png",
    title:"강하늘s",
    detail:"2020년 제56회 백상예술대상 TV부문 남자 최우수연기상 (동백꽃 필 무렵)",
  },
  {
    id:2,
    url:"img/han.png",
    title:"한효주",
    detail:"2016년 MBC 연기대상 미니시리즈부문 여자 최우수연기상",
  },
  {
    id:3,
    url:"img/gwan.png",
    title:"권상우",
    detail:"2011년 제6회 아시아모델상시상식 아시아스타상",
  },
]
const Section1 = () => {
  //options 불러와서 랜덤으로 저장
  const [option, setOption] = useState([])
  useEffect(()=>{
      setOption(options.sort(()=>Math.random() -0.5))
  },[])
  return(
    <div className={styles.Section_1}>
      {option.map((val,i) => <Group key = {val.id} options ={val} index={i}/> )}
    </div>
  )
}
export default Section1