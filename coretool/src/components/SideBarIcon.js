'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

// Dynamically import Lordicon only on the client
const Player = dynamic(() => import('@lordicon/react').then(mod => mod.Player), {
  ssr: false,
});

export default function SideBarIcon({ iconJsonName }) {
  const playerRef = useRef(null);
  const [iconData, setIconData] = useState(null);

  useEffect(() => {
    async function loadIcon() {
      const icon = await import(`assets/${iconJsonName}.json`);
      setIconData(icon.default || icon);
    }

    loadIcon();
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

SideBarIcon.propTypes = {
  iconJsonName: PropTypes.string.isRequired,
};
