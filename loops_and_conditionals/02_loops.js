// Ejemplo con For loop
function replaceVowels(text, replace) {
  var result = ''
  var vowels = 'aeiou'
  var letter 
  for(var i = 0; i < text.length; i++) {
    //letter = text[i].toLowerCase()
    letter = text.charAt(i)
    // if(vowels.indexOf(letter.toLowerCase()) !== -1) {
    //   result += replace
    // } else {
    //   result += letter
    // }

    var isVowel = vowels.indexOf(letter.toLowerCase()) !== -1 

    result  += isVowel ? replace : letter

  }
  return result
}
// Ejempĺo con While y do While
function isPalindrome(text) {
  var auxText = ''
  
  // var index = text.length - 1
  // while(index >= 0) {
  //   auxText += text.charAt(index)
  //   index--
  // }

  // var index = text.length
  // do {
  //   index--
  //   auxText += text.charAt(index)
  // } while(index >= 0)

  //var indexPlus=0
  text = text.toLowerCase()
  for (let index = text.length -1, indexPlus=0 ; index >= 0; index--,indexPlus++) {
    if (text.charAt(indexPlus) !== text.charAt(index)) {
      break
    }
    auxText+=text.charAt(index)
    //indexPlus++
  }

  // ¿Todo bien aquí?
  //return auxText === text ? true : false
  return auxText === text
}

module.exports = {
  replaceVowels: replaceVowels,
  isPalindrome: isPalindrome
}
