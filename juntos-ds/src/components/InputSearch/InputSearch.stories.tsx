import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputSearch } from './InputSearch'

const meta: Meta<typeof InputSearch> = {
  title: 'Components/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    onClear:  { action: 'cleared' },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof InputSearch>

// ---- State variants ----

export const Enabled: Story = {
  args: {
    value: '',
    placeholder: 'Search…',
  },
}

export const WithValue: Story = {
  args: {
    value: 'Input Text',
  },
}

export const Disabled: Story = {
  args: {
    value: 'Input Text',
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    value: 'Input Text',
    loading: true,
  },
}

// ---- All variants ----

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', background: '#f7f7f7' }}>
      <InputSearch placeholder="Search…" />
      <InputSearch value="Input Text" />
      <InputSearch value="Input Text" disabled />
      <InputSearch value="Input Text" loading />
    </div>
  ),
}

// ---- Interactive (controlled) ----

export const Interactive: Story = {
  render: () => {
    const [val, setVal] = useState('')
    return (
      <InputSearch
        value={val}
        placeholder="Type to search…"
        onChange={setVal}
        onClear={() => setVal('')}
      />
    )
  },
}
