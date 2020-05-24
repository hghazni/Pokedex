import React from 'react';
import './Card.scss';

type CardProps = {
 pokemon: any
}

export const Card: React.FunctionComponent<CardProps> = ({pokemon}, props) => {
    return (
        <>
            <div className={'Card ' + pokemon.types[0].type.name}>
                <div className={'Card__images'}>
                    <div className={'Card__images__default'}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} title={pokemon.name}/>
                        <img src={pokemon.sprites.back_default} alt={pokemon.name} title={pokemon.name}/>
                    </div>
                    <div className={'Card__images__shiny'}>
                        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} title={pokemon.name}/>
                        <img src={pokemon.sprites.back_shiny} alt={pokemon.name} title={pokemon.name}/>
                    </div>
                </div>
                <div className={'Card__stats'}>
                    <p><b>ID: </b>{pokemon.id}</p>
                    <p><b>Name: </b>{pokemon.name}</p>
                    <p><b>Types: </b>{pokemon.types.map((type:any) => {
                        return <p className={type.type.name}>{type.type.name}</p>
                    })}</p>
                    <p><b>Weight: </b>{pokemon.weight}</p>
                </div>
            </div>
        </>
    )
}