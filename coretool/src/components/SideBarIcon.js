'use client'
import { useState,useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import PropTypes from 'prop-types';

export default function SideBarIcon(props) {  
  const ICON = require('assets/CartIcon.json'); 
  const playerRef = useRef(null); 
  
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])

    return (
        <Player 
            ref={playerRef} 
            icon={ ICON }
            onComplete={() => {
                playerRef.current?.playFromBeginning()
            }}
        />
    );
}


SideBarIcon.propTypes = {
    iconJsonName: PropTypes.string.isRequired
};
  