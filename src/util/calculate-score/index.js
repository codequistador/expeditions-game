import ExpeditionsScores from '../expeditions-scores'

const calculateScores = (G) => {
  let expeditionScores = {
    0: new ExpeditionsScores(0),
    1: new ExpeditionsScores(1),
  }

  for (let i = 0; i <= 1; i++) {
    G.expeditions[i].forEach((expedition) => {
      // expeditions cost 20 points (if expedition is not empty, subtract 20 from the score of that color)
      if (expedition.cards.length > 0) {
        expeditionScores[i].addToScore(expedition.color, -20)
      }

      // add up cards in expedition and apply bets
      let score = 0
      let bets = 0
      expedition.cards.forEach((card) => {
        card.type === 'bet' && bets++
        if (card.type === 'number') {
          score += card.value
        }
      })
      expeditionScores[i].addToScore(expedition.color, score)
      expeditionScores[i].applyBets(expedition.color, bets)

      // if expedition has at least 8 cards, non-multiplied bonus of 20 points
      if (expedition.cards.length >= 8) {
        expeditionScores[i].addToScore(expedition.color, 20)
      }
    })
  }

  // Add up scores
  const p0Score = expeditionScores[0].fullScore
  const p1Score = expeditionScores[1].fullScore

  let winner = 0

  if (p0Score > p1Score) {
    winner = 0
  } else if (p1Score > p0Score) {
    winner = 1
  } else {
    winner = null
  }

  return {
    winner: winner,
    expeditionScores: {
      0: expeditionScores[0].scores,
      1: expeditionScores[1].scores,
    },
    totalScores: { 0: p0Score, 1: p1Score },
  }
}

export default calculateScores
