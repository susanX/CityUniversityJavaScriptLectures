import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import flaresImage from '../../images/flares190x235.jpg';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

// export const Default: Story = {
//   args: {},
//Use <Card title="T-Shirt" price="£199" image={img} /> anywhere.
export const Default: Story = {
  args: {
    title: 'Jeans',
    price: '£330',
    image: flaresImage,
  },
};

/*
Show different variations in Storybook.

Maintain clear type safety and styling separation.

Use <Card title="T-Shirt" price="£199" image={img} /> anywhere.
*/
// export const TShirt: Story = {
//   args: {
//     title: 'T-Shirt',
//     price: '£199',
//     image: flaresImage,
//   },
// };      