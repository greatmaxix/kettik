import { animated, useSpring } from '@react-spring/web'

export default function Header() {
    const springs = useSpring({
      from: { x: -500 },
      to: { x: 0 },
    }) 

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light">
          <animated.div
            style={{
                ...springs
            }}
            className="container-fluid">
            <a className="navbar-brand" href="#intro">Kettik</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#intro">Интро</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#whoAreWe">Кто мы?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contactUs">Обратная связь</a>
                </li>
              </ul>
            </div>
          </animated.div>
        </nav>
    )
}