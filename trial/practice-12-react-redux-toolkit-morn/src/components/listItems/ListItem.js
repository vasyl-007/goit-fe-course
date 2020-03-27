import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import shortId from "shortid";
import {deleteNote} from '../../redux/actions'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

// приимает note

const function ListItem(data) {
  console.log('data ---->', data);
  const classes = useStyles();

  return (
    <Card className={classes.root} id={shortId()}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../../images/notetaking.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.data.note}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.deleteNote(props.data.id)} size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

const mapDTP = {deleteNote}

export default connect(null, mapDTP)(ListItem)
