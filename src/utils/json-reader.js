import React from 'react';

function replaceLinks(text, links = []) {
    links.forEach((link) => {
        text = text.replace('{link}',
            `<a href="${link.url}" target="_blank" class="${link.class || ''}">${link.text}</a>`
        );
    });
    return text;
}

function handleType(text, type = null) {
    switch (type) {
        case 'header':
            return `<h4>${text}</h4>`;
        default:
            return text;
    }
}

function replaceBreaks(text) {
    text = text.split('{break}');
    return text.join('<br />');
}

function parseElement(element) {
    let html = replaceBreaks(element.text);

    html = replaceLinks(html, element.links);
    html = handleType(html, element.type);

    return { __html: html };
}

export function getLayoutFromJson(json) {
    return json.map((elem, idx) => {
        if (elem.hasOwnProperty('image')) {
            const img = require(`img/${elem.image}`);
            return (<img key={idx} src={img} />);             // why the fuck is this auto-indenting without the parentheses?
        } else if (elem.hasOwnProperty('text')) {
            return <p key={idx}><span dangerouslySetInnerHTML={parseElement(elem)} /></p>;
        } else {
            return <p key={idx}>{elem}</p>;
        }
    });
}
