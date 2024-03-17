import { ReactNode, createContext } from "react";

export type TodoProvidersProps = {
    children: ReactNode
}

export const todoContext = createContext(null);

export const TodoProviders = ({ children }: TodoProvidersProps) => {
    return (
        <todoContext.Provider value={ }>
            {children}
        </todoContext.Provider>
    )
}