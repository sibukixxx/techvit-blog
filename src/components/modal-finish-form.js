import React from "react"

export default function ModalFinishContents(props) {
  return (
    <div className="l-modal__contents">
      <p className="c-modal__message">お問い合わせを送信しました。</p>
      <div className="p-wrapper-buttons">
        <button type="button" onClick={props.progressFunc} className="c-btn">
          完了
        </button>
      </div>
    </div>
  )
}
