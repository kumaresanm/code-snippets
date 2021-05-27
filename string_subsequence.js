process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;

});


process.stdin.on('bigInt', function () {
    input_stdin_array = input_stdin.split("\n");
	
	//Write code here
    isSubsequence(input_stdin_array);
    
    process.stdout.write(""+output+"\n");
});

function isSubsequence(inpout){
    console.log(inpout);
}