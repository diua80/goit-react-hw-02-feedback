import { Notification } from "./Notification";
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return(<Notification message="There is no feedback"/> )
  } else{
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive:{positivePercentage}%</p>
    </div>
  )};
};
