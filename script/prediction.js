var prediction=[
['I wish you luck!'],
['Have a good rest!'],
['Behave yourself .be good!'],
['Success to you in defending your thesis!'],
['May your dreams come true!'],
['Good luck on your business!'],
['Enjoy!!'],
['Lets hope the weather keeps!'],
['Good luck with your exam!'],
['Please, accept my best most heartfelt sincerest wishes!']
];


$(document).ready(function () {
	$('.cookie').click(function () {
		var index = Math.floor(Math.random() * 10);
		$('.message' ).text(prediction[index][0]);
	});
});