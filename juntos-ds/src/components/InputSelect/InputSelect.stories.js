import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { InputSelect } from './InputSelect';
const SAMPLE_OPTIONS = [
    { value: '1', label: 'Headline Text' },
    { value: '2', label: 'Headline Text' },
    { value: '3', label: 'Headline Text' },
    { value: '4', label: 'Headline Text' },
    { value: '5', label: 'Headline Text' },
];
const meta = {
    title: 'Components/InputSelect',
    component: InputSelect,
    tags: ['autodocs'],
    args: {
        label: 'Label Text',
        placeholder: 'Input Text',
        options: SAMPLE_OPTIONS,
    },
    argTypes: {
        size: { control: 'select', options: ['default', 'medium', 'small'] },
        disabled: { control: 'boolean' },
        onChange: { action: 'changed' },
    },
    decorators: [
        Story => (_jsx("div", { style: { padding: 24, minHeight: 300, background: '#f7f7f7' }, children: _jsx("div", { style: { width: 342 }, children: _jsx(Story, {}) }) })),
    ],
};
export default meta;
// ---- Status variants ----
export const Collapsed = {
    args: { size: 'default' },
};
export const CollapsedMedium = {
    name: 'Collapsed / Medium',
    args: { size: 'medium' },
};
export const CollapsedSmall = {
    name: 'Collapsed / Small',
    args: { size: 'small' },
};
export const Disabled = {
    args: { disabled: true },
};
export const DisabledMedium = {
    name: 'Disabled / Medium',
    args: { size: 'medium', disabled: true },
};
export const DisabledSmall = {
    name: 'Disabled / Small',
    args: { size: 'small', disabled: true },
};
// ---- Interactive (controlled, shows expanded) ----
export const Interactive = {
    render: (args) => {
        const [val, setVal] = useState(undefined);
        return _jsx(InputSelect, { ...args, value: val, onChange: setVal });
    },
};
export const InteractiveMedium = {
    name: 'Interactive / Medium',
    render: (args) => {
        const [val, setVal] = useState(undefined);
        return _jsx(InputSelect, { ...args, size: "medium", value: val, onChange: setVal });
    },
};
export const InteractiveSmall = {
    name: 'Interactive / Small',
    render: (args) => {
        const [val, setVal] = useState(undefined);
        return _jsx(InputSelect, { ...args, size: "small", value: val, onChange: setVal });
    },
};
// ---- All sizes side by side ----
export const AllSizes = {
    render: (args) => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 32 }, children: [_jsx(InputSelect, { ...args, size: "default", label: "Default (48px)" }), _jsx(InputSelect, { ...args, size: "medium", label: "Medium" }), _jsx(InputSelect, { ...args, size: "small", label: "Small" })] })),
};
export const AllDisabled = {
    render: (args) => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: 32 }, children: [_jsx(InputSelect, { ...args, size: "default", label: "Default \u2014 Disabled", disabled: true }), _jsx(InputSelect, { ...args, size: "medium", label: "Medium \u2014 Disabled", disabled: true }), _jsx(InputSelect, { ...args, size: "small", label: "Small \u2014 Disabled", disabled: true })] })),
};
