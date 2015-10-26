function tellMeWhenDone(done) {
	var a = 1000;
	var b = 2000;
	console.log("here I am")
	
	done();
}



tellMeWhenDone(function(){
	console.log('Process one Done');
	
});

tellMeWhenDone(function(){
	console.log('Process two Done');
})


