import React from 'react';

const Component01 = (props) => {
    const {items = []} = props

    if(!items.length) return null

    return (
        <div>
            <ul>
                {
                    items.map(el => (
                        <li key={el}>
                            {el}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Component01;
