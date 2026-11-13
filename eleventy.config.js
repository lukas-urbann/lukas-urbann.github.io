const fs = require("fs");
const yaml = require("js-yaml");

// Values computed at build time, usable as {age} / {year} in texts and as {{ build.age }} / {{ build.year }} in templates.
function buildValues() {
    const site = yaml.load(fs.readFileSync("src/_data/site.yaml", "utf8"));
    const now = new Date();
    const birth = new Date(site.birthDate);
    const hadBirthday = now.getMonth() > birth.getMonth()
        || (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
    return {
        year: now.getFullYear(),
        age: now.getFullYear() - birth.getFullYear() - (hadBirthday ? 0 : 1),
    };
}

module.exports = function (eleventyConfig) {
    const build = buildValues();
    eleventyConfig.addGlobalData("build", build);

    // Data files in src/_data can be written in YAML.
    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

    // Texts in the YAML files may contain HTML (<br>, links, colored spans), so don't escape them.
    eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: false });

    // Static assets (images, fonts, CSS, scripts, PDF, PHP) are copied to the output unchanged.
    eleventyConfig.addPassthroughCopy({ page: "page" });

    // Tailwind writes straight into _site; reload the browser when it does.
    eleventyConfig.setServerOptions({ watch: ["_site/page/css/tailwind.css"] });

    // {{ strings.nav.intro | t(lang) }} -> text in the page's language, with {age}/{year} filled in.
    eleventyConfig.addFilter("t", (entry, lang) => {
        const code = typeof lang === "string" ? lang : lang.code;
        if (!entry || entry[code] === undefined) {
            throw new Error(`Missing "${code}" translation: ${JSON.stringify(entry)}`);
        }
        return String(entry[code]).replace(/\{(age|year)\}/g, (_, key) => build[key]);
    });

    return {
        dir: { input: "src", output: "_site" },
        htmlTemplateEngine: "njk",
    };
};
