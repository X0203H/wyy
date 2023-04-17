module.exports = {
    pages: {
        index: {
            // page 的入口
            // 在这里修改我们mian.js的名字，脚手架就可以找到
            entry: "src/main.js",
        },
    },
    // 这是关闭语法检查
    lintOnSave: false,
    devServer: {
        proxy: 'http://localhost:5000'
    },
};
