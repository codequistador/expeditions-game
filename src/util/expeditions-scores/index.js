class ExpeditionsScores {
  constructor(playerId) {
    this.playerId = playerId
    this.scores = { blue: 0, red: 0, yellow: 0, white: 0, green: 0 }
  }

  addToScore(color, score) {
    this.scores[color] += score
  }

  // 1 bet = x2, 2 bets = x3, 3 bets = x4
  applyBets(color, bets) {
    this.scores[color] *= bets + 1
  }

  get fullScore() {
    const { blue, red, yellow, white, green } = this.scores
    return blue + red + yellow + white + green
  }
}

export default ExpeditionsScores
