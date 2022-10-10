const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    const capitalizedArr = tutorials.map(function(sentence){
    const word = sentence.split(" ")
    const wordCapital = word.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
    return wordCapital.join(" ")
  })
  return capitalizedArr
}

console.log(titleCased(tutorials))
