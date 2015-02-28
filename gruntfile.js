module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify : {
			my_target : {
				files : {
					"js/script.js" : ['components/js/*.js']
				}//files
			}//my_target
		},//uglify
		compass : {
			dev : {
				options : {
					config : 'config.rb'
				}//options
			}//dev
		},//compass
		watch: {
			options : { livereload : true },
      		scripts :{
      			files: ['js/*.js'],
      			tasks: ['uglify']
    		},//scripts
    		html : {
    			files : ['*.html']
    		},//html
    		sass : {
    			files : ['sass/*.scss','sass/base/*.scss','sass/layout/*.scss','sass/modules/*.scss','sass/utilities.scss'],
    			tasks : ['compass:dev']
    		}
    	}//watch
  
		
	});
	
	grunt.registerTask('default', 'watch');
}