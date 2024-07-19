import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@mui/material';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BASE_URL } from '../services/APIConfig';

const DishCard = ({ item, deleteDish, handleExpandClick, expanded }) => {
  return (
    <Card>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <BsThreeDotsVertical />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => deleteDish(item._id)}>
            Delete
          </Dropdown.Item>
          {/* <Dropdown.Item onClick={() => editDish()}>
            Edit Dish
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
      <h2>{item.dishName}</h2>
      <CardMedia
        component="img"
        height="194"
        image={`${BASE_URL}/${item.thumbnail}`}
        alt="Dish Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          expand={expanded[item._id]}
          onClick={() => handleExpandClick(item._id)}
          aria-expanded={expanded[item._id]}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded[item._id]} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {/* Recipe method here */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DishCard;
