import React from 'react';

const CircularImage = (props) =>{
    return (
        <div style={styles.imgWrapper}>
            <img style={styles.image} src={props.imgSrc} alt=""/>
        </div>
    )
}

var styles = {
    imgWrapper : {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden',
    },
    image: {
        height: 80,
        width: 80,
    }
}

export default CircularImage;