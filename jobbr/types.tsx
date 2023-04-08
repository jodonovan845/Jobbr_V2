import React from 'react';

export interface Listing {
  id: HTMLInputElement;
  jobTitle: string;
  company: string;
  progress?: string;
  url: string;
  summary?: string;
  // date: Date;
}
