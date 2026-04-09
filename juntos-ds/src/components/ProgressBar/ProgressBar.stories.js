import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProgressBar } from './ProgressBar';
const meta = {
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
};
export default meta;
// ---- Individual stories ----
export const Default = {
    args: {
        value: 50,
        size: 'md',
    },
};
export const Small = {
    args: {
        value: 50,
        size: 'sm',
    },
};
export const Empty = {
    args: {
        value: 0,
        size: 'md',
    },
};
export const Full = {
    args: {
        value: 100,
        size: 'md',
    },
};
// ---- Composite: all fill levels ----
export const AllValues = {
    render: () => (_jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }, children: [0, 10, 20, 35, 50, 75, 80, 100].map((v) => (_jsx(ProgressBar, { value: v, size: "md", "aria-label": `Progress ${v}%` }, v))) })),
};
// ---- Composite: both sizes side by side ----
export const BothSizes = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '32px' }, children: [_jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '200px' }, children: [0, 10, 20, 35, 50, 75, 80, 100].map((v) => (_jsx(ProgressBar, { value: v, size: "sm", "aria-label": `Small progress ${v}%` }, v))) }), _jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '200px' }, children: [0, 10, 20, 35, 50, 75, 80, 100].map((v) => (_jsx(ProgressBar, { value: v, size: "md", "aria-label": `Medium progress ${v}%` }, v))) })] })),
};
