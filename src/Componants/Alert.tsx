import { ReactNode } from "react"


interface Props{
    children:ReactNode,
    onColse:()=> void
}

function Alert({children, onColse}:Props) {
  return (
    <>
    <div className="alert alert-primary">
        {children}
    <button type='button'onClick={onColse} className='btn-close'></button>
    </div>
    </>
  )
}

export default Alert