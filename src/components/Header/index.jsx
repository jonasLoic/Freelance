import { Link } from 'react-router-dom'
 
function Header() {
    const init =1
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to={`/survey/${init}`}>Quiz</Link>
        </nav>
    )
}

export default Header