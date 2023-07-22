const sass = require('sass');
const csso = require('csso');
const fs = require('fs');

const input_file_path = './src/hs-css/hs-css.scss';

//  固定字符串长度，不够前填充
function fixStrLength(str, length, prefillstr="0"){
	return (prefillstr.repeat(length)+str).slice(-length)
}

// 获取日期
const currentDate = new Date();
const year = currentDate.getFullYear(); // 获取年份
const month = fixStrLength(currentDate.getMonth() + 1, 2); // 获取月份（注意：月份从0开始）
const day = fixStrLength(currentDate.getDate(), 2); // 获取日期
const dayFormatStr = `${year}.${month}.${day}`;



(async () => {

    try {
        // 编译scss文件
        const result = await sass.compileAsync(input_file_path);

        // 获取编译后的css
        const unCompressedCss = result.css

        // csso 压缩CSS
        const compressedCss = csso.minify(unCompressedCss).css;


        // 生成未压缩css
        fs.writeFileSync(`./dist/hs-css.${dayFormatStr}.css`, unCompressedCss);

        // 生成压缩css
        fs.writeFileSync(`./dist/hs-css.${dayFormatStr}.min.css`, compressedCss);

        console.log("hs-css.css 编译完成！")

    } catch (err) {
        console.error(err);
    }

})();