// this will recurse infinitely
function recurse()
{
	console.log('recursion!')
	return recurse()
}

// we run of the stack memory here
recurse()