import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useState } from "react";
const App = () => {
    const [clicks, setClicks] = useState({
        good: 0,
	neutral: 0,
	bad: 0,
    });
    
    const updateFeedback = feedbackType  => {
        setClicks({
            ...clicks,
            [feedbackType ]: clicks[feedbackType] + 1,
        });

    }
     const resetFunction = (clicks)  => {
         setClicks({ good: 0,
	neutral: 0,
	bad: 0,})

    }
    

    const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
console.log(totalFeedback)

    return (
        <>
        <Description />
            <Options
                resetFunction={resetFunction}
                updateFeedback={updateFeedback}
                clicks={clicks}
                totalFeedback={totalFeedback}
                
            />
            {totalFeedback ? <Feedback
                clicks={clicks}
                totalFeedback={totalFeedback}
            /> : <Notification />
                
        }
                 
        </>
        
    )
}

export default App;