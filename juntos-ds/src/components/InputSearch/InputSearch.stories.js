import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { InputSearch } from './InputSearch';
const meta = {
    title: 'Components/InputSearch',
    component: InputSearch,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        onClear: { action: 'cleared' },
        onChange: { action: 'changed' },
    },
};
export default meta;
// ---- State variants ----
export const Enabled = {
    args: {
        value: '',
        placeholder: 'Search…',
    },
};
export const WithValue = {
    args: {
        value: 'Input Text',
    },
};
export const Disabled = {
    args: {
        value: 'Input Text',
        disabled: true,
    },
};
export const Loading = {
    args: {
        value: 'Input Text',
        loading: true,
    },
};
// ---- All variants ----
export const AllStates = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', background: '#f7f7f7' }, children: [_jsx(InputSearch, { placeholder: "Search\u2026" }), _jsx(InputSearch, { value: "Input Text" }), _jsx(InputSearch, { value: "Input Text", disabled: true }), _jsx(InputSearch, { value: "Input Text", loading: true })] })),
};
// ---- Interactive (controlled) ----
export const Interactive = {
    render: () => {
        const [val, setVal] = useState('');
        return (_jsx(InputSearch, { value: val, placeholder: "Type to search\u2026", onChange: setVal, onClear: () => setVal('') }));
    },
};
