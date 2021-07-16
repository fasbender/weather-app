import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "#424242",
    color: "#ffffff"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({Weather, weather, search, setSearch, temperature, date}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={weather.name}
        subheader={weather.name && date(new Date())}
      />
      <CardMedia
        className={classes.media}
        image={temperature.temp > 16 ? `${process.env.PUBLIC_URL}/images/warm-bg.jpg` : `${process.env.PUBLIC_URL}/images/cold-bg.jpg`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" component="p">
             {temperature.temp}{temperature.temp && <span>&#x2103;</span>}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <TextField style={{width: '100%'}} id="standard-basic" label="Search..." onChange={(e) => setSearch(e.target.value)} onKeyPress={Weather} value={search}/>
      </CardActions>
    </Card>
  );
}
