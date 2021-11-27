import React from 'react'

export const AppHeader: React.FC<{}> = () => {
    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className="header center orange-text">React Books</h1>
                <div className="row center">
                    <h5 className="header col s12 light">Responsive demo using React and Material Design</h5>
                </div>
                <div className="row center">
                    <button id="download-button" className="btn-large waves-effect waves-light orange">
                        "My Comments"
                    </button>
                </div>
            </div>
        </div>
    )
}
