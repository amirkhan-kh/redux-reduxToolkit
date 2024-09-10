import { createContext , useState} from 'react';

export const UseMessage = createContext(0);

export const MessageProvider = ({ children }) => {
    const [str, setStr] = useState('React.js');

    const changeStr = (newStr) => {
        setStr(newStr)
    }
    return(
        <UseMessage.Provider value={{str, changeStr}}>
            {children}
        </UseMessage.Provider>
    )

}