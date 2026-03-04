import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

const SelfAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'How often do you feel overwhelmed by your responsibilities?',
      options: [
        { value: 1, label: 'Rarely or never', score: 1 },
        { value: 2, label: 'Sometimes', score: 2 },
        { value: 3, label: 'Often', score: 3 },
        { value: 4, label: 'Almost always', score: 4 },
      ],
    },
    {
      id: 2,
      question: 'How well are you sleeping lately?',
      options: [
        { value: 1, label: 'Very well, 7-9 hours consistently', score: 1 },
        { value: 2, label: 'Fairly well, with occasional disruptions', score: 2 },
        { value: 3, label: 'Poorly, often restless or insufficient', score: 3 },
        { value: 4, label: 'Very poorly, chronic sleep issues', score: 4 },
      ],
    },
    {
      id: 3,
      question: 'Do you feel connected to friends, family, or community?',
      options: [
        { value: 1, label: 'Yes, I have strong support systems', score: 1 },
        { value: 2, label: 'Somewhat, but could be stronger', score: 2 },
        { value: 3, label: 'Not really, I often feel isolated', score: 3 },
        { value: 4, label: 'No, I feel very alone', score: 4 },
      ],
    },
    {
      id: 4,
      question: 'How often do you engage in activities you enjoy?',
      options: [
        { value: 1, label: 'Regularly, several times a week', score: 1 },
        { value: 2, label: 'Occasionally, when I have time', score: 2 },
        { value: 3, label: 'Rarely, I struggle to find time or motivation', score: 3 },
        { value: 4, label: 'Almost never, I\'ve lost interest', score: 4 },
      ],
    },
    {
      id: 5,
      question: 'How would you rate your ability to manage stress?',
      options: [
        { value: 1, label: 'Excellent, I have effective coping strategies', score: 1 },
        { value: 2, label: 'Good, I manage most of the time', score: 2 },
        { value: 3, label: 'Fair, I struggle frequently', score: 3 },
        { value: 4, label: 'Poor, I feel unable to cope', score: 4 },
      ],
    },
  ];

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, answer) => sum + answer.score, 0);
  };

  const getResultsFeedback = () => {
    const score = calculateScore();
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 35) {
      return {
        title: 'You\'re Doing Great! 🌟',
        message: 'Your responses suggest you\'re managing your mental wellness effectively. Keep up the good work with your self-care practices and healthy habits.',
        color: 'text-primary',
        bgColor: 'bg-primary/10 border-primary/20',
        tips: [
          'Continue your current self-care routines',
          'Share your strategies with friends who might benefit',
          'Stay connected with your support network',
        ],
      };
    } else if (percentage <= 60) {
      return {
        title: 'Room for Improvement 🌱',
        message: 'You\'re experiencing some challenges with your mental wellness. Consider incorporating more self-care activities and reaching out for support when needed.',
        color: 'text-secondary',
        bgColor: 'bg-secondary/10 border-secondary/20',
        tips: [
          'Establish a consistent sleep schedule',
          'Try mindfulness or meditation practices',
          'Connect with friends or family regularly',
          'Engage in physical activity you enjoy',
        ],
      };
    } else {
      return {
        title: 'Consider Seeking Support 💙',
        message: 'Your responses indicate you may be experiencing significant stress or mental health challenges. Remember, seeking help is a sign of strength, not weakness.',
        color: 'text-accent',
        bgColor: 'bg-accent/10 border-accent/20',
        tips: [
          'Talk to a trusted friend, family member, or counselor',
          'Contact your school\'s counseling services',
          'Consider professional mental health support',
          'Practice self-compassion and be patient with yourself',
        ],
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const results = getResultsFeedback();
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8 w-full glass-card p-8 md:p-10"
      >
        <div className={`p-8 rounded-[24px] border shadow-sm ${results.bgColor}`}>
          <h3 className={`font-heading text-[28px] font-medium mb-4 ${results.color}`}>{results.title}</h3>
          <p className="body-text text-foreground/90 mb-8">{results.message}</p>
          
          <div className="space-y-4 bg-background/50 p-6 rounded-[20px] backdrop-blur-sm border border-border/50">
            <h4 className="font-heading font-semibold text-lg text-foreground">Recommendations:</h4>
            <ul className="space-y-3">
              {results.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${results.color}`} />
                  <span className="body-text text-foreground/90">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-muted/30 p-5 rounded-[20px] border border-border/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground italic">
            <strong>Important:</strong> This assessment is for educational purposes only and is not a diagnostic tool. 
            If you're experiencing mental health concerns, please consult with a qualified healthcare professional.
          </p>
        </div>

        <Button onClick={handleRestart} size="lg" className="w-full sm:w-auto rounded-xl gradient-btn">
          <RotateCcw className="w-5 h-5 mr-2" />
          Take Assessment Again
        </Button>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = answers[question.id] !== undefined;

  return (
    <div className="space-y-8 w-full glass-card p-8 md:p-10">
      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-medium text-muted-foreground">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner border border-border/50">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <h3 className="font-heading text-[28px] font-medium text-foreground">{question.question}</h3>
          
          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(question.id, option)}
                className={`w-full p-5 text-left rounded-[20px] border transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  answers[question.id]?.value === option.value
                    ? 'border-primary bg-primary/10'
                    : 'border-border/50 bg-background/50 hover:border-primary/40 hover:bg-background/80'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    answers[question.id]?.value === option.value
                      ? 'border-primary bg-primary'
                      : 'border-muted-foreground/40'
                  }`}>
                    {answers[question.id]?.value === option.value && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="body-text text-foreground">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            size="lg"
            className="w-full sm:w-auto rounded-xl mt-4 gradient-btn"
          >
            {currentQuestion < questions.length - 1 ? (
              <>
                Next Question
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            ) : (
              'View Results'
            )}
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SelfAssessment;