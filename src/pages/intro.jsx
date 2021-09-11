import {Link} from "react-router-dom";
import ContentCardComp from '../components/content-card/card-comp.jsx';

function IntroPage() {
    return (
        <div>
            <ContentCardComp>
                <h1>FlashRX</h1>
                <p>Welcome to FlashRX a flashcard inspired study tool.</p>
                <p>Ready to try <Link to="/all">the Quiz</Link>?</p>
                <p>If you have questions or want to learn more checkout <Link to="/faq">the F.A.Q.</Link></p>
                <p>Add questions to the pool, <Link to="/add">New Questions Here</Link></p>
            </ContentCardComp>
            <ContentCardComp>
            <h3>Planned Improvements </h3>
                <ul>
                    <li className="todo">+ Score Card</li>
                    <li className="todo">+ Result Score</li>
                    <li className="todo">+ History</li>
                    <li className="done">+ Error Tracker</li>
                    <li className="done">+ Resurface Errors</li>
                    <li className="done">+ Average Score</li>
                    <li className="done">+ Account</li>
                    <li className="done">+ login</li>
                    <li className="todo">+ Test by subject</li>
                    <li className="todo">+ Dark Mode</li>
                    <li className="todo">+ High Contrast Mode</li>
                    <li className="todo">+ Fixed Buttons?</li>
                </ul>
            </ContentCardComp>
        </div>
    )
}

export default IntroPage;

// Notes:
// x Add  myAnswerIs constant
// x Add check values vs myAnswerIs
// x Add check & x icons on reveal
// x Add functn to 'ask' first question in array
// x reset function
// _ back button
// x counter / progress tracker
// _ score tracker 
// _ end score tracker 
// History
// error tracker
// error inject
// Account
// login