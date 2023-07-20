module.exports = class Page {
    
    open (path) {
        return browser.url(`https://google.com/${path}`)
    }
}