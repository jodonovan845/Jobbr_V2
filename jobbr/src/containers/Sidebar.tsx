import React, { useState, useEffect, useRef } from 'react';
import { Listing } from '../../types';

function Sidebar({
  setListings,
  listings,
}: {
  setListings: React.Dispatch<React.SetStateAction<Listing[] | []>>;
  listings: Listing[] | [];
}) {
  const jobTitleInputRef = useRef<HTMLInputElement>(null);
  const companyInputRef = useRef<HTMLInputElement>(null);
  const progressInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  const idInputRef = useRef<HTMLInputElement>(null);
  const summaryInputRef = useRef<HTMLTextAreaElement>(null);

  const clickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const {} =
    // setListings
    // const enteredJobTitle = jobTitleInputRef.current;
    const newListing: Listing = {
      id: idInputRef.current!.value as unknown as string,
      jobTitle: jobTitleInputRef.current!.value as unknown as string,
      company: companyInputRef.current!.value as unknown as string,
      progress: progressInputRef.current!.value as unknown as string,
      url: urlInputRef.current!.value as unknown as string,
      summary: summaryInputRef.current!.value as unknown as string,
      // date: Date;
    };

    setListings([...listings, newListing]);
    console.log('these are listings: ', listings);
    return;
  };
  return (
    <div>
      <form onSubmit={clickHandler}>
        <div>
          <label htmlFor="id">ID Number</label>
          <input type="text" required id="id" ref={idInputRef} />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" required id="jobTitle" ref={jobTitleInputRef} />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" required id="company" ref={companyInputRef} />
        </div>
        <div>
          <label htmlFor="progress">Progress</label>
          <input type="text" id="progress" ref={progressInputRef} />
        </div>
        <div>
          <label htmlFor="url">URL Address</label>
          <input type="text" required id="url" ref={urlInputRef} />
        </div>
        <div>
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            rows={5 as number}
            ref={summaryInputRef}
          ></textarea>
        </div>
        <div>
          <button>Add New Listing</button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
