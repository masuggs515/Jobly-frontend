import { useEffect, useState } from "react";


const useLocalStorage = (key, givenValue = null) => {

    const initialValue = localStorage.getItem(key) || givenValue;

    const [value, setvalue] = useState(initialValue);

    useEffect(function setKeyInLocalStorage() {

        if (value === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, value);
        }
    }, [key, value]);

    return [value, setvalue];
}

export default useLocalStorage;
