import css from './Feedback.module.css'
const Feedback = ({ clicks , totalFeedback}) => {
    console.log(totalFeedback)
    return (
        <div>
            <p className={css.feedbackItem}>Good: {clicks.good}</p>
            <p className={css.feedbackItem}>Neutral: {clicks.neutral}</p>
            <p className={css.feedbackItem}>Bad: {clicks.bad}</p>
            <p className={css.feedbackItem}>Positive: {Math.round((clicks.good / totalFeedback) * 100)}%</p>
            
        </div>
    )
}
export default Feedback;