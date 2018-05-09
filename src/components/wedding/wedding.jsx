import React, { Component } from 'react';
import './wedding.scss';
import day from 'data/day.json';
import inTown from 'data/inTown.json';
import itinerary from 'data/itinerary.json';
import { getLayoutFromJson } from 'utils';
import { Banner } from 'components';

// too lazy to actually get the calculated width; manually setting rem size here since i know the padding from the css
const rem = 16;

// const Wedding = () => (
class Wedding extends Component {
    constructor(props) {
        super(props);
        this.setSectionRef = (element) => this.section = element;
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        console.log('SEC', this.section);
        if (this.section && this.state.width !== this.section.offsetWidth) {
            this.setState({ width: this.section.offsetWidth });
        }
    }

    state = { width: 320 }

    render() {
        const width = this.state.width - 2 * rem;
        return (
            <section className="wedding" ref={this.setSectionRef}>
                <Banner title="the big day" />
                {getLayoutFromJson(day)}
                <iframe src="https://www.google.com/maps/d/embed?mid=1KuT9CnVd_ne7DhVytoV8JV9q8h0XYtxw" width={width} height="320"></iframe>
                <Banner title="weekend itinerary" />
                {getLayoutFromJson(itinerary)}
                <Banner title="while you're in town" />
                <div className="in-town-wrapper">
                    {getLayoutFromJson(inTown)}
                </div>
            </section>
        );
    }
}

export default Wedding;


// md-beer = beer
// md-restaurant = food
// md-camera = site seeing
// ios-people = family friendly
// ios-cafe = coffee
