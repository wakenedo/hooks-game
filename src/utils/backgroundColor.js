export const backgroundColorYellow = (backgroundColor, points, setBackgroundColor,
  array, verificationArray, setArray, setPoints) => {

  if (backgroundColor === '#ffeb33') {
    alert('You dropped the ball 🏀 !', backgroundColor)
    setPoints(0)
    setArray([])
    return points
  } if (backgroundColor !== '#ffeb33') {
    setBackgroundColor('#ffeb33')
    let _array = [...array, backgroundColor]
    setArray(_array)
    console.log('_ARR', _array)
    verificationArray.push(backgroundColor)
  }

  return backgroundColor
}
export const backgroundColorBlue = (backgroundColor, points, setBackgroundColor,
  array, verificationArray, setArray, setPoints) => {

  if (backgroundColor === '#3388ff') {
    alert('You dropped the ball 🏀 !', backgroundColor,)
    setPoints(0)
    setArray([])
    return points
  } if (backgroundColor !== '#3388ff') {
    setBackgroundColor('#3388ff')
    let _array = [...array, backgroundColor]
    setArray(_array)
    console.log('_ARR', _array)
    verificationArray.push(backgroundColor)
  }

  return backgroundColor
}
export const backgroundColorRed = (backgroundColor, points, setBackgroundColor,
  array, verificationArray, setArray, setPoints) => {

  if (backgroundColor === '#ff3333') {
    alert(' You dropped the ball 🏀 !', backgroundColor)
    setPoints(0)
    setArray([])
    return points
  } if (backgroundColor !== '#ff3333') {
    setBackgroundColor('#ff3333')
    let _array = [...array, backgroundColor]
    setArray(_array)
    console.log('_ARR', _array)
    verificationArray.push(backgroundColor)
  }

  return backgroundColor
}