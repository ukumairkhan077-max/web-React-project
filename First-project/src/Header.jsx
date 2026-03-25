import reactLogo from "./assets/react.svg"

export default function Header(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <div className="nav--logo_container">
                <img src={reactLogo} className="nav--icon" alt="React logo" />
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>
            
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}