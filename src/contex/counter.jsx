import { createContext , useState} from 'react';

export const UseCounter = createContext(0);

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count +1);
    const decrement = () => setCount(count -1);

    return(
        <UseCounter.Provider value={{count, increment, decrement}}>
            {children}
        </UseCounter.Provider>
    )

}