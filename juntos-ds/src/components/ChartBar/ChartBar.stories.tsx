import type { Meta, StoryObj } from '@storybook/react'
import { ChartBar } from './ChartBar'

const meta: Meta<typeof ChartBar> = {
  title: 'Components/ChartBar',
  component: ChartBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Total fill percentage 0–100',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    negative: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof ChartBar>

// ── Single series ─────────────────────────────────────────────

export const VerticalPositive: Story = {
  args: { value: 75, orientation: 'vertical' },
}

export const VerticalNegative: Story = {
  args: { value: 75, orientation: 'vertical', negative: true },
}

export const HorizontalPositive: Story = {
  args: { value: 75, orientation: 'horizontal' },
}

export const HorizontalNegative: Story = {
  args: { value: 75, orientation: 'horizontal', negative: true },
}

// ── Stacked 2 series ─────────────────────────────────────────

export const VerticalStacked2: Story = {
  args: {
    value: 75,
    orientation: 'vertical',
    series: [{}, {}],
  },
}

export const HorizontalStacked2: Story = {
  args: {
    value: 75,
    orientation: 'horizontal',
    series: [{}, {}],
  },
}

// ── Stacked 3 series ─────────────────────────────────────────

export const VerticalStacked3: Story = {
  args: {
    value: 75,
    orientation: 'vertical',
    series: [{}, {}, {}],
  },
}

export const HorizontalStacked3: Story = {
  args: {
    value: 75,
    orientation: 'horizontal',
    series: [{}, {}, {}],
  },
}

// ── All percentages — Figma showcase ─────────────────────────

export const AllVerticalPercentages: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
      {[10, 25, 50, 75, 100].map((v) => (
        <ChartBar key={v} value={v} orientation="vertical" aria-label={`${v}%`} />
      ))}
    </div>
  ),
}

export const AllVerticalStacked2: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
      {[10, 25, 50, 75, 100].map((v) => (
        <ChartBar key={v} value={v} orientation="vertical" series={[{}, {}]} aria-label={`${v}% stacked 2`} />
      ))}
    </div>
  ),
}

export const AllVerticalStacked3: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
      {[10, 25, 50, 75, 100].map((v) => (
        <ChartBar key={v} value={v} orientation="vertical" series={[{}, {}, {}]} aria-label={`${v}% stacked 3`} />
      ))}
    </div>
  ),
}

export const AllNegativeVertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      {[10, 25, 50, 75, 100].map((v) => (
        <ChartBar key={v} value={v} orientation="vertical" negative aria-label={`${v}% negative`} />
      ))}
    </div>
  ),
}

export const AllHorizontalPercentages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[10, 25, 50, 75, 100].map((v) => (
        <ChartBar key={v} value={v} orientation="horizontal" aria-label={`${v}%`} />
      ))}
    </div>
  ),
}

export const AllHorizontalStacked3: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[10, 25, 50, 75, 100].map((v) => (
        <ChartBar key={v} value={v} orientation="horizontal" series={[{}, {}, {}]} aria-label={`${v}% stacked 3`} />
      ))}
    </div>
  ),
}

export const AllNegativeHorizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[10, 25, 50, 75, 100].map((v) => (
        <ChartBar key={v} value={v} orientation="horizontal" negative aria-label={`${v}% negative`} />
      ))}
    </div>
  ),
}

// ── Custom colors ─────────────────────────────────────────────

export const CustomColors: Story = {
  args: {
    value: 75,
    orientation: 'vertical',
    series: [
      { color: 'var(--chart-positive)' },
      { color: 'var(--chart-warning)' },
      { color: 'var(--chart-negative)' },
    ],
  },
}
