import { useState } from "react"

export default function QrFollow() {
  const [show, setShow] = useState(false)
  const onDownload = () => {
    setShow(prev => !prev)
  }
  return (
    <div className="text-center pt-3">
      <button
        onClick={onDownload}
        className="btn btn-primary"
      >点击下载</button>
      {
        show
        ? (
          <div className="d-flex justify-content-center">
            <div className="card mt-3">
              <div className="card-body">
                <p className="card-text">扫二维码，回复 <span className="text-info">goland</span> 获取下载链接</p>
                <img src="https://cos.ap-beijing.myqcloud.com/readme-1254963092/logo/wechat.jpeg" alt=""/>
              </div>
            </div>
          </div>
        )
        : null
      }

    </div>
  )
}