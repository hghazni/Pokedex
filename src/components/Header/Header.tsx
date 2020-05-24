import React from 'react';
import './Header.scss';
import { Navigation, NavigationProps } from '../Navigation/Navigation';

export const Header: React.FunctionComponent<NavigationProps> = (props) => {
    return (
        <div className={'Header'}>
            <div className={'Header__content'}>
                <div className={'Header__content-logo'}>
                </div>
                <div className={'Header__content-text'}>
                    <h1>Pokedex</h1>
                    <p>By Harry Ghazni</p>
                </div>
            </div>
            <Navigation prev={props.prev} next={props.next}/>
        </div>
    )
}