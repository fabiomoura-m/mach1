import { useState } from 'react';

export default function useToggle() {
    const [active, setActive] = useState(false);

    function toggle() {
        setActive(active => !active);
    }

    return { active, toggle };
}
