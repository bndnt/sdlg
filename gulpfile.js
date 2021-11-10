
let project_folder = require("path").basename(__dirname);
let source_folder = "#src";

let fs = require('fs');
if (!fs.existsSync(source_folder)){
    fs.mkdirSync(source_folder);
}
if (!fs.existsSync(''+source_folder+'/js')){
    fs.mkdirSync(''+source_folder+'/js');
    fs.writeFileSync(''+source_folder+'/js/script.js');
}
if (!fs.existsSync(''+source_folder+'/scss')){
    fs.mkdirSync(''+source_folder+'/scss');
    fs.writeFileSync(''+source_folder+'/scss/style.scss');
}
if (!fs.existsSync(''+source_folder+'/img')){
    fs.mkdirSync(''+source_folder+'/img');
}
if (!fs.existsSync(''+source_folder+'/fonts')){
    fs.mkdirSync(''+source_folder+'/fonts');
}
if (!fs.existsSync(''+source_folder+'/scss/fonts.scss')) {

    fs.writeFileSync(''+source_folder+'/scss/fonts.scss', '');
}
if (!fs.existsSync(''+source_folder+'/scss/style.scss')) {

    fs.writeFileSync(''+source_folder+'/scss/style.scss', '');
}
if (!fs.existsSync(''+source_folder+'/index.html')) {

    fs.writeFileSync(''+source_folder+'/index.html', '');
}




let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/*.scss",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    scss = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify-es").default,
    // imagemin = require("gulp-imagemin"),
    // webp = require('gulp-webp'),
    // webphtml = require('gulp-webp-html'),
    // webpcss = require("gulp-webpcss"),
    cheerio = require('gulp-cheerio'),
    svgSprite = require('gulp-svg-sprite'),
    postcss = require("postcss"),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter');

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        // .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                includePaths: require('node-normalize-scss').includePaths,
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        // .pipe(webpcss())
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.reload({ stream: true }));

}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js",
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}

function images() {
    return src(path.src.img)
        // .pipe(
        // 	webp({
        // 		quality: 100
        // 	})
        // )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        // .pipe(
        // 	imagemin({
        // 		progressive: true,
        // 		svgoPlugins: [{ removeViewBox: false }],
        // 		interlaced: true,
        // 	})
        // )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
};

gulp.task('otf2ttf', function () {
    return src([source_folder + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(source_folder + '/fonts/'));
})

gulp.task('svgSprite', function () {
    return gulp.src([source_folder + '/iconsprite/*.svg'])
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
                $('[viewBox]').removeAttr('viewBox');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../icons/icons.svg",  //sprite file name
                        example: true
                    }
                },
            }
        ))
        .pipe(dest(path.build.img))
})

let srcFonts = source_folder + "/scss/fonts.scss";

const fontsStyle = (done) => {
    let file_content = fs.readFileSync(srcFonts);

    fs.writeFile(srcFonts, "", cb);
    fs.readdir(source_folder + "/fonts/", function (err, items) {
        if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
                let fontname = items[i].split(".");
                fontname = fontname[0];
                let font = fontname.split("-")[0];
                let weight = checkWeight(fontname);

                if (c_fontname != fontname) {
                    fs.appendFile(
                        srcFonts,
                        '@include font-face("' +
                        font +
                        '", "' +
                        fontname +
                        '", ' +
                        weight +
                        ");\r\n",
                        cb
                    );
                }
                c_fontname = fontname;
            }
        }
    });

    done();
};

const checkWeight = (fontname) => {
    let weight = 400;
    switch (true) {
        case /Thin/.test(fontname):
            weight = 100;
            break;
        case /ExtraLight/.test(fontname):
            weight = 200;
            break;
        case /Light/.test(fontname):
            weight = 300;
            break;
        case /Regular/.test(fontname):
            weight = 400;
            break;
        case /Medium/.test(fontname):
            weight = 500;
            break;
        case /SemiBold/.test(fontname):
            weight = 600;
            break;
        case /Semi/.test(fontname):
            weight = 600;
            break;
        case /Bold/.test(fontname):
            weight = 700;
            break;
        case /ExtraBold/.test(fontname):
            weight = 800;
            break;
        case /Heavy/.test(fontname):
            weight = 700;
            break;
        case /Black/.test(fontname):
            weight = 900;
            break;
        default:
            weight = 400;
    }
    return weight;
};
function cb() {}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(gulp.parallel(js, css, html, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
