import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(() => {
        const tv = childRef.current;
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        observer.current.observe(tv)

        return function () {
            observer.current.unobserve(tv)
        };
    }, [callback, childRef, parentRef])
};
