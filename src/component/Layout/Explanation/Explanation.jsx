
import classes from "./Explanation.module.css";

const Explanation = (props) => {
  return (
    <div className={classes.explanation}>
      <span className={classes.explanationTitle}>{props.title}</span>
      <p className={classes.explanationWrite}>{props.explanation}</p>
    </div>
  );
};

export default Explanation;
