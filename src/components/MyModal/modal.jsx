import React from 'react'
import cls from './modal.module.css'

const Modal = ({ visible, setVisible, children }) => {
  const rootClass = [cls.modal]

  if (visible) {
    rootClass.push(cls.active)
  }

  return (
    <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
      <div className={cls.modalContext} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal