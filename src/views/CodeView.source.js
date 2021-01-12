
export default `
import { useReducer } from "react"
import {nanoid} from "nanoid"

type TListItem = {
  keyId: string
  text: string
}

enum TActionType {
  add,
  remove,
  reset,
  search
}

type TAction = {
  type: TActionType
  keyId?: string
}

const initList: TListItem[] = [] // reduer 初始化数据，空数组

function initListFunc(initData: TListItem[]) { // reducer 数据初始化函数，加工初始化数据，将初始化数据作为默认参数
  const textArr = [
    '关于 react/fre',
    'egg.js 中grpc的正确使用方式是什么？',
    '深入理解函数调用原理'
  ]
  initData = textArr.map(item => ({
    text: item,
    keyId: nanoid(5)
  }))
  return initData
}

// reducer 函数返回开发所需目标数据
function reducer(data: TListItem[], action: TAction) {
  let copyData = [...data] // 保证返回的是 data 副本（有可能是浅拷贝）
  switch (action.type) { // 更新数据方式（类型）：action.type
    case TActionType.add: // 通过 add 方式更新数据
      copyData.unshift({
        text: nanoid(),
        keyId: nanoid(5)
      })
      break
    case TActionType.remove:
      copyData = copyData.filter(item => item.keyId !== action.keyId)
      break
    case TActionType.search:
      if (action.keyId) {
        copyData = copyData.filter(item => item.keyId === action.keyId)
      } else {
        copyData = initListFunc(initList) // 调用 reducer 初始化函数进行数据重置
      }
      break
    case TActionType.reset:
      copyData = initListFunc(initList) // 调用 reducer 初始化函数进行数据重置
      break
    default:
      throw new Error(\`\${action.type} 错误\`)
  }
  return copyData
}


export default function ReducerDemo() {
  // list 是初始化数据
  // dispatchList 类型为函数，更新数据触发器
  const [list, dispatchList] = useReducer(reducer, initList, initListFunc)
  return (
    <div className="text-center">
      <input type="text"
        className="form-control"
        placeholder="输入 id 搜索"
        onChange={(ev) => dispatchList({ // dispatchList 触发 search 类型更新列表
          type: TActionType.search,
          keyId: ev.target.value.trim()
        })}
      />
      <ul className="list-group my-4">
        {
          list.map(item => (
            <li
              className="list-group-item d-flex align-items-center justify-content-between"
              key={item.keyId}
            >
              <p>
                <span className="badge badge-info h5 mr-3">{item.keyId}</span>
                {item.text}
              </p>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatchList({
                    type: TActionType.add
                  })}
                >新增 item</button>
                <button
                  className="btn btn-primary ml-3"
                  onClick={() => dispatchList({
                    type: TActionType.remove, // dispatchList 触发 remove 类型更新列表
                    keyId: item.keyId.trim()
                  })}
                >移除 item</button>
              </div>
            </li>
          ))
        }
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => dispatchList({
          type: TActionType.reset
        })}
      >重置 item</button>
    </div>
  )
}
`