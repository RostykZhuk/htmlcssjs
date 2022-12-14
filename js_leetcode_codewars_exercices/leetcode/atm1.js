function iWantGet(amountRequired) {
  const avaibleNotes = [100, 50, 20, 10];
  let result = [];

  if (amountRequired > 0) {
    for (let i = 0; i < avaibleNotes.length; i++) {
      let note = avaibleNotes[i];
      while (amountRequired - note >= 0) {
        amountRequired -= note;
        result.push(note);
      }
    }
  } else {
    console.log('Pls enter amount');
  }
  return result;
}
console.log(iWantGet(365));
