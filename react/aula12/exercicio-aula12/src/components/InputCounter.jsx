import { useRef } from 'react';
import { useState } from 'react';

export default function InputCounter() {
    const [counter, setCounter] = useState(0);

    const inputRef = useRef(null);

    const handleChangeInput = () => {
        setCounter(inputRef.current.value.length);
    };

    return (
        <div>
            <input type="text" ref={inputRef} onChange={handleChangeInput} />
            <p>Total de caracteres: {counter}</p>
        </div>
    );
}
