module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: [
                    'apps/website/static/build/css/*.css',
                ],
                options: {
                    interrupt: true,
                    livereload: true,
                    spawn: false
                },
                tasks: [
                    'minifycss'
                ]
            },
            html: {
                files: [
                    'apps/website/templates/*.html',
                    'apps/website/templates/**/*.html'
                ],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    'apps/website/static/build/js/*.js',
                ],
                options: {
                    interrupt: true,
                    livereload: true,
                    spawn: false
                },
                tasks: [
                    'uglifyjs',
                    'hintjs'
                ]
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            minify: {
                files: {
                    'apps/website/static/css/style.css': [
                        'apps/website/static/build/css/bootstrap.css',
                        'apps/website/static/build/css/animations.css',
                        'apps/website/static/build/css/base.css',
                        'apps/website/static/build/css/home.css',
                    ]
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'apps/website/static/js/base.js': [
                        'apps/website/static/build/js/base.js'
                    ],
                }
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'apps/website/static/build/js/*.js',
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('minifycss', ['cssmin']);
    grunt.registerTask('uglifyjs', ['uglify']);
    grunt.registerTask('hintjs', ['jshint']);
};
