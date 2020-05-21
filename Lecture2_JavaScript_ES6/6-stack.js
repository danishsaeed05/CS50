// when errors are thrown, the entire callstack is logged
function addOne(num)
{
	throw new Error('oh no, an error!')
	//return num + 1
}

function getNum()
{
	return addOne(10)
}

function c()
{
	console.log(getNum() + getNum())
}

c()

/* Stack in JavaScript
	addOne(10)  >11  -- gets erased from stack after it gets the value
	getNum() 	>11	 -- gets erased after called from stack
	c()			>22	 -- gets erased after its executed	
*/