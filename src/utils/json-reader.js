import React from 'react';

export function getLayoutFromJson(json) {
    return json.map((elem, idx) => {
        if (elem.hasOwnProperty('image')) {
            const img = require(`img/${elem.image}`);
            return (<img key={idx} src={img} />);             // why the fuck is this auto-indenting without the parentheses?
        } else if (elem.hasOwnProperty('text')) {
            return <p key={idx}>{elem.text}</p>;
        } else {
            return <p key={idx}>{elem}</p>;
        }
    });
}
