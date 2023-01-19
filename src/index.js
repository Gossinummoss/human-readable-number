module.exports = function toReadable (number) {
    let array = (""+number).split("");
    var a = [
      '',
      'one ',
      'two ',
      'three ',
      'four ',
      'five ',
      'six ',
      'seven ',
      'eight ',
      'nine ',
      'ten ',
      'eleven ',
      'twelve ',
      'thirteen ',
      'fourteen ',
      'fifteen ',
      'sixteen ',
      'seventeen ',
      'eighteen ',
      'nineteen ',
    ];
    var b = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];
    var c = [
        'ten ',
      'eleven ',
      'twelve ',
      'thirteen ',
      'fourteen ',
      'fifteen ',
      'sixteen ',
      'seventeen ',
      'eighteen ',
      'nineteen ',
    ]

    if (number <= 19 && number > 0) {
      return a[number].trim()
    } else if (array[1] === 0 && number <= 99) {
      return b[number/10].trim()
    } else if (array.length == 2) {
      return `${b[array[0]]} ${a[array[1]]}`.trim()
    } else if (number >= 100) {
        if (array[1] == 0) {
            return `${a[array[0]]}hundred ${a[array.at(-1)]}`.trim()
        } else if (array[1] == 1) {
            return `${a[array[0]]}hundred ${c[array[2]]}`.trim()
        } else {
            return `${a[array[0]]}hundred ${b[array[1]]} ${a[array.at(-1)]}`.trim()
        }
        
    } else {
        return 'zero'
    }

}
