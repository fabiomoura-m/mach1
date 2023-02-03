import { useCallback } from 'react';
import { useState } from 'react';

export default function ClickCounter() {
    const [counter, setCounter] = useState(0);

    const addCounter = useCallback(
        () => setCounter(counter => counter + 1),
        [counter]
    );

    return (
        <div>
            <button onClick={addCounter}>Adicionar</button>
            <p>{counter}</p>
        </div>
    );
}
