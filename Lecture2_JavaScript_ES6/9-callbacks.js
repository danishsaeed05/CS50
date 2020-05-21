// this is a Higher Order Function that invokes the function argument on 1
function doSomethingAsync(callback)
{
	setTimeout(function() {callback(1)}, 1000)
}

doSomethingAsync(console.log)