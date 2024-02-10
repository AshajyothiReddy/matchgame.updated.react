import './index.css'

const Scorecard = props => {
  const {score, onClickPlayagain} = props

  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy"
        alt="trophy"
      />
      <div className="your-score-container">
        <p className="your-score-heading">YOUR SCORE</p>
        <p className="your-score-heading">{score}</p>
      </div>
      <button
        className="playagain-btn"
        type="button"
        onClick={onClickPlayagain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="playagain-img"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default Scorecard
