import React from "react"

export default function ModalErrorContents(props) {
  return (
    <div className="l-modal__contents">
      <p className="c-modal__message">
        送信エラーが発生しました。通信状態を確認の上、改めて送信をお願いします。
      </p>
      <div className="p-wrapper-buttons">
        <button type="button" onClick={props.progressFunc} className="c-btn">
          完了
        </button>
      </div>
    </div>
  )
}
