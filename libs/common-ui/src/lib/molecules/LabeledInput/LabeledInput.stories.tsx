import type {Meta, StoryObj} from '@storybook/react';

import {LabeledInput} from './LabeledInput';

const meta={
  title:'UI/Molecules/LabeledInput',
  component:LabeledInput,
  tags:['autodocs']
} satisfies Meta<typeof LabeledInput>

export default meta;

type Story=StoryObj<typeof meta>;

export const Default:Story={
  args:{

  }
};
