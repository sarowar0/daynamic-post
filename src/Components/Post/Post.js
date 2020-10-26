import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 380,
        height: 270,
        backgroundColor: '#fbfbfb'
    },
    title: {
        borderBottom: '1px solid lightgray',
        paddingBottom: 10,
    },
    button: {
        border: '1px',
        backgroundColor: '#ebe9e9',
        padding: '5px 20px',
        color: "green",
        textDecoration: "none",
    },
    hover: {
        textDecoration: "none",
    }

});

export default function Post(props) {
    const { title, body, id } = props.post;
    const classes = useStyles();

    return (
        <div className="col-lg-4 col-md-6 mb-4 float-left">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="TextPrimary" component="p">
                            {body}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/post/${id}`} className={classes.hover}>
                        <Button className={classes.button} size="small" color="primary">
                            Read More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}


