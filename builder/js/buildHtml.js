import fs from "fs-extra";
import Handlebars from "handlebars";
import allElements from "../../mdn-element-api/api/_elements.json" assert { type: "json" };
import config from "../../config/config.json" assert { type: "json" };


Handlebars.registerHelper('tlc', function (aString) {
    return aString.toLowerCase()
})

/**
 * Build the webpage
 */
const buildHtml = () => {
    let template = fs.readFileSync(config.paths.pageIn, "utf8");
    let renderTemplate = Handlebars.compile(template);
    
    let html = renderTemplate({data: allElements});
    fs.writeFileSync(config.paths.pageOut, html);
};

export default buildHtml();
