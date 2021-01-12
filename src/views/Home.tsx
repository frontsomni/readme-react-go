import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Home() {
  const [list] = useState([{
    text: 'React userReducer 深入认知 »',
    link: '/ReducerDemo'
  }])
  return (
    <>
      <h4 className="mb-3 text-center">教程示例</h4>
      <ul className="list-group">
        <li className="list-group-item">
          {
            list.map(item => <NavLink key={item.text} to={item.link}>{item.text}</NavLink>)
          }
        </li>
      </ul>
    </>
  )
}