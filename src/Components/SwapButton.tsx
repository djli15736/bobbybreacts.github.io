import { useState } from "react";


export const SwapButton = ({change}: {change: (text: string) => void}): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    const toggle = () => {
        if (active) {
            change("GODS I WAS STRONG BACK THEN")
        } else {
            change("Wear it in silence, or I'll honor you again.");
        }
        setActive(!active);
    }

    return <button onClick = {()=> toggle()}> Swap Quote </button>
}