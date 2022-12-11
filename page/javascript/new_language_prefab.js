const lang = "en"

const en = {
  "nav-btn-text-intro": "Introduction",
  "nav-btn-text-editor": "Portfolio",
  // ... a tak dal
}

function changeLang (lang) {
  switch (lang) {
    case "en":
      langHandler("en", en)
      break
  }
}

function langHandler (lang, langOptions) {
  setCookie("language", lang, 7)
  
  Object.keys(langOptions).forEach(x => {
    writeLang(x).innerHTML = langOptions[x]
  })
}