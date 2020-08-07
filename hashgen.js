function generateHashtag(str) {
  if (str.length > 140 || str.length === 0) {
    return false;
  }

  var a = str
    .trim()
    .split(' ')
    .map(function (passover) {
      return (
        passover.charAt(0).toUpperCase() +
        passover.substring(1, passover.length)
      );
    })
    .join('');
  return (a = '#' + a);
}

console.log(
  generateHashtag(''),
  false,
  'Expected an empty string to return false'
);

console.log('-------##################---------------');

console.log(generateHashtag(' '.repeat(200)), false, 'Still an empty string');

console.log('+++++++++++++++++++++++++++++++++++');

console.log(
  generateHashtag('Do We have A Hashtag'),
  '#DoWeHaveAHashtag',
  'Expected a Hashtag (#) at the beginning.'
);
