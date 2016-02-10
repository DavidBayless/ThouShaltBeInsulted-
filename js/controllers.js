app.controller('ShakespeareController', [shakespeareController]);

function shakespeareController() {
  var vm = this;
  vm.title = 'Hello World';
  vm.isVowel = false;
  vm.wordOne = '';
  vm.wordTwo = '';
  vm.wordThree = '';

  vm.getWords = function() {
    vm.wordOne = columnOne[randNum(50)];
    vm.wordTwo = columnTwo[randNum(49)];
    vm.wordThree = columnThree[randNum(49)];
  };

  function randNum(num) {
    return Math.floor(Math.random() * num) + 1;
  }
}
