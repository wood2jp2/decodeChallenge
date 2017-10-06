const 
	clue = 'Hr nb mznv rh Vrmmb! I dzh ylim lm z Prizgv hsrk drgs zkkovh.',
	solved = [],
	alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
 	reverseAlphabet = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

function decode(a) {

  for (let i = 0; i<a.length; i++) {

  	if  (a[i] === ' ') {
  		solved.push(' ');
  	} else if (a[i] === a[i].toLowerCase()) {
  		solved.push(reverseAlphabet[alphabet.indexOf(a[i])]);
  	} else {
  		solved.push(a[i]);
  	}
  };
  console.log(solved.join(''));
};

decode(clue);
