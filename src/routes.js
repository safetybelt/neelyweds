import { Home, Story, Photographs, Wedding, Registry } from 'components';

export default [
    { path: '/', title: 'Home', component: Home },
    { path: '/story', title: 'Our Story', component: Story },
    { path: '/photos', title: 'Photographs', component: Photographs },
    { path: '/wedding', title: 'The Big Day', component: Wedding },
    { path: '/registry', title: 'Registry', component: Registry },
];
