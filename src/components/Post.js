import React from "react";
import {Card} from 'react-bootstrap';
import './post.css';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function Post(props){


    return(
        <div className="post-div">
            <Card className="post-card">
                <Card.Title className="post-title">{props.title}</Card.Title>
                <Card.Img className="post-image" src={props.image}></Card.Img>
                <Card.Body>
                    <Card.Subtitle className="post-date">{props.date}</Card.Subtitle>
                    <div className="like-button">
                        <FormControlLabel
                            className="like-button"
                            control={<Checkbox icon={<FavoriteBorder />} 
                                    checkedIcon={<Favorite />}
                            name="checkedH" />}
                        />
                    </div>
                    <Card.Text className="post-description">{props.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post;