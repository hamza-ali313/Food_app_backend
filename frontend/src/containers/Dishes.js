import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../services/APIConfig";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Dishes() {
  const [expanded, setExpanded] = useState({});
  const [data, setData] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/dishes/`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };

  useEffect(() => {
    fetchDishes();
    console.log(expanded[0])
  }, []);

// [id]: !prevState[id] updates the value of the id key in the expanded object. If prevState[id] is undefined
// (initial state), then !undefined evaluates to true, setting the value to true. If prevState[id] is true, 
// !true evaluates to false, setting the value to false. This is how the toggle functionality works.

  const handleExpandClick = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <Container>
        <Row className="">
          {data.map((item) => (
            <Col lg={4} key={item._id} className="mb-5">
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.dishName}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={`${BASE_URL}/${item.thumbnail}`}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded[item._id]}
                    onClick={() => handleExpandClick(item._id)}
                    aria-expanded={expanded[item._id]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded[item._id]} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
