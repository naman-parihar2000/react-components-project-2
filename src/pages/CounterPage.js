import Button from '../components/Button'
// import useCounterAndLog from '../hooks/use-counter';
import { useState } from 'react';
import Panel from '../components/Panel.js'

function CounterPage({ initialCount }) {
    // const { count, increment } = useCounterAndLog(initialCount);

    const [count, setCount] = useState(initialCount)
    const [valueToAdd, setValueToAdd] = useState(0)

    const increment = () => {
        setCount(count + 10)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        setValueToAdd(value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setCount(count + valueToAdd);
        setValueToAdd(0)
    }

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is: {count}</h1>
            <div className='flex flex-row gap-3'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>.
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add the number with:</label>
                <input
                    value={valueToAdd || " "}
                    onChange={handleChange}
                    type="number"
                    className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add the Number!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage