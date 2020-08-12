import Link from 'next/link';
const Navbar =() => (
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Movie</a>
              </li>
              <li className="nav-item">
                <Link href="/"><a className="nav-link">Home</a></Link>
              </li>
              <li className="nav-item">
              <Link href="/about"><a className="nav-link">About</a></Link>
              </li>
            </ul>
          </div>
        </nav>
     </div>
);

export default Navbar;