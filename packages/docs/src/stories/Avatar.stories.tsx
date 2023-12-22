import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@next-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/nextinhuh.png',
    alt: 'Nextinhuh',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
