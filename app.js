const sass = require('sass');
const csso = require('csso');
const fs = require('fs');


const input_file_path = './src/hs-css-for-app/hs-css.scss';


(async () => {

    try {
        // 编译scss文件
        const result = await sass.compileAsync(input_file_path);

        // 获取编译后的css
        const unCompressedCss = result.css

        // csso 压缩CSS
        const compressedCss = csso.minify(unCompressedCss).css;


        // 生成未压缩css
        fs.writeFileSync(`./dist/hs-css-for-app.css`, unCompressedCss);

        // 生成压缩css
        fs.writeFileSync(`./dist/hs-css-for-app.min.css`, compressedCss);

        console.log("hs-css-for-app 编译完成！")

    } catch (err) {
        console.error(err);
    }

})();