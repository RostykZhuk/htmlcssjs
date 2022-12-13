function getCount(input) {
  var vowelsCount = 0;
  var inputLetters = input.split('');

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  vowels.forEach(function (vowel) {
    inputLetters.forEach(function (inpLetter) {
      if (inpLetter === vowel) {
        vowelsCount++;
      }
    });
  });

  return vowelsCount;
}

console.log(getCount('abracadabra'));
