import React, { useEffect, useState } from 'react';
import './StoriesBar.css';
import API from '../utils/API';
import { Figure } from "react-bootstrap"

function StoriesBar() {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        API.getAllStories().then(res => {
            setStories(res.data);
        })
    }, []);
    return (
        <div id="storiesBar">
            <div class="barContainer" >
            <Figure>
                        <Figure.Image
                            width={75}
                            height={75}
                            roundedCircle={true}
                            src={localStorage.getItem("bitmoji")} />
            </Figure>
                {stories.map(story => (
                    <Figure>
                        <Figure.Image
                            width={75}
                            height={75}
                            roundedCircle={true}
                            src={story.thumbnail} />
                    </Figure>
                ))}
            </div>
        </div>
    );
}

export default StoriesBar;