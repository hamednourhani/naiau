module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify : {
			my_target : {
				files : {
					"_/js/script.js" : ['js/*.js']
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
    			files : ['sass/*.scss'],
    			tasks : ['compass:dev']
    		}
    	}//watch
  
		
	});
	
	grunt.registerTask('default', 'watch');
}