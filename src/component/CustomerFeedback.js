import React from 'react';
import { 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar,
  Rating
} from '@mui/material';

const feedbacks = [
  { 
    id: 1, 
    name: 'Jenny Wilson', 
    rating: 5, 
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger once (which is also very good). This was my second visit.'
  },
  { 
    id: 2, 
    name: 'Dianne Russell', 
    rating: 4, 
    comment: 'We enjoyed the Eggs Benedict served on homemade biscuits. Perfect service.'
  },
  { 
    id: 3, 
    name: 'Devon Lane', 
    rating: 5, 
    comment: 'Normally simple dim suchen, but there are pearl and tender, and very delicious.'
  },
];

function CustomerFeedback() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Customer's Feedback</Typography>
      <List>
        {feedbacks.map((feedback) => (
          <ListItem key={feedback.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={feedback.name} src={`/static/images/avatar/${feedback.id}.jpg`} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography component="span" variant="subtitle2" color="text.primary">
                    {feedback.name}
                  </Typography>
                  <Rating value={feedback.rating} readOnly size="small" sx={{ ml: 1 }} />
                </React.Fragment>
              }
              secondary={feedback.comment}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default CustomerFeedback;