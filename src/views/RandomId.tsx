import { nanoid } from "nanoid"
import { useEffect, useLayoutEffect, useState } from "react"
import {CopyToClipboard} from "react-copy-to-clipboard"

type ISlectOptions = {
  key: string
  value: string
}

const list = [4, 5, 6, 7, 8, 9, 10].map(v => v.toString())
const selectOptions: ISlectOptions[] = list
  .map(v => ({
    key: v,
    value: `${v} 位随机数`
  }))

export default function RandomId() {
  const [options] = useState<ISlectOptions[]>(() => selectOptions)
  const [selectedOption, setSelectedOption] = useState<string>(list[2])
  const [randomValue, setRandomValue] = useState<string>('')
  const [copyStatus, setCopyStatus] = useState<boolean>(false)
  const onSelectChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    let value = ev.target.value
    console.log(value)
    setSelectedOption(value)
  }

  useEffect(() => {
    setRandomValue(nanoid(+selectedOption))
  }, [selectedOption])

  useLayoutEffect(() => {
    document.title = '随机字符串生成'
  }, [])

  return (
    <div className="pt-3">
      <h4 className="text-center mb-5">随机字符串生成</h4>
        <select
          className="form-control w-auto ml-auto mr-auto"
          onChange={onSelectChange}
          value={selectedOption}
        >
          {
            options.map(option => (
              <option
                value={option.key}
                key={option.key}
              >{option.value}</option>
            ))
          }
        </select>
        <p className="text-info mb-0 text-center my-4">
          <span className="border d-inline-block px-4 py-2">{randomValue}</span>
        </p>
        <div className="d-flex justify-content-center mt-2 align-items-center">
          <CopyToClipboard
            text={randomValue}
            onCopy={(_text, result) => {
              setCopyStatus(result)
              setTimeout(() => {
                setCopyStatus(false)
              }, 500)
            }}
          >
            <button className={["btn btn-sm", copyStatus ? 'btn-warning' : 'btn-primary'].join(' ')}>{
              copyStatus ? '复制成功' : '点击复制'
            }</button>
          </CopyToClipboard>
          <button className="btn btn-primary btn-sm ml-3"
            onClick={() => setRandomValue(nanoid(+selectedOption))}
          >重新生成</button>
        </div>
    </div>
  )
}