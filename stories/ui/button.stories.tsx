import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, Trash2 } from 'lucide-react';

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon', 'xs', 'icon-xs', 'icon-sm', 'icon-lg'],
        },
        shape: {
            control: 'select',
            options: ['default', 'oval', 'pill', 'rect'],
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Button',
    },
};

export const Oval: Story = {
    args: {
        variant: 'default',
        shape: 'oval',
        children: 'Oval Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
};

export const OvalSecondary: Story = {
    args: {
        variant: 'secondary',
        shape: 'oval',
        children: 'Oval Secondary',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Destructive',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost',
    },
};


export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Link',
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Mail className="size-4" />
                Login with Email
            </>
        ),
    },
};

export const WithIconRight: Story = {
    args: {
        children: (
            <>
                Get Started
                <ArrowRight className="size-4" />
            </>
        ),
    },
};

export const IconOnly: Story = {
    args: {
        size: 'icon',
        children: <Trash2 className="size-4" />,
    },
};

export const IconOnlySmall: Story = {
    args: {
        size: 'icon-sm',
        children: <Trash2 className="size-4" />,
    },
};

export const IconOnlyExtraSmall: Story = {
    args: {
        size: 'icon-xs',
        children: <Trash2 className="size-4" />,
    },
};
