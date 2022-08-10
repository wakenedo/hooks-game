export const whackPoints = (points, setPoints, whackCombo) => {
  if (whackCombo(true)) {
    var addPoints = points + 0
    var pointsAdded = addPoints
    var verification2 = points !== 0
    var verification3 = points !== pointsAdded


    // console.log('pointsAdded log:', pointsAdded,)
    // console.log('addPoints log:', addPoints,)
    // console.log('points log:', points)

    // console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    if (verification2) {
      const points = pointsAdded
      setPoints(points)
      return points
    }
    setPoints(addPoints)


    if (verification3) {
      return pointsAdded
    }
    return points
  }
}

export const weakestPoints = (points, setPoints, weakestCombo) => {
  if (weakestCombo(true)) {
    var addPoints = points + 1
    var pointsAdded = addPoints
    var verification2 = points !== 0
    var verification3 = points !== pointsAdded


    // console.log('pointsAdded log:', pointsAdded,)
    // console.log('addPoints log:', addPoints,)
    // console.log('points log:', points)

    // console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    if (verification2) {
      const points = pointsAdded
      setPoints(points)
      return points
    }
    setPoints(addPoints)


    if (verification3) {
      return pointsAdded
    }
    return points
  }
}

export const weakPoints = (points, setPoints, weakCombo) => {
  if (weakCombo(true)) {
    var addPoints = points + 2
    var pointsAdded = addPoints
    var verification2 = points !== 0
    var verification3 = points !== pointsAdded


    // console.log('pointsAdded log:', pointsAdded,)
    // console.log('addPoints log:', addPoints,)
    // console.log('points log:', points)

    // console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    if (verification2) {
      const points = pointsAdded
      setPoints(points)
      return points
    }
    setPoints(addPoints)


    if (verification3) {
      return pointsAdded
    }
    return points
  }
}

export const weirdPoints = (points, setPoints, weirdCombo) => {
  if (weirdCombo(true)) {
    var addPoints = points + 2
    var pointsAdded = addPoints
    var verification2 = points !== 0
    var verification3 = points !== pointsAdded


    console.log('pointsAdded log:', pointsAdded,)
    console.log('addPoints log:', addPoints,)
    console.log('points log:', points)
    console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    if (verification2) {
      const points = pointsAdded
      setPoints(points)
      return points
    }
    setPoints(addPoints)


    if (verification3) {
      return pointsAdded
    }
    return points
  }
}

export const regularPoints = (points, setPoints, regularCombo) => {
  if (regularCombo(true)) {
    var addPoints = points + 3
    var pointsAdded = addPoints
    var verification2 = points !== 0
    var verification3 = points !== pointsAdded


    // console.log('pointsAdded log:', pointsAdded,)
    // console.log('addPoints log:', addPoints,)
    // console.log('points log:', points)

    // console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    if (verification2) {
      const points = pointsAdded
      setPoints(points)
      return points
    }
    setPoints(addPoints)


    if (verification3) {
      return pointsAdded
    }
    return points
  }
}

export const superPoints = (points, setPoints, superCombo) => {
  if (superCombo(true)) {
    var addPoints = points + 6
    var pointsAdded = addPoints
    var verification2 = points !== 0
    var verification3 = points !== pointsAdded


    // console.log('pointsAdded log:', pointsAdded,)
    // console.log('addPoints log:', addPoints,)
    // console.log('points log:', points)

    // console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    if (verification2) {
      const points = pointsAdded
      setPoints(points)
      return points
    }
    setPoints(addPoints)


    if (verification3) {
      return pointsAdded
    }
    return points
  }
}

export const superWhackPoints = (points, superWhackCombo, setPoints) => {
  if (superWhackCombo(true)) {
    var addPoints = points - 4
    var pointsAdded = addPoints
    var verification2 = points !== 0
    var verification3 = points !== pointsAdded


    // console.log('pointsAdded log:', pointsAdded,)
    // console.log('addPoints log:', addPoints,)
    // console.log('points log:', points)

    // console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    if (verification2) {
      const points = pointsAdded
      if (points < 0) {
        setPoints(0)
      }
      setPoints(points)
      return points
    }
    setPoints(addPoints)


    if (verification3) {
      return pointsAdded
    }
    return points
  }
}
