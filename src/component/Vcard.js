import React from 'react'

function Vcard(props) {

    let var1 = 'Israel'
    const PI = 3.14

    let majorThanPI = (PI > 3.14) ? 'yes' : 'no'

    //Print name length on the browser.
    console.log('HolaW!  ' + props.name.length)
    console.log('var1: ' + var1)
    console.log('PI: ' + PI)

    for (let counter = 1; counter < 10; counter++) {
        console.log(counter+2)
    }

    return (
        <div>
            <h1>Vcard {props.name}</h1>
        </div>
    )
}

export default Vcard