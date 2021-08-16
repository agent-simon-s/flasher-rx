import {Link} from "react-router-dom";

function IntroPage() {
    return (
        <div>
            <h1>FlashRX</h1>
            <p>Welcome to FlashRX</p>
            <p>Proceed to Quiz <Link to="/all">All</Link></p>
            <p>Proceed to FAQ <Link to="/faq">faq</Link></p>
            <p>Add to the pool, <Link to="/add">New Questions Here</Link></p>
            <p>Planned Improvements </p>
            <ul>
                <li>+ History</li>
                <li>+ Error Tracker</li>
                <li>+ Average Score</li>
                <li>+ Resurface Errors</li>
                <li>+ Account</li>
                <li>+ login</li>
            </ul>
        </div>
    )
}

export default IntroPage;