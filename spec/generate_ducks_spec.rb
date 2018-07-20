require 'pathname'
require 'generate_ducks'
require 'make_a_file'

RSpec.describe GenerateDucks do
	context "Store variable as 3 variables " do	
			before do
				@input_variable = ['testInputName']
				@output = GenerateDucks.new(@input_variable)
			end
			it "Gives the variables as normal, Full Captizalized, and First Letter Capitalized " do
				
				@output.make_params

				expect(@output.get_params).eql?({
					:normal => 'testInputName', 
					:firstCap => 'TestInputName', 
					:fullCap => 'TESTINPUTNAME'}
				)
			end
	end
end

RSpec.describe MakeAFile do
	context "Store variable as 3 variables " do	
			before do
				@input_variable = ['testInputName', 'TestInputName','TESTINPUTNAME','ducks']
				@output = MakeAFile.new
			end
			it "Make sure a ducks/testInputNames.js exists " do

				@output.make_a_file(@input_variable)

				expect(File.exists?('./ducks/testInputName.js')).to be true
			end
	end
end