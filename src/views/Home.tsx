import { useState } from "react"
import { NavLink } from "react-router-dom"

type TList = {
  text: string
  link: string
}

export default function Home() {
  const [list] = useState<TList[]>([{
    text: 'React userReducer 深入认知 »',
    link: '/ReducerDemo'
  }, {
    text: '随机字符串生成 »',
    link: '/randomid'
  }])
  return (
    <>
      <h4 className="mb-3 text-center">教程示例</h4>
      <ul className="list-group">
        {
          list.map(item =>
            <li
              className="list-group-item"
              key={item.text}
            >
              <NavLink to={item.link}>{item.text}</NavLink>
            </li>
          )
        }
      </ul>
    </>
  )
}