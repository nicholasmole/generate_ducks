require 'get_versions_of_input'


RSpec.describe Get_versions_of_input do
	context "Store variable as 3 variables " do	
			it "Gives the variables as normal, Full Captizalized, and First Letter Capitalized " do
				input_variable = ['testInputName']
				output = get_versions_of_input input_variable

				expects(output).eql({
					normal: testInputName, 
					firstCap: testInputName, 
					fullCap: testInputName, 
				})
			end
	end
end