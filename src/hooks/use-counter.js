import { useEffect, useState } from "react";

function useCounterAndLog(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count])

    function increment() {
        setCount(count + 1);
    }
    return {
        count,
        increment,
    }
}

export default useCounterAndLog