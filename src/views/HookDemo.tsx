import { useModal } from "../hooks/useModal"

export default function HookDemo() {
  const [Modal, {onShow, setContent}] = useModal()
  return (
    <>
      {Modal}
      <h3> Hook Modal </h3>
      <button className="btn btn-primary" onClick={onShow}>打开 Moal</button>
      <button className="btn btn-primary" onClick={() => setContent('3233ss')}>修改内容</button>
    </>
  )
}