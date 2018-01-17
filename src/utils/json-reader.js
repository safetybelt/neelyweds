import React from 'react';

function replaceLinks(text, links = []) {
    links.forEach((link) => {
        text = text.replace('{link}',
            `<a href="${link.url}" target="_blank" class="${link.class || ''}">${link.text}</a>`
        );
    });
    return text;
}

function replaceIcons(text, icons = []) {
    icons.forEach((icon) => {
        if (!icon.hasOwnProperty('icon')) {
            icon = { icon };
        }
        text = text.replace('{icon}', `<span class="icon"><i class="${icon.icon}" ${icon.size ? `style="font-size: ${icon.size}"` : ''}></i><span>${icon.text || ''}</span></span>`);
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
    html = replaceIcons(html, element.icons);
    html = handleType(html, element.type);

    return { __html: html };
}

function getTypeIcons(types = null) {
    return !types ? null : (
        <span className="types-wrapper">
            {types.map((type) => (
                <span key={type} className="icon"><i className={type} /></span>
            ))}
        </span>
    );
}

export function getLayoutFromJson(json) {
    return json.map((elem, idx) => {
        if (elem.hasOwnProperty('image')) {
            const img = require(`img/${elem.image}`);
            return <img key={idx} src={img} />;
        } else if (elem.hasOwnProperty('text')) {
            return <p key={idx} className={elem.class || null}>{getTypeIcons(elem.types)}<span dangerouslySetInnerHTML={parseElement(elem)} /></p>;
        } else {
            return <p key={idx}>{elem}</p>;
        }
    });
}
