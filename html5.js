const sass = require('sass');
const csso = require('csso');
const fs = require('fs');
const version_name = require('./src/version_name');

const input_file_path = './src/hs-css-for-html5/hs-css.scss';


(async () => {

    try {
        // 编译scss文件
        const result = await sass.compileAsync(input_file_path);

        // 获取编译后的css
        const unCompressedCss = result.css

        // csso 压缩CSS
        const compressedCss = csso.minify(unCompressedCss).css;


        // 生成未压缩css
        fs.writeFileSync(`./dist/hs-css-for-html5/hs-css-for-html5-v${version_name.get_version_name()}.css`, unCompressedCss);

        // 生成压缩css
        fs.writeFileSync(`./dist/hs-css-for-html5/hs-css-for-html5-v${version_name.get_version_name()}.min.css`, compressedCss);

        console.log("hs-css-for-html5 编译完成！")

    } catch (err) {
        console.error(err);
    }

})();