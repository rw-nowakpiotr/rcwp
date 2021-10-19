import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Poligon/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MainButton = Template.bind({});
MainButton.args = {
  label: 'Hello from main button',
};

export const SecondButton = () =>
  <Button label="Hello" bgColor="orange" />