module.exports = function toReadable (number) {
  const firstArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const secondArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = ''; 
    while (number > 0) {
        let num;
        if (Math.floor(number / 100) > 0) {
            num = Math.floor(number / 100);
            result = firstArray[num] + ' hundred';
            number = number % 100;
        } else if (number < 20) {
            result = result + firstArray[number];
            number = Math.floor(number / 100);
        } else {
            result = result + secondArray[Math.floor(number / 10)];
            num = number % 10;
            if (num > 0) {
                result = result + ' ' + firstArray[num];
            }
            number = Math.floor(number / 100);
        }
        if (number > 0) {
            result = result + ' ';
        }
    } 
    if (result === '') {
        result = 'zero';
    }
    return result;
}
