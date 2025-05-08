'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

// Dynamically import Lordicon Player on the client
const Player = dynamic(() => import('@lordicon/react').then(mod => mod.Player), {
  ssr: false,
});

export default function SideLayoutIcon({ iconJsonName }) {
  const playerRef = useRef(null);
  const [iconData, setIconData] = useState(null);

  useEffect(() => {
    async function loadIcon() {
      try {
        // const res = await fetch(`/icons/${iconJsonName}.json`);
        const res = await fetch(`/icons/IconSideLayout.json`);
        if (!res.ok) throw new Error('Failed to load icon JSON');
        const data = await res.json();
        setIconData(data);
      } catch (error) {
        console.error(`Error loading icon '${iconJsonName}':`, error);
      }
    }

    if (iconJsonName) loadIcon();
  }, [iconJsonName]);

  useEffect(() => {
    if (playerRef.current && iconData) {
      playerRef.current.playFromBeginning();
    }
  }, [iconData]);

  if (!iconData) return null;

  return (
    <Player
      ref={playerRef}
      icon={iconData}
      onComplete={() => {
        playerRef.current?.playFromBeginning();
      }}
    />
  );
}

SideLayoutIcon.propTypes = {
  iconJsonName: PropTypes.string.isRequired,
};
