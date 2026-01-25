import type { Meta, StoryObj } from '@storybook/react';
import { MissionSection } from '@/components/screens/home/2. mission-section';

const meta = {
    title: 'UI/MissionSection',
    component: MissionSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof MissionSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
