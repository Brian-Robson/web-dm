import React, { Component } from 'react'

import DiceRoller from './Components/DiceRoller.js';

class App extends Component {
    render() {
        return(
            <div>
                <DiceRoller 
                number={1} 
                max={6}
                options={
                    ["30 silver pieces.",
                    "A rusted shortsword.",
                    "3",
                    "4",
                    "5",
                    "6"]}
                />
            </div>
        )
    }
}

export default App;