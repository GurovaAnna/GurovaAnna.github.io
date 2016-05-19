module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            options: {
              separator: ';',
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/built.js',
            }
        },

        uglify: {
            dist: {
                src: ['js/dist/built.js'],
                dest: 'js/dist/built.min.js',
            }
        },
        cssmin: {

            target: {
                files: {
                    'css/dist/built.css': ['css/src/*.css']
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);


};
