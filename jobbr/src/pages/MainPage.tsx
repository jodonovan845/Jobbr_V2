import React, { useState, useEffect } from 'react';
import Sidebar from '../containers/Sidebar';
import JobContent from '../containers/JobContent';
import { Listing } from '../../types';

function MainPage() {
  const [listings, setListings] = useState<Listing[] | []>([]);

  return (
    <div>
      <Sidebar setListings={setListings} />
      <JobContent />
    </div>
  );
}

export default MainPage;
