Add Class And Wait
===============

A jQuery plugin to add a class and wait for a transition to complete.
If you select multiple elements with differing transition durations, the plug in will wait until all have finished.

[View Demo](http://adwilk.github.io/addClassAndWait)

Usage:

```javascript
$('button').click(function(){

	//Select something and call the function, the parameter
	//is the class/classes that you want to add.

	$('h1').addClassAndWait('myClass')
		.done(function(collection){

			//Triggered once the CSS transition is completed.
			//The parameter of the done function contains the
			//original collection, in this case $('h1').

			collection
				.text('Finished')
		});
});
```
