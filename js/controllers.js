app.controller('ShakespeareController', [shakespeareController]);

function shakespeareController() {
  var vm = this;
  vm.title = 'Hello World';
  vm.isVowel = false;
  vm.wordOne = '';
  vm.wordTwo = '';
  vm.wordThree = '';
  vm.insult = 'Thou dost deserve to be insulted!';

  vm.getWords = function() {
    vm.wordOne = columnOne[randNum(50)];
    vm.wordTwo = columnTwo[randNum(49)];
    vm.wordThree = columnThree[randNum(49)];
    if (vm.wordOne.charAt(0).toLowerCase() === 'a' || vm.wordOne.charAt(0).toLowerCase() === 'e' || vm.wordOne.charAt(0).toLowerCase() === 'i' || vm.wordOne.charAt(0).toLowerCase() === 'o' || vm.wordOne.charAt(0).toLowerCase() === 'u') {
      vm.insult = 'Thou art an ' + vm.wordOne + ' ' + vm.wordTwo + ' ' + vm.wordThree + '!';
    } else {
      vm.insult = 'Thou art a ' + vm.wordOne + ' ' + vm.wordTwo + ' ' + vm.wordThree + '!';
    }
    console.log(vm.insult);
  };

  function randNum(num) {
    return Math.floor(Math.random() * num) + 1;
  }
}
