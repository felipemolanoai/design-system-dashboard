import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value from 0 to 100',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Controls the height of the bar',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressBar>

// ---- Individual stories ----

export const Default: Story = {
  args: {
    value: 50,
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    value: 50,
    size: 'sm',
  },
}

export const Empty: Story = {
  args: {
    value: 0,
    size: 'md',
  },
}

export const Full: Story = {
  args: {
    value: 100,
    size: 'md',
  },
}

// ---- Composite: all fill levels ----

export const AllValues: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      {[0, 10, 20, 35, 50, 75, 80, 100].map((v) => (
        <ProgressBar key={v} value={v} size="md" aria-label={`Progress ${v}%`} />
      ))}
    </div>
  ),
}

// ---- Composite: both sizes side by side ----

export const BothSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '200px' }}>
        {[0, 10, 20, 35, 50, 75, 80, 100].map((v) => (
          <ProgressBar key={v} value={v} size="sm" aria-label={`Small progress ${v}%`} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '200px' }}>
        {[0, 10, 20, 35, 50, 75, 80, 100].map((v) => (
          <ProgressBar key={v} value={v} size="md" aria-label={`Medium progress ${v}%`} />
        ))}
      </div>
    </div>
  ),
}
