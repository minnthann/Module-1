// TODO: Write Your JavaScript Code Here
function isEqual(a, b) {
    if (a === b ) {
      console.log('They are equal in type and value');
    } else if (a == b) {
      console.log('They are equal in value');
    } else {
      console.log('They are not equal');
    }
    return;
  }
  
  // Logs "They are equal in type and value"
  isEqual(10, 10);
  isEqual ('10', 10);

var isEqualTakeTwo =function (a, b) {
    if (a ===b) {
        console.log('they are equal in type value');
    }else if (a == b) {
        console.log('the are equal value');
    }else {
        console.log('they are not equal');
    }
    return;
  };

  isEqualTakeTwo(10, 'ture');