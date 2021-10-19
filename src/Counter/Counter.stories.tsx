import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter as CounterComponent } from './Counter';

export default {
  title: 'Poligon/Counter',
  component: CounterComponent,
} as ComponentMeta<typeof CounterComponent>;

const Template: ComponentStory<typeof CounterComponent> = () => <CounterComponent />;

export const Counter = Template.bind({});
