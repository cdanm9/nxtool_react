'use client'
import { useState,useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import PropTypes from 'prop-types';

export default function SideBarIconApprove(props) {  
  const ICON = require('assets/Check.json');     
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
