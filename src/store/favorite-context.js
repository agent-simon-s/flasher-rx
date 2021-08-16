import { createContext } from 'react';

const ContextFavorites = createContext({
    favorites: [],
    totalFavorites: 0
});

function ProviderContextFavorites(props) {

    const context = {};

    return <ContextFavorites.Provider value={context}>
        {props.children}
    </ContextFavorites.Provider>
}