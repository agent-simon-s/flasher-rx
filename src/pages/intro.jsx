import {Link} from "react-router-dom";
import ContentCardComp from '../layouts/content-card/card-comp';
import '../app.scss'

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
            <h3 >Planned Improvements </h3> 
                <ul className="todos">
                    <li className="todo">  Fix routes</li>
                    <li className="todo">  Fix subdomain</li>
                    <li className="done">  Score Card</li>
                    <li className="done">  Result Score</li>
                    <li className="todo">  History</li>
                    <li className="done">  Error Tracker</li>
                    <li className="todo">  Resurface Errors</li>
                    <li className="done">  Average Score</li>
                    <li className="todo">  Account</li>
                    <li className="todo">  login</li>
                    <li className="todo">  Test by subject</li>
                    <li className="todo">  Dark Mode</li>
                    <li className="todo">  High Contrast Mode</li>
                    <li className="todo">  Fixed Buttons?</li>
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
// context for score seperate from quiz
// context for question pool seperate from quiz
// card moved to layouts
// !!! car gets class passed to it
// !!! fucntion to close modal & reset quiz
// medai query condisiton on score card
// untilties component with percent fucntion
// mre questions
// evn for lcoal fetch only
// class conditiona on final score 