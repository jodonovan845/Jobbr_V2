import React, { useState, useEffect } from 'react';
import { Listing } from '../../types';
import Tile from '../components/Tile';

function JobContent({ listings }: { listings: Listing[] | [] }) {
  const listingCards = listings.map((listing) => {
    return <Tile listing={listing} />;
  });

  return <div>{listingCards}</div>;
}

export default JobContent;
