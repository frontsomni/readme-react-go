import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useLocation } from 'react-router-dom';

export default function CodeView() {
  const [source, setSource] = useState('')
  const [theme, setTheme] = useState(themes['okaidia'])
  const [themeValue, setThemeValue] = useState('okaidia')
  const [copyStatus, setCopyStatus] = useState(false)
  const {search} = useLocation()
  const souceOrigin = (new URLSearchParams(search)).get('origin')

  useEffect(() => {
    async function getSourceCode() {
      let res =  await fetch(`https://cos.ap-beijing.myqcloud.com/public-data-1254963092/readme-source/${souceOrigin}.js`)
      let data = await res.text()
      setSource(data)
    }
    getSourceCode()
  }, [])
  return (
    <div className="d-flex flex-column h100p overflow-hidden">
      <div className="d-flex pb-2 align-items-center justify-content-between">
        <h4>源码演示</h4>
        <div className="d-flex align-items-center">
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">当前主题：</span>
            </div>
            <select
              className="form-control w-auto"
              defaultValue={themeValue}
              onChange={e => {
                let themeValue = e.target.value
                setThemeValue(themeValue)
                setTheme((themes as any)[themeValue])
              }}
            >
              {
                Object.keys(themes).map((item, index) => (
                  <option
                    value={item}
                    key={index}>
                    {item}
                  </option>
                ))
              }
            </select>
          </div>
          <CopyToClipboard text={source}
            onCopy={() => {
              setCopyStatus(true)
              setTimeout(() => {
                setCopyStatus(false)
              }, 800)
            }}
          >
            <button
              className={['btn ml-5 nowrap', copyStatus ? 'btn-success' : 'btn-primary'].join(' ')}
              disabled={copyStatus}
            >
              {copyStatus ? '复制成功' : '一键复制'}
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="flex1 ovy-auto mb-5">
        <SyntaxHighlighter language="javascript" style={theme}>
          {source}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}