import {useState} from "react";

const ProxyState = ({ children }) => {
    const [state, setState] = useState({});

    const proxyState = new Proxy(state, {
        get: (target, prop) => {
            if (prop.startsWith('set')) {
                prop = prop.toLowerCase().slice(3);
                return value => {
                    setState({ ...state, [prop]: value });
                };
            }
            return state[prop];
        }
    });

    return children(proxyState);
};

export default ProxyState;
