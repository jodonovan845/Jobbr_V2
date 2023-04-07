import React, { useState, useEffect } from 'react';
import { Listing } from '../../types';

function Sidebar({
  setListings,
}: {
  setListings: React.Dispatch<React.SetStateAction<Listing[] | []>>;
}) {
  function clickHandler(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    return;
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" required id="jobTitle" />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" required id="company" />
        </div>
        <div>
          <label htmlFor="progress">Progress</label>
          <input type="text" required id="progress" />
        </div>
        <div>
          <label htmlFor="url">URL Address</label>
          <input type="text" required id="url" />
        </div>
        <div>
          <label htmlFor="id">ID Number</label>
          <input type="text" required id="id" />
        </div>
        <div>
          <label htmlFor="summary">Summary</label>
          <textarea id="summary" required rows={5 as number}></textarea>
        </div>
        <div>
          <button>Add New Listing</button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
