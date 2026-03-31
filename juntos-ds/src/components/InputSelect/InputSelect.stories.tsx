import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputSelect } from './InputSelect'

const SAMPLE_OPTIONS = [
  { value: '1', label: 'Headline Text' },
  { value: '2', label: 'Headline Text' },
  { value: '3', label: 'Headline Text' },
  { value: '4', label: 'Headline Text' },
  { value: '5', label: 'Headline Text' },
]

const meta: Meta<typeof InputSelect> = {
  title: 'Components/InputSelect',
  component: InputSelect,
  tags: ['autodocs'],
  args: {
    label: 'Label Text',
    placeholder: 'Input Text',
    options: SAMPLE_OPTIONS,
  },
  argTypes: {
    size:     { control: 'select', options: ['default', 'medium', 'small'] },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  decorators: [
    Story => (
      <div style={{ padding: 24, minHeight: 300, background: '#f7f7f7' }}>
        <div style={{ width: 342 }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof InputSelect>

// ---- Status variants ----

export const Collapsed: Story = {
  args: { size: 'default' },
}

export const CollapsedMedium: Story = {
  name: 'Collapsed / Medium',
  args: { size: 'medium' },
}

export const CollapsedSmall: Story = {
  name: 'Collapsed / Small',
  args: { size: 'small' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledMedium: Story = {
  name: 'Disabled / Medium',
  args: { size: 'medium', disabled: true },
}

export const DisabledSmall: Story = {
  name: 'Disabled / Small',
  args: { size: 'small', disabled: true },
}

// ---- Interactive (controlled, shows expanded) ----

export const Interactive: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | undefined>(undefined)
    return <InputSelect {...args} value={val} onChange={setVal} />
  },
}

export const InteractiveMedium: Story = {
  name: 'Interactive / Medium',
  render: (args) => {
    const [val, setVal] = useState<string | undefined>(undefined)
    return <InputSelect {...args} size="medium" value={val} onChange={setVal} />
  },
}

export const InteractiveSmall: Story = {
  name: 'Interactive / Small',
  render: (args) => {
    const [val, setVal] = useState<string | undefined>(undefined)
    return <InputSelect {...args} size="small" value={val} onChange={setVal} />
  },
}

// ---- All sizes side by side ----

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <InputSelect {...args} size="default" label="Default (48px)" />
      <InputSelect {...args} size="medium" label="Medium" />
      <InputSelect {...args} size="small" label="Small" />
    </div>
  ),
}

export const AllDisabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <InputSelect {...args} size="default" label="Default — Disabled" disabled />
      <InputSelect {...args} size="medium" label="Medium — Disabled" disabled />
      <InputSelect {...args} size="small" label="Small — Disabled" disabled />
    </div>
  ),
}
