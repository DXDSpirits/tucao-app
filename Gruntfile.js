module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cfg: grunt.file.readJSON('config.json'),
		concat: {
		    bootstrap: {
                src: [
                    'assets/js/bootstrap/transition.js',
                    'assets/js/bootstrap/alert.js',
                    'assets/js/bootstrap/button.js',
                    'assets/js/bootstrap/carousel.js',
                    'assets/js/bootstrap/collapse.js',
                    'assets/js/bootstrap/dropdown.js',
                    'assets/js/bootstrap/modal.js',
                    'assets/js/bootstrap/tooltip.js',
                    'assets/js/bootstrap/popover.js',
                    'assets/js/bootstrap/scrollspy.js',
                    'assets/js/bootstrap/tab.js',
                    'assets/js/bootstrap/affix.js'
                ],
                dest: '<%= cfg.path.dest %>/assets/js/bootstrap.js'
            },
		    mwapp: {
                src: [
                    'assets/js/app/_open.js',
                    'assets/js/app/app.js',
                    'assets/js/app/app-local.js',
                    'assets/js/app/utils.js',
                    'assets/js/app/model.js',
                    'assets/js/app/models/*.js',
                    'assets/js/app/view.js',
                    'assets/js/app/router.js',
                    'assets/js/app/_close.js',
                    'assets/js/app/views/*.js'
                ],
                dest: '<%= cfg.path.dest %>/assets/js/mw-app.js'
            }
		},
		uglify: {
			mwapp: {
				src: '<%= cfg.path.dest %>/assets/js/mw-app.js',
				dest: '<%= cfg.path.dest %>/assets/js/mw-app.min.js'
			}
		},
        less: {
            options: {
                cleancss: true,
                report: 'min'
            },
            bootstrap: {
                src: 'assets/less/bootstrap.less',
                dest: '<%= cfg.path.dest %>/assets/css/bootstrap.css'
            },
            bootstrap_theme: {
                src: 'assets/less/bootstrap-theme.less',
                dest: '<%= cfg.path.dest %>/assets/css/bootstrap-theme.css'
            },
            mobile: {
                src: 'assets/less/mobile.less',
                dest: '<%= cfg.path.dest %>/assets/css/mobile.css'
            }
        },
		includes: {
			files: {
				src: ['mobile/index.html', 'mobile/index-profile.html', 'mobile/index-reply.html', 'mobile/index-explore.html'],
				dest: '<%= cfg.path.dest %>',
				flatten: true,
				cwd: '.'
			}
		},
		templates: {
			all: {
				src: ['assets/template/*.html', 'assets/template/*/*.html'],
				dest: '<%= cfg.path.dest %>/assets/js/templates.js'
			}
		},
		copy: {
			staticfiles: {
				expand: true,
    			src: [
    				'assets/css/**/*',
    				'assets/img/**/*',
    				'assets/font/**/*',
    				'assets/js/vendor/**/*',
    				'assets/js/plugin/**/*',
    				'config.xml'
    			],
    			dest: '<%= cfg.path.dest %>'
			}
		},
		watch: {
			scripts_mwapp: {
				files: ['assets/js/app/*.js', 'assets/js/app/models/*.js', 'assets/js/app/views/*.js'],
				tasks: ['concat:mwapp', 'uglify:mwapp']
			},
			scripts_bootstrap: {
                files: ['assets/js/bootstrap/*.js'],
                tasks: ['concat:bootstrap']
            },
			staticfiles: {
				files: ['assets/css/**/*', 'assets/img/**/*', 'assets/font/**/*',
				        'assets/js/vendor/**/*', 'assets/js/plugin/**/*', 
				        'config.xml', '.htaccess', 'cordova.js'],
				tasks: ['copy']
			},
            stylesheets: {
                files: ['assets/less/**/*.less'],
                tasks: ['less']
            },
			templates: {
				files: ['assets/template/**/*.html'],
				tasks: ['templates']
			},
			html: {
				files: ['mobile/*.html'],
				tasks: ['includes']
			}
		},
		connect: {
			server: {
				options: {
					port: 8082,
					base: '<%= cfg.path.dest %>',
					keepalive: true,
					hostname: null,
					middleware: function(connect, options){
						var appcache = grunt.option('appcache');
						return [
							function(req, res, next){
								if (req.url == '/manifest.appcache' && !appcache){
									res.writeHead(404);
									res.end();
								} else {
									next();
								}
							},
							connect.static(options.base),
							connect.directory(options.base)
						];
					}
				}
			}
		},
		concurrent: {
		    dist: {
                tasks: ['concat', 'less', 'includes', 'templates', 'copy', 'uglify'],
                options: { logConcurrentOutput: true }
            },
			server: {
				tasks: ['watch', 'connect'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});
	
	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks("grunt-steroids");
	
	// Configurable port number
	var port = grunt.option('port');
	if (port) grunt.config('connect.server.options.port', port);
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('server', 'concurrent:server');
	grunt.registerTask('dist', 'concurrent:dist');
	grunt.registerTask("default", ["steroids-make"]);
};
