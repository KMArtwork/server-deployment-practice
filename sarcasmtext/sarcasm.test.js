const sarcasticText = require('./sarcasm');

describe('As a user, I want a way to change any text into the sarcastic text meme', () => {
  
  test('Should sarcasm-ify an all caps string', () => {
    const result = sarcasticText('STOP MOCKING ME!');
    expect(result).toEqual('StOp mOcKiNg mE!')
  });

  test('Should sarcasm-ify an all lowercase string', () => {
    const result = sarcasticText("you're not funny");
    expect(result).toEqual("YoU'Re nOt fUnNy")
  });

  test('Odd index characters are capitalized, even index characters are lowercase', () => {
    const result = sarcasticText('tHiS Is sO AnNoYiNg');
    expect(result).toEqual('ThIs iS So aNnOyInG')
  });

});