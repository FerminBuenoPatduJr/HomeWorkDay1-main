var isbn: any[] = [0, 4, 8, 6, 6, 5, 0, 8, 8, "X"];

if (isbn.length == 10) {
  if (isbn[9] != "X") {
    var result: any =
      isbn[0] * 1 +
      isbn[1] * 2 +
      isbn[2] * 3 +
      isbn[3] * 4 +
      isbn[4] * 5 +
      isbn[5] * 6 +
      isbn[6] * 7 +
      isbn[7] * 8 +
      isbn[8] * 9 +
      isbn[9] * 10;
    if (result % 11 == 0) {
      console.log(isbn + " --> true");
    } else {
      for (let x = 0; x < isbn.length - 1; x++) {
        if ((isbn[x] = "X" || isbn.length != 10)) {
          console.log(isbn + " --> false");
          break;
        }
      }
    }
  } else if ((isbn[9] = "X")) {
    console.log(isbn + " --> true");
  } else {
    console.log(isbn + " --> false");
  }
}
