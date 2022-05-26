import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setScore } from '../redux/actions';
import Countdown from './Countdown';
import './TriviaQuestions.css';

class TriviaQuestions extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      answers: [],
      category: '',
      question: '',
      correct: '',
      redirect: false,
      score: 0,
      color: 'null',
      errorColor: 'null',
      isDisabled: false,
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    const fetchQuestion = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const responseQuestions = await fetchQuestion.json();
    const LAST_QUESTION = 5;
    const SECONDS_COUNTDOWN = 31000;
    const { counter } = this.state;
    if (Number(counter) === Number(LAST_QUESTION)) {
      this.setState({ redirect: true });
    }
    this.setState({ color: 'null', errorColor: 'null' });
    const {
      category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = responseQuestions.results[counter];

    this.setState({
      category,
      question,
      correct: correctAnswer,
      answers: [...incorrectAnswers, correctAnswer] });

    setTimeout(() => this.handleScore(), SECONDS_COUNTDOWN); // https://felixgerschau.com/react-hooks-settimeout/
  }

  answerClick = () => {
    this.setState((prev) => ({ counter: prev.counter + 1, isDisabled: false }),
      () => this.componentDidMount());
  }

  handleScore = () => {
    this.setState((prev) => ({ score: prev.score + 1 }));
    const { score } = this.state;
    this.setState({ color: 'assert', errorColor: 'error', isDisabled: true });
    const { asserts } = this.props;
    asserts(score);
  }

  /*   handleError= () => {
    this.setState({ errorColor: 'error', color: 'assert', isDisabled: true });
  } */

  render() {
    const { apiData } = this.props;
    const { category, question, answers, correct, redirect, color,
      errorColor, isDisabled } = this.state;
    const RANDOMIZE_NUMBER = 0.5;
    return (
      <section>
        { apiData
        && (
          <div>
            <h4
              data-testid="question-category"
            >
              {category}

            </h4>
            <Countdown isDisabled={ isDisabled } />
            <p data-testid="question-text">{question}</p>
            <div data-testid="answer-options">
              {answers.map((item, index) => (
                <button
                  type="button"
                  disabled={ isDisabled }
                  key={ index }
                  onClick={ this.handleScore }
                  className={ correct === item ? color : errorColor }
                  data-testid={
                    correct === item ? 'correct-answer' : `wrong-answer-${index}`
                  }
                >
                  { item }
                </button>
              )).sort(() => Math.random() - RANDOMIZE_NUMBER)}
            </div>
            <button
              type="button"
              onClick={ this.answerClick }
              data-testid="btn-next"
            >
              Next
            </button>
            { redirect && <Redirect to="/feedback" /> }
          </div>)}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  apiData: state.player.API,
});

const mapDispatchToProps = (dispatch) => ({
  asserts: (asserts) => dispatch(setScore(asserts)),
});

TriviaQuestions.propTypes = {
  apiData: PropTypes.arrayOf(Object).isRequired,
  asserts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TriviaQuestions);
