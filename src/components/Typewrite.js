import React from 'react'
import Typewriter from 'typewriter-effect';

const Typewrite = class extends React.Component {

    render() {
        return (

            <div>
                <Typewriter

                    onInit={(typewriter) => {
                      typewriter
                        .typeString('')
                        .pauseFor(15000)
                        .typeString('Front-end UI developer')
                        .pauseFor(1500)
                        .typeString('<strong> &#x2713</strong>')
                        .pauseFor(2500)
                        .typeString('<br/>')
                        .typeString('Front-end designer')
                        .pauseFor(1500)
                        .typeString('<strong> &#x2713</strong>')
                        .pauseFor(2500)
                        .typeString('<br/>')
                        .typeString('Front-end developer')
                        .pauseFor(1500)
                        .typeString('<strong> &#x2713</strong>')
                        .pauseFor(2500)
                        .typeString('<br/>')
                        .typeString('WordPress theme developer')
                        .pauseFor(1500)
                        .typeString('<strong> &#x2713</strong>')
                        .pauseFor(2500)
                        
                        .start()
                    }}

                />
            </div>
        )
    }
}

export default Typewrite