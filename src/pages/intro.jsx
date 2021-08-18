import {Link} from "react-router-dom";
import ContentCardComp from '../components/content-card/card-comp.jsx';

function IntroPage() {
    return (
        <div>
            <ContentCardComp>
                <h1>FlashRX</h1>
                <p>Welcome to FlashRX</p>
                <p>Proceed to Quiz <Link to="/all">All</Link></p>
                <p>Proceed to FAQ <Link to="/faq">faq</Link></p>
                <p>Add to the pool, <Link to="/add">New Questions Here</Link></p>
                <p>Planned Improvements </p>
            </ContentCardComp>
            <ContentCardComp>
                <ul>
                    <li>+ History</li>
                    <li>+ Error Tracker</li>
                    <li>+ Average Score</li>
                    <li>+ Resurface Errors</li>
                    <li>+ Account</li>
                    <li>+ login</li>
                </ul>
            </ContentCardComp>
        </div>
    )
}

export default IntroPage;