
// Function return empty space to '-'.
export function FormatParam(textToFormat){
    let getParam = textToFormat.toLowerCase().replace(/ /g, '-');
    return getParam;
}