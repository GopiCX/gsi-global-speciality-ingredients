import { Modal } from 'antd'
import React, { PureComponent } from 'react'

class ModalBox extends PureComponent {
  render() {
    const { visible, title, onOk, onCancel, okText, cancelText, footer, destroyOnClose, width, wrapClassName } = this.props

    return (
      <div>
        <Modal
          visible={visible}
          title={title}
          onOk={onOk}
          onCancel={onCancel}
          footer={footer}
          destroyOnClose={destroyOnClose}
          width={width}
          wrapClassName={wrapClassName}
          maskClosable={false}
          okText={okText}
          cancelText={cancelText}>
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

export default ModalBox
