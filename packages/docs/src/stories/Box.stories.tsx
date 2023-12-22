import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@next-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
