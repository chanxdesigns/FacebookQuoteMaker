module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            compile: {
                expand: true,
                cwd: 'src/assets/sass/',
                src: 'app.scss',
                dest: 'dist/assets/app.css'
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'src/',
                src: ['*.html'],
                dest: 'dist'
            },
            js: {
                expand: true,
                cwd: 'src/assets/js/',
                src: ['*'],
                dest: 'dist/assets/js'
            },
            bower: {
                expand: true,
                cwd: 'src/bower_components/',
                src: ['angular/*.min.js'],
                dest: 'dist/assets/js',
                filter: 'isFile'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask('default',['sass','copy']);
};