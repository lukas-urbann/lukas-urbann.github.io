// Builds /page/javascript/language.js for the contact form and the PHP result pages.
// Texts come from _data/strings.yaml; keys are the element IDs used in those pages.

const ids = {
    "warning-small-window": (s) => s.ui.window_too_small,
    "notification-close": (s) => s.ui.close,
    "form-back": (s) => s.form.back,
    "form-header": (s) => s.form.header,
    "form-name": (s) => s.form.name,
    "form-email": (s) => s.form.email,
    "form-message": (s) => s.form.message,
    "form-send": (s) => s.form.send,
    "form-error-header": (s) => s.form.error_header,
    "form-error-name": (s) => s.form.error_name,
    "form-error-email": (s) => s.form.error_email,
    "form-error-message": (s) => s.form.error_message,
    "form-error-general": (s) => s.form.error_general,
    "form-error-text": (s) => s.form.error_text,
    "form-error-send": (s) => s.form.error_send,
    "form-error-back": (s) => s.form.error_back,
    "form-success": (s) => s.form.success,
    "form-success-text": (s) => s.form.success_text,
};

module.exports = class {
    data() {
        return { permalink: "/page/javascript/language.js", eleventyExcludeFromCollections: true };
    }

    render({ strings, site }) {
        const translations = {};
        for (const { code } of site.languages) {
            translations[code] = Object.fromEntries(Object.entries(ids).map(([id, get]) => [id, get(strings)[code]]));
        }
        return `// Generated from src/_data/strings.yaml - edit the texts there, not here.
const translations = ${JSON.stringify(translations, null, 4)};

(function () {
    let saved = null;
    try { saved = localStorage.getItem("language"); } catch (e) {}
    const code = saved in translations ? saved : ${JSON.stringify(site.languages[0].code)};
    for (const [id, text] of Object.entries(translations[code])) {
        const element = document.getElementById(id);
        if (element) element.innerHTML = text;
    }
    document.documentElement.lang = ${JSON.stringify(Object.fromEntries(site.languages.map((l) => [l.code, l.htmlLang])))}[code];
})();
`;
    }
};
