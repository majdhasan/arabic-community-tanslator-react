import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextInput from './TextInput';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        margin: 'auto',
        fontWeight: 'bold',
        fontSize: '3rem'

    },
    media: {
        height: 140,
    },
});

export default function PostCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Do you Speak Arabic?
                    </Typography>

            </CardContent>

            <CardActions>
                <Button size="small" color="primary">
                    Translate
                </Button>
                <Button size="small" color="primary">
                    Show Translations
                </Button>
            </CardActions>
            <TextInput />
            <Button size="small" color="primary">
                    Publish
                </Button>
        </Card>
    );
}
