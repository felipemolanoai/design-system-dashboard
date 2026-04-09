import { jsx as _jsx } from "react/jsx-runtime";
import { ChartBar } from './ChartBar';
const meta = {
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
};
export default meta;
// ── Single series ─────────────────────────────────────────────
export const VerticalPositive = {
    args: { value: 75, orientation: 'vertical' },
};
export const VerticalNegative = {
    args: { value: 75, orientation: 'vertical', negative: true },
};
export const HorizontalPositive = {
    args: { value: 75, orientation: 'horizontal' },
};
export const HorizontalNegative = {
    args: { value: 75, orientation: 'horizontal', negative: true },
};
// ── Stacked 2 series ─────────────────────────────────────────
export const VerticalStacked2 = {
    args: {
        value: 75,
        orientation: 'vertical',
        series: [{}, {}],
    },
};
export const HorizontalStacked2 = {
    args: {
        value: 75,
        orientation: 'horizontal',
        series: [{}, {}],
    },
};
// ── Stacked 3 series ─────────────────────────────────────────
export const VerticalStacked3 = {
    args: {
        value: 75,
        orientation: 'vertical',
        series: [{}, {}, {}],
    },
};
export const HorizontalStacked3 = {
    args: {
        value: 75,
        orientation: 'horizontal',
        series: [{}, {}, {}],
    },
};
// ── All percentages — Figma showcase ─────────────────────────
export const AllVerticalPercentages = {
    render: () => (_jsx("div", { style: { display: 'flex', gap: '16px', alignItems: 'flex-end' }, children: [10, 25, 50, 75, 100].map((v) => (_jsx(ChartBar, { value: v, orientation: "vertical", "aria-label": `${v}%` }, v))) })),
};
export const AllVerticalStacked2 = {
    render: () => (_jsx("div", { style: { display: 'flex', gap: '16px', alignItems: 'flex-end' }, children: [10, 25, 50, 75, 100].map((v) => (_jsx(ChartBar, { value: v, orientation: "vertical", series: [{}, {}], "aria-label": `${v}% stacked 2` }, v))) })),
};
export const AllVerticalStacked3 = {
    render: () => (_jsx("div", { style: { display: 'flex', gap: '16px', alignItems: 'flex-end' }, children: [10, 25, 50, 75, 100].map((v) => (_jsx(ChartBar, { value: v, orientation: "vertical", series: [{}, {}, {}], "aria-label": `${v}% stacked 3` }, v))) })),
};
export const AllNegativeVertical = {
    render: () => (_jsx("div", { style: { display: 'flex', gap: '16px', alignItems: 'flex-start' }, children: [10, 25, 50, 75, 100].map((v) => (_jsx(ChartBar, { value: v, orientation: "vertical", negative: true, "aria-label": `${v}% negative` }, v))) })),
};
export const AllHorizontalPercentages = {
    render: () => (_jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [10, 25, 50, 75, 100].map((v) => (_jsx(ChartBar, { value: v, orientation: "horizontal", "aria-label": `${v}%` }, v))) })),
};
export const AllHorizontalStacked3 = {
    render: () => (_jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [10, 25, 50, 75, 100].map((v) => (_jsx(ChartBar, { value: v, orientation: "horizontal", series: [{}, {}, {}], "aria-label": `${v}% stacked 3` }, v))) })),
};
export const AllNegativeHorizontal = {
    render: () => (_jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [10, 25, 50, 75, 100].map((v) => (_jsx(ChartBar, { value: v, orientation: "horizontal", negative: true, "aria-label": `${v}% negative` }, v))) })),
};
// ── Custom colors ─────────────────────────────────────────────
export const CustomColors = {
    args: {
        value: 75,
        orientation: 'vertical',
        series: [
            { color: 'var(--chart-positive)' },
            { color: 'var(--chart-warning)' },
            { color: 'var(--chart-negative)' },
        ],
    },
};
