const fs = require("fs")
function remove(url) {
    // 读取原路径
    const STATUS = fs.statSync(url);
    // 如果原路径是文件
    if (STATUS.isFile()) {
        //删除原文件
        fs.unlinkSync(url);
 
    //如果原路径是目录
    } else if (STATUS.isDirectory()) {
        //如果原路径是非空目录,遍历原路径
        //空目录时无法使用forEach
        fs.readdirSync(url).forEach(item => {
            //递归调用函数，以子文件路径为新参数
            remove(`${url}/${item}`);
        });
        //删除空文件夹
        fs.rmdirSync(url);
    };
};

class ClearFileCaches {
	apply(compiler) {
		
		compiler.hooks.beforeRun.tap("plugin beforeRun",(
			stats
		) => {
			remove("./dist")
			console.log("----------------------插件开始之前执行")
		})
		
		compiler.hooks.emit.tap("plugin emit",(
			stats
		) => {
			console.log("----------------------插件emit")
		})
		
		compiler.hooks.done.tap("------------------hello world plugin",(
			stats
		) => {
			console.log("----------------------插件执行结束了")
		})
	}
}

module.exports = ClearFileCaches;