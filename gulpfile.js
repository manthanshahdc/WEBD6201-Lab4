const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const imagemin = require('gulp-imagemin');

gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['dist/']
    }).on('restart', function() {
        console.log('==========RESTART==========');
        gulp.run(['scripts', 'style', 'fonts', 'image']);
    });
});

gulp.task('fonts', function() {
    return gulp.src([
        'src/assets/css/fonts/*.eot',
        'src/assets/css/fonts/*.svg',
        'src/assets/css/fonts/*.ttf',
        'src/assets/css/fonts/*.woff',
        'src/assets/css/fonts/*.woff2'])
        .pipe(gulp.dest('src/dist/css/fonts'));
});

gulp.task('style', function() {
    gulp.src([
        'src/assets/css/bootstrap.css',
        'src/assets/css/yit-plugins.css',
        'src/assets/css/yit-style.css',
        'src/assets/css/yit-bootstrap-nav.css',
        'src/assets/css/yit-custom-nav.css',
        'src/assets/css/yit-theme.css',
        'src/assets/css/yit-elements.css',
        'src/assets/css/yit-shortcodes.css',
        'src/assets/css/yit-blog.css',
        'src/assets/css/yit-responsive.css'])
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('src/dist/css'));
});

gulp.task('image', function () {
    gulp.src('src/assets/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('src/dist/images'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'src/assets/js/vendor/jquery.min.js',
        'src/assets/js/vendor/popper.min.js',
        'src/assets/js/vendor/modernizr.js',
        'src/assets/js/vendor/bootstrap.min.js',
        'src/assets/js/plugins/jquery.easing.1.3.js',
        'src/assets/js/plugins/jquery.stellar.js',
        'src/assets/js/plugins/jquery.parallax-scroll.js',
        'src/assets/js/plugins/jquery.parallaxify.js',
        'src/assets/js/plugins/flexslider.js',
        'src/assets/js/plugins/slick.js',
        'src/assets/js/plugins/owl.carousel.js',
        'src/assets/js/plugins/swiper.min.js',
        'src/assets/js/plugins/isotope.pkgd.min.js',
        'src/assets/js/plugins/imagesloaded.pkgd.min.js',
        'src/assets/js/plugins/classie.js',
        'src/assets/js/plugins/jquery.justifiedGallery.js',
        'src/assets/js/plugins/retina.min.js',
        'src/assets/js/plugins/wow.min.js',
        'src/assets/js/plugins/countup.js',
        'src/assets/js/plugins/in-view.min.js',
        'src/assets/js/plugins/jquery.magnific-popup.js',
        'src/assets/js/plugins/easypiechart.js',
        'src/assets/js/plugins/skill.bars.jquery.js',
        'src/assets/js/plugins/countdown.js',
        'src/assets/js/plugins/instafeed.min.js',
        'src/assets/js/plugins/validate-min.js',
        'src/assets/js/plugins/jquery.nice-select.min.js',
        'src/assets/js/plugins/jquery.fitvids.js',
        'src/assets/js/plugins/jquery.nicescroll.js',
        'src/assets/js/plugins/moment.min.js',
        'src/assets/js/plugins/bootstrap-datetimepicker.min.js',
        'src/assets/js/yit-custom-nav.js',
        'src/assets/js/yit-custom.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('src/dist/js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/dist/js'));
});

gulp.task('default', ['scripts', 'style', 'fonts', 'image', 'nodemon']);
