import {Link} from "react-router-dom";
import {useRef} from 'react';
import useHover from './useHover'

export const HoverTwo = () => {
    const ref = useRef()
    const isHover = useHover(ref)

    return (
        <main>
            <Link to="/">Back</Link>
            <div style={{width: 300, height: 300, background: isHover ? 'saddlebrown' : 'green'}} ref={ref}>
                <button onClick={() => console.log(ref.current)}>Кнопочка</button>
            </div>
        </main>
    );
};
