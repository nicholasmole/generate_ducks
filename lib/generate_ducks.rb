require_relative './make_a_file'

class GenerateDucks
	attr_reader :params, :normal, :first_cap, :full_cap

	def initialize(params)
		@params = params[0]
	end

	def make_params
		@normal = @params
		@first_cap = @params.capitalize
		@full_cap = @params.upcase
	end

	def make_duck_and_saga
		ducker = MakeAFile.new
		ducker.make_a_file [@normal, @first_cap, @full_cap, 'ducks']
		ducker.make_a_file [@normal, @first_cap, @full_cap, 'sagas']
	end

	def get_params
		{:normal => @normal, :firstCap => @first_cap, :fullCap => @full_cap}
	end

end

if __FILE__ == $0
	c = GenerateDucks.new(ARGV)
	c.make_params
	c.make_duck_and_saga
end