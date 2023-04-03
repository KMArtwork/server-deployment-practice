const sarcasticText = (aString) => {
  const sarcasmString = [...aString]
  
  sarcasmString.forEach((char, idx) => {
    if (idx % 2 === 0) {
      sarcasmString[idx] = char.toUpperCase()
    } else {
      sarcasmString[idx] = char.toLowerCase()
    }
  })

  return sarcasmString.join('')
}

// console.log(sarcasticText('stop mocking me'));

module.exports = sarcasticText;