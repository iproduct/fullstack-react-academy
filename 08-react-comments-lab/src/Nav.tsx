import React from 'react'

export const Nav :React.FC<{}> = () => {
    return (
        <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#name">Books</a></li>
            <li><a href="#name">Favourites</a></li>
          </ul>


          <ul id="nav-mobile" className="sidenav">
            <li><div className="user-view">
              <div className="background">
                <img src="images/office.jpg" alt="menu-image" />
              </div>
              <a href="#name"><span className="white-text name">Author: Trayan Iliev</span></a>
            </div>
            </li>
            <li><a href="#name"><i className="material-icons">book</i>Books</a></li>
            <li><a href="#!" ><i className="material-icons">cloud</i>Favourites</a></li>

            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
          </ul>

          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
}
