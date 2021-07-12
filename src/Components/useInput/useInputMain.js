import {Link} from "react-router-dom";
import useInput from './useInput'

function UseInputMain() {
const username = useInput('')
const password = useInput('')

    return (
        <div>
            <input {...username} type={'text'} placeholder={'username'}/>
            <input {...password} type={'text'} placeholder={'password'}/>
            <button onClick={() => console.log(username.value, password.value)}>Кнопочка</button>
            <Link to="/">Back</Link>
        </div>
    );
}

export default UseInputMain;
