function replace(source) {
    // 使用正则把 // @require '../style/index.css' 转换成 require('../style/index.css');  
    return source.replace("console.log(123)", 'console.log(451236)');
}

module.exports = function (content) {
    return replace(content);
};