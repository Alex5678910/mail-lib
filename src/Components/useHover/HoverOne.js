
import {useRef} from 'react';
import useHover from './useHover'

export const HoverOne = () => {
    const ref = useRef()
    const isHover = useHover(ref)

    return (
        <main>
            <div style={{width: 300, height: 300, background: isHover ? 'yellowgreen' : 'green'}} ref={ref}>
                <button onClick={() => console.log(ref.current)}>Кнопочка</button>
            </div>
        </main>
    );
};




