import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import lessons from '../data/lessons';
import '../styles/Lesson.css';


function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { coins, setCoins, completedLessons, setCompletedLessons } = useContext(AppContext);
  const lessonIndex = parseInt(id) - 1;
  const lesson = lessons[lessonIndex];

  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = () => {
if (selected) {
  const correct = selected === lesson.quiz.answer;
  setIsCorrect(correct);
  setAnswered(true);

  // ✅ Only update progress if not already completed
  if (!completedLessons.includes(lesson.id)) {
    setCompletedLessons([...completedLessons, lesson.id]);

    // ✅ Optional: only reward coins if correct
    if (correct) {
      setCoins(coins + 10); // 10 coins per lesson (or any amount you prefer)
    }
  }
}

  };

  const handleNext = () => {
    if (lessonIndex < lessons.length - 1) {
      navigate(`/lesson/${lessonIndex + 2}`);
    } else {
      navigate('/complete');
    }
  };

  useEffect(() => {
    setSelected(null);
    setAnswered(false);
    setIsCorrect(false);
  }, [id]);

  return (
    <div className="lesson">
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>

      <div className="quiz">
        <h3>{lesson.quiz.question}</h3>
        {lesson.quiz.options.map((opt) => (
          <label key={opt} className={`option ${selected === opt ? 'selected' : ''}`}>
            <input
              type="radio"
              name="quiz"
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
              disabled={answered}
            />
            {opt}
          </label>
        ))}

        {!answered ? (
          <button onClick={handleAnswer} className="quiz-btn" disabled={!selected}>Submit Answer</button>
        ) : (
          <>
            <p className={isCorrect ? 'correct' : 'incorrect'}>
              {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
            </p>
            <button onClick={handleNext} className="quiz-btn">Next Lesson</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Lesson;
