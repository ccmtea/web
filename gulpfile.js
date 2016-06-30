var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	// stylelint = require('gulp-stylelint'),
	stylelint   = require('stylelint');
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	reporter = require('postcss-reporter'),
	syntax_scss = require('postcss-scss');
	cssnext = require('cssnext');

// gulp.task("css-lint", function() {    // Stylelint config rules   

// var processors = [stylelint(stylelintConfig),
// 					reporter({ clearMessages: true, throwError: true}) 
// 				];
// 				return gulp.src( ['app/assets/css/**/*.css',
				// Ignore linting vendor assets:
				// (Useful if you have bower components)       '!app/assets/css/vendor/**/*.css']     )
				// .pipe(postcss(processors)),
	// 				{syntax: syntax_scss}); 
	// })


gulp.task('css',function(){
	var stylelintConfig = {
							"rules": {"block-no-empty": true,   //禁止空块
								"color-no-invalid-hex": true,   //禁止无效的十六进制颜色
								"declaration-colon-space-after": "always", //在声明的冒号后指定一个空格或禁止留有空格
								"declaration-colon-space-before": "never",
								"function-comma-space-after": "always",
								"function-url-quotes": "double",
								"media-feature-colon-space-after": "always",
								"media-feature-colon-space-before": "never",
								"media-feature-name-no-vendor-prefix": true,
								"max-empty-lines": 5,
								"number-leading-zero": "never",
								"number-no-trailing-zeros": true,
								"property-no-vendor-prefix": true,
								"declaration-block-no-duplicate-properties": true,   //禁止在声明块内出现重复属性
								"block-no-single-line": true,   //禁止单行块
								"declaration-block-trailing-semicolon": "always",  // 在声明块内指定或禁止尾随分号
								"selector-list-comma-space-before": "never",
								"selector-list-comma-newline-after": "always",
								"selector-no-id": true,
								"string-quotes": "double",
								"value-no-vendor-prefix": true
							}
						};
	var processors = [
		autoprefixer,
		stylelint(stylelintConfig),
		precss,
		cssnext,
		reporter({ clearMessages: true})
	];
	return gulp.src('res/css/**/*.css')
			.pipe(postcss(processors))
			.pipe(gulp.dest('res/styles'))
});


gulp.task('watch',function(){
	gulp.watch('res/css/**/*.css',['css']);
});