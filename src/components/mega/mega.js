function generateUniqueNumber(min, max, array) {
  const aleatory = parseInt(Math.random() * (max + 1 - min)) + min
  return array.includes(aleatory) ? generateUniqueNumber(min, max, array) : aleatory
}

export function generateNumbers(quantity) {
  const numbers = Array(quantity).fill(0)
    .reduce(numbers => {
      const newNumber = generateUniqueNumber(1, 60, numbers)
      return [...numbers, newNumber]
    }, [])
    .sort((number1, number2) => number1 - number2)

  return numbers
}

console.log(generateNumbers(7));