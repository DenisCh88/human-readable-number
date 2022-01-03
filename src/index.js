module.exports = function toReadable(number) {
	let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
		 tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
		 dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	if (number === 0) {
		 return 'zero';
	} else if (number < 11) {
		 return (units[number - 1]);
	} else if (number >= 11 && number < 21) {
		 return (tens[number - 11]);
	} else if (number === 21) {
		 return (dozens[0] + " " + units[0]);
	} else if (number % 10 === 0 && number < 100) {
		 return (dozens[+number.toString().split('').shift() - 2]);
	} else if (number > 21 && number < 100) {
		 return (dozens[+number.toString().split('').shift() - 2] + " " + units[+number.toString().split('').pop() - 1]);
	} else if (number % 100 === 0) {
		 return (units[+number.toString().split('').shift() - 1] + ' hundred');
	} else if (number > 100 && number < 1000) {
		 let dozensOfHundreds = +number.toString().split('').splice(1, 2).join('');

		 if (dozensOfHundreds < 11) {
			  return (units[+number.toString().split('').shift() - 1] + ' hundred ' + units[dozensOfHundreds - 1]);
		 } else if (dozensOfHundreds >= 11 && dozensOfHundreds < 21) {
			  return (units[+number.toString().split('').shift() - 1] + ' hundred ' + tens[dozensOfHundreds - 11]);
		 } else if (dozensOfHundreds === 21) {
			  return (units[+number.toString().split('').shift() - 1] + ' hundred ' + dozens[dozensOfHundreds - 21] + " " + units[dozensOfHundreds - 21]);
		 } else if (dozensOfHundreds % 10 === 0 && dozensOfHundreds < 100) {
			  return (units[+number.toString().split('').shift() - 1] + ' hundred ' + dozens[+dozensOfHundreds.toString().split('').shift() - 2]);
		 } else if (dozensOfHundreds > 21 && dozensOfHundreds < 100) {
			  return (units[+number.toString().split('').shift() - 1] + ' hundred ' + dozens[+dozensOfHundreds.toString().split('').shift() - 2] + " " + units[+dozensOfHundreds.toString().split('').pop() - 1]);
		 }
	}
}