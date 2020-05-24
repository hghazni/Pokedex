import React from 'react';

type CardProps = {
 pokemon: any;
}

export const Card: React.FunctionComponent<CardProps> = ({pokemon}) => {
    return (
        <>
                <div key={pokemon.name}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} title={pokemon.name}/>
                    <img src={pokemon.sprites.back_default} alt={pokemon.name} title={pokemon.name}/>
                    <img src={pokemon.sprites.front_shiny} alt={pokemon.name} title={pokemon.name}/>
                    <img src={pokemon.sprites.back_shiny} alt={pokemon.name} title={pokemon.name}/>
                    <p>{pokemon.id}</p>
                    <p>{pokemon.name}</p>
                    <p>{pokemon.types.map((type:any) => {
                        return <p>{type.type.name}</p>
                    })}</p>
                    <p>{pokemon.weight}</p>
                </div>
        </>
    )
}