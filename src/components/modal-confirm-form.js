import React from "react"

const OutputMultiColumnsTxt = ({ arg }) => {
  const splitChar = /\r?\n/g
  const words = String(arg).split(splitChar)
  let argArray = []
  for (let i = 0; i < words.length; i++) {
    argArray.push(words[i])
  }

  return (
    <>
      {argArray.map(arg => (
        <span>
          {arg}
          <br />
        </span>
      ))}
    </>
  )
}

const FormContentList = ({ props, jpNameList }) => {
  return (
    <dl className="p-formContentList">
      {Object.keys(props).map(key => (
        <div key={key} className="c-formContentList__item">
          <dt>{jpNameList[key]}</dt>
          <dd>
            <OutputMultiColumnsTxt arg={props[key]} />
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default function ModalConfirmContents(props) {
  return (
    <div className="l-modal__contents">
      <p className="c-modal__message">以下の内容でお問い合わせを送信します。</p>
      <FormContentList props={props.formObject} jpNameList={props.jpNameList} />
      <div className="p-wrapper-buttons">
        <button type="button" onClick={props.cancelFunc} className="c-btn">
          キャンセル
        </button>
        <button type="submit" onClick={props.progressFunc} className="c-btn">
          送信
        </button>
      </div>
    </div>
  )
}
