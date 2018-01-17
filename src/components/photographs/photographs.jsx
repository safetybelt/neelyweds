import React, { Component, PropTypes } from 'react';
import json from 'data/data.json';
import { Banner } from 'components';

const images = json.photos.map((img) => Object.assign({}, img, { url: require(`img/${img.title}.jpg`) }));
// const images = json.photos.map((img) => require(`img/${img}.jpg`));

import './photographs.scss';

/* eslint-disable react/no-multi-comp */

class Photographs extends Component {
    state = {
        selected: null,
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft': 
                this.selectImage('prev');
                break;
            case 'ArrowRight':
                this.selectImage('next');
                break;
            case 'Escape':
                this.selectImage(null);
                break;
            default:
                break;
        }
    }

    selectImage(idx) {
        if (idx === 'prev' && this.state.selected !== null) {
            idx = this.state.selected - 1 || 0;
        } else if (idx === 'next' && this.state.selected !== null) {
            idx = this.state.selected + 1 || images.length -1;
        }

        if (idx < 0) {
            idx = images.length - 1;
        } else if (idx >= images.length) {
            idx = 0;
        }

        return this.setState({
            selected: idx,
        });
    }

    render() {
        const selected = images[this.state.selected] || null;
        return (
            <section className="photographs">
                <Banner title="photographs" />
                <div className="hella-trendy">
                    {images.map((img, i) => (
                        <img key={i} src={img.url} onClick={() => this.selectImage(i)} />
                    ))}
                </div>
                {!selected ? null : (
                    <div className="photo-details">
                        <div className="photo-cover" onClick={() => this.selectImage(null)} />
                        <div className="arrow-wrapper left" onClick={() => this.selectImage('prev')}>
                            <i className="icon navicon ion-chevron-left" />
                        </div>
                        <div className="photo-wrapper">
                            <img src={selected.url} />
                            <i className="icon navicon navicon-close ion-close" onClick={() => this.selectImage(null)} />
                        </div>
                        <div className="arrow-wrapper right" onClick={() => this.selectImage('next')}>
                            <i className="icon navicon ion-chevron-right" />
                        </div>
                    </div>
                )}
            </section>
        );
    }
};

/* eslint-enable */

export default Photographs;
