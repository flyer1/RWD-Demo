var args = require('yargs').argv;
var gulp = require('gulp');
var del = require('del');
var plugin = require('gulp-load-plugins')({lazy: true});
var paths = {
    less: ['./src/client/css/site.less'],
    css: './src/client/css/'
};

/**
 * yargs variables can be passed in to alter the behavior, when present.
 * Example: gulp serve-dev
 *
 * --verbose  : Various tasks will produce more output to the console.
 * --nosync   : Don't launch the browser with browser-sync when serving code.
 * --debug    : Launch debugger with node-inspector.
 * --debug-brk: Launch debugger and break on 1st line with node-inspector.
 * --startServers: Will start servers for midway tests on the test task.
 */


/**********************************************************************************
 DEFAULT TASKS
 **********************************************************************************/
// Show a list of available tasks if the user doesn't provide a task name or if they
// ask for the help task ('gulp help')
gulp.task('default', ['help']);
gulp.task('help', plugin.taskListing);


/**********************************************************************************
 CSS RELATED TASKS
 **********************************************************************************/
// Compile the LESS files to app.css
gulp.task('css', ['clean-css'], function() {
    console.log('Compiling Less --> CSS');

    return gulp
        .src(['./src/client/css/site.less'])
        .pipe(plugin.plumber()) // exit gracefully if something fails after this
        .pipe(plugin.less())
        .pipe(plugin.autoprefixer())
        .pipe(gulp.dest('./src/client/css/'));
});

// Watch for changes to LESS files and recompile CSS when changes occur
gulp.task('watch-less', function () {
    gulp.watch('./src/client/css/*.less', ['css']);
});

// Remove existing css file
gulp.task('clean-css', function(done) {
    var files = [ './src/client/css/site.css'];
    clean(files, done);
});

/////////////////////////////////////////// LOCAL FUNCTIONS //////////////////////////////
/*
 * Delete all files in a given path
 * @param  {Array}   path - array of paths to delete
 * @param  {Function} done - callback when complete
 */
function clean(path, done) {
    console.log('Cleaning: ' + path);
    del(path, done);
}

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                plugin.util.log(plugin.util.colors.blue(msg[item]));
            }
        }
    } else {
       plugin.util.log(plugin.util.colors.blue(msg));
    }
}
