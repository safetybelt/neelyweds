import React from 'react';
import './story.scss';
import story from 'data/story.json';
import { getLayoutFromJson } from 'utils';
import { Banner } from 'components';

const Story = () => (
    <section className="story">
        <Banner title="our story" />
        {getLayoutFromJson(story)}
    </section>
);

export default Story;
