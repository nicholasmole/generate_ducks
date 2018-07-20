require 'fileutils'

class MakeAFile 

	def make_a_file(params)
		file_path = self.get_file_path

		text = self.get_template_file(file_path, params[3])

		self.check_or_make_dir(params[3])

		self.initial_new_file_created(params[3], params[0], text)

		self.overwrite_variable_names_in_file(params)
	end

	def overwrite_variable_names_in_file(params)
		File.write("#{params[3]}/#{params[0]}.js", File.read("#{params[3]}/#{params[0]}.js").gsub('{normal_param}', "#{params[0]}"))
		File.write("#{params[3]}/#{params[0]}.js", File.read("#{params[3]}/#{params[0]}.js").gsub('{first_cap_param}', "#{params[1]}"))
		File.write("#{params[3]}/#{params[0]}.js", File.read("#{params[3]}/#{params[0]}.js").gsub('{full_cap_param}', "#{params[2]}"))
	end

	def initial_new_file_created(type, name, text)
		File.open("#{type}/#{name}.js", "w") do |f|     
			f.write(text)   
		end
	end

	def get_file_path
		File.expand_path(File.dirname(__FILE__))
	end

	def get_template_file(file, type)
		File.read("#{file}/src/template_#{type}.txt")
	end

	def check_or_make_dir(directory)
		dirname = File.dirname("#{directory}")
		unless File.directory?("#{directory}")
			FileUtils.mkdir_p("#{directory}")
		end
	end

end
