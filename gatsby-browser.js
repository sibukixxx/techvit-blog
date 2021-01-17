import "./node_modules/yakuhanjp/dist/css/yakuhanmp-noto.css"

const setCustomVh = () => {
  let vh = window.innerHeight * 0.01
  // カスタム変数--vhの値をドキュメントのルートに設定
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

setCustomVh()
document.body.style.setProperty("opacity", 1.0)

// resizeイベントの取得
window.addEventListener("resize", () => {
  setCustomVh()
})
