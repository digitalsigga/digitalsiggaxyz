import '../styles/Nav.css'

function Nav() {

  return (
    <div className="nav-container">
      <p>Sigríður Birna Matthíasdóttir</p> 
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="card">
        {/* Add card content here */}
      </div>
    </div>
  )
}

export default Nav

