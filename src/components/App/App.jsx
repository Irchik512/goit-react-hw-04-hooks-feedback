import { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  const handleIncrementFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return Good + Neutral + Bad;
  };
  const countPositiveFeedbackPercentage = () =>
    Math.round((Good * 100) / countTotalFeedback());

  return (
    <>
      <Section>
        <h2>Please leave Feedback</h2>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleIncrementFeedback}
        />
      </Section>
      <Section>
        <h2>Statistics</h2>
        {countTotalFeedback() < 1 ? (
          <Notification message="There is no feedback yet. Would you live the first one?" />
        ) : (
          <Statistics
            Good={Good}
            Neutral={Neutral}
            Bad={Bad}
            Total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

// class OldApp extends Component {
//   state = {
//     Good: 0,
//     Neutral: 0,
//     Bad: 0,
//   };

//   handleIncrementFeedback = e => {
//     const { name } = e.target;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };
//   countTotalFeedback = () => {
//     const { Good, Neutral, Bad } = this.state;
//     return Good + Neutral + Bad;
//   };

//   countPositiveFeedbackPercentage = () =>
//     Math.round((this.state.Good * 100) / this.countTotalFeedback());

//   render() {
//     const options = Object.keys(this.state);
//     return (
//       <>
//         <Section>
//           <h2>Please leave Feedback</h2>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleIncrementFeedback}
//           />
//         </Section>
//         <Section>
//           <h2>Statistics</h2>
//           {this.countTotalFeedback() < 1 ? (
//             <Notification message="There is no feedback yet. Would you live the first one?" />
//           ) : (
//             <Statistics
//               Good={this.state.Good}
//               Neutral={this.state.Neutral}
//               Bad={this.state.Bad}
//               Total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
