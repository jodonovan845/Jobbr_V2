import React, { useState, useEffect } from 'react';
import { Listing } from '../../types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// id: string;
//   jobTitle: string;
//   company: string;
//   progress?: string;
//   url: string;
//   summary?: string;

function JobContent({ listing }: { listing: Listing }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {listing.id}
        </Typography>
        <Typography variant="h5" component="div">
          {listing.company}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {listing.jobTitle}
        </Typography>
        <Typography variant="body2">{listing.progress}</Typography>
        <Typography variant="body2">{listing.summary}</Typography>
        <Typography variant="body2">{listing.url}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default JobContent;
