import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Poligon/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const MainText = Template.bind({});
MainText.args = {
  children: 'Lorem ipsum',
};

export const SecondText = () =>
  <Text>Lorem hipstum</Text>