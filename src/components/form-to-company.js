import React, { useState } from "react"
import { useForm } from "react-hook-form"

//import ModalConfirm from '../components/modal-confirm-formcontent'
import ModalConfirm from "react-modal"
import ModalFinish from "react-modal"
import ModalError from "react-modal"

import ModalConfirmContents from "./modal-confirm-form"
import ModalFinishContents from "./modal-finish-form"
import ModalErrorContents from "./modal-error-form"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ModalConfirm.setAppElement("#___gatsby")
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ModalFinish.setAppElement("#___gatsby")
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ModalError.setAppElement("#___gatsby")

export default function App() {
  const { register, handleSubmit, errors, reset } = useForm()
  const [state, setState] = React.useState({})

  // 初期化
  const [formObj, setFormObj] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const confirmContact = (data, e) => {
    e.preventDefault()
    //入力確認モーダル内にフォームの内容をセットする
    setFormObj(data)
    openModalConfirm()
  }

  const onSubmit = (data, e) => {
    closeModalConfirm()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...state,
      }),
    })
      .then(() => {
        reset()
        openModalFinish()
      })
      .catch(() => {
        openModalError()
      })
  }

  //confirm用モーダル
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = React.useState(false)
  function openModalConfirm() {
    setModalConfirmIsOpen(true)
  }
  function closeModalConfirm() {
    setModalConfirmIsOpen(false)
  }

  //finish用モーダル
  const [modalFinishIsOpen, setModalFinishIsOpen] = React.useState(false)
  function openModalFinish() {
    setModalFinishIsOpen(true)
  }
  function closeModalFinish() {
    setModalFinishIsOpen(false)
  }

  //error用モーダル
  const [modalErrorIsOpen, setModalErrorIsOpen] = React.useState(false)
  function openModalError() {
    setModalErrorIsOpen(true)
  }
  function closeModalError() {
    setModalErrorIsOpen(false)
  }

  const jpNameList = {
    companyname: "御社名",
    name: "お名前",
    email: "メールアドレス",
    phonenumber: "電話番号",
    askdetail: "お問い合わせ内容",
  }

  return (
    <form
      className="l-form__to-company"
      name="contact"
      method="post"
      data-netlify="true"
      onSubmit={handleSubmit(confirmContact)}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="p-mis-form-group">
        <label className="mis-form-label u-require" htmlFor="companyname">
          御社名
        </label>
        <div className="c-mis-form-control">
          <input
            id="companyname"
            name="companyname"
            type="text"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          {errors.companyname && (
            <span className="c-msg-validate">入力必須項目です</span>
          )}
        </div>
      </div>
      <div className="p-mis-form-group">
        <label className="mis-form-label u-require" htmlFor="name">
          お名前
        </label>
        <div className="c-mis-form-control">
          <input
            id="name"
            name="name"
            type="text"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="c-msg-validate">入力必須項目です</span>
          )}
        </div>
      </div>
      <div className="p-mis-form-group">
        <label className="mis-form-label u-require" htmlFor="email">
          メールアドレス
        </label>
        <div className="c-mis-form-control">
          <input
            id="email"
            name="email"
            type="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "メールアドレスの形式が不正です",
              },
            })}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="c-msg-validate">
              {!errors.email.message
                ? "入力必須項目です"
                : errors.email.message}
            </span>
          )}
        </div>
      </div>
      <div className="p-mis-form-group">
        <label className="mis-form-label" htmlFor="phonenumber">
          電話番号
        </label>
        <div className="c-mis-form-control">
          <input
            id="phonenumber"
            name="phonenumber"
            type="text"
            ref={register}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="p-mis-form-group">
        <label className="mis-form-label u-require" htmlFor="askdetail">
          お問い合わせ内容
        </label>
        <div className="c-mis-form-control">
          <textarea
            id="askdetail"
            name="askdetail"
            defaultValue={""}
            ref={register({ required: true })}
            onChange={handleChange}
          />
          {errors.askdetail && (
            <span className="c-msg-validate">入力必須項目です</span>
          )}
        </div>
      </div>
      <div className="p-wrapper-buttons">
        <button type="submit" className="c-btn">
          送信
        </button>
      </div>
      <ModalConfirm
        overlayClassName="l-modal__overlay"
        className="l-modal__base"
        isOpen={modalConfirmIsOpen}
      >
        <ModalConfirmContents
          formObject={formObj}
          cancelFunc={closeModalConfirm}
          progressFunc={onSubmit}
          jpNameList={jpNameList}
        />
      </ModalConfirm>
      <ModalFinish
        overlayClassName="l-modal__overlay"
        className="l-modal__base"
        isOpen={modalFinishIsOpen}
      >
        <ModalFinishContents progressFunc={closeModalFinish} />
      </ModalFinish>
      <ModalError
        overlayClassName="l-modal__overlay"
        className="l-modal__base"
        isOpen={modalErrorIsOpen}
      >
        <ModalErrorContents progressFunc={closeModalError} />
      </ModalError>
    </form>
  )
}
