import { useState } from "react"

type TModalProps = {
  show: boolean
  content: string
  onCancel: (event: React.MouseEvent) => void
}

function Modal({show = false, onCancel, content}: TModalProps) {
  return (
    <div className={["modal", show ? 'd-block' : ''].join(' ')} tabIndex={-1} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
              onClick={onCancel}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{content}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function useModal(){
  const [show, toggleShow] = useState(false)
  const [content, setContent] = useState('dsd')
  const onCancel = (fn?: any) => {
    toggleShow(!show)
    console.log(fn)
    if (typeof fn === 'function') {
      fn()
    }
  }
  const onShow = () => {
    toggleShow(!show)
  }

  return [
    <Modal
      content={content}
      show={show}
      onCancel={onCancel}
    />,
    {
      onCancel,
      onShow,
      setContent
    }
  ] as (JSX.Element & {
    [key: string]: (event: React.MouseEvent) => void
  } &  {
    [key: string]: React.Dispatch<React.SetStateAction<string>>
  })[]
}