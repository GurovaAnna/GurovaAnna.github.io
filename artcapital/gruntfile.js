module.exports = function(grunt) {

  grunt.initConfig({
    concat: {

      dist: {
          src: ['sass/**/*.scss'],
          dest: 'css/main.scss',
        },
      },

   sass: {
     dist: {
      files: [{
        expand: true,
        cwd: 'css',
        src: ['main.scss'],
        dest: 'css',
        ext: '.css'
      }]
    }
  },

  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css',
      src: ['main.css'],
      dest: 'css',
      ext: '.min.css'
    }]
  }
},
watch: {
 dist: {
   // We watch and compile sass files as normal but don't live reload here
   files: ['sass/**/*.*'],
   tasks: ['default'],
 },
 options: {
    livereload: true,
   },
 },
  });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'sass', 'cssmin']);
};
