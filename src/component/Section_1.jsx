import { useEffect, useState } from 'react'
import Group from './Group'
const options = [
  {
    id:1,
    url:"img/Ellipse.png",
    title:"Sed ut perspiciatis",
    detail:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    id:2,
    url:"img/Ellipse_2.png",
    title:"Lorem ipsum dolor",
    detail:"Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    id:3,
    url:"img/Ellipse_3.png",
    title:"Nemo enim ipsam",
    detail:"Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
  },

]
const Section_1 = () => {
  //options 불러와서 랜덤으로 저장
  const [option, setOption] = useState([])
  useEffect(()=>{
      setOption(options.sort(()=>Math.random() -0.5))
  },[])
  return(
    <div className="Section-1">
      {option.map((val,i) => <Group key = {val.id} options ={val} index={i}/> )}
    </div>
  )
}
export default Section_1