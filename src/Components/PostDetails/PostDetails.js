import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: 'auto'
  },

});

export default function PostDetails() {

  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  const classes = useStyles();

  return (
    <>
      <h4 className="text-center text-uppercase my-4 pb-4 border-bottom w-50 mx-auto">This is post details of {postId}</h4>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.body} {post.body} <br /> <br /> {post.body} {post.body} <br /> <br /> {post.body} {post.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Comments id={postId}></Comments>
    </>
  );
}
