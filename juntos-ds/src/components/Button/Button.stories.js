import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './Button';
const meta = {
    title: 'Components/Button',
    component: Button,
    // 'autodocs' generates a documentation page automatically from the props interface
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost'],
            description: 'Controls the visual style of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Controls the size of the button',
        },
        disabled: {
            control: 'boolean',
        },
        onClick: { action: 'clicked' },
    },
};
export default meta;
// ---- Individual variant stories ----
export const Primary = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Primary Button',
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Secondary Button',
    },
};
export const Ghost = {
    args: {
        variant: 'ghost',
        size: 'md',
        children: 'Ghost Button',
    },
};
export const Disabled = {
    args: {
        variant: 'primary',
        disabled: true,
        children: 'Disabled Button',
    },
};
// ---- Size stories ----
export const Small = {
    args: {
        size: 'sm',
        children: 'Small',
    },
};
export const Large = {
    args: {
        size: 'lg',
        children: 'Large',
    },
};
// ---- Composite stories (render function, no args) ----
export const AllVariants = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '12px', alignItems: 'center' }, children: [_jsx(Button, { variant: "primary", children: "Primary" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "ghost", children: "Ghost" })] })),
};
export const AllSizes = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '12px', alignItems: 'center' }, children: [_jsx(Button, { size: "sm", children: "Small" }), _jsx(Button, { size: "md", children: "Medium" }), _jsx(Button, { size: "lg", children: "Large" })] })),
};
export const AllDisabled = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '12px', alignItems: 'center' }, children: [_jsx(Button, { variant: "primary", disabled: true, children: "Primary" }), _jsx(Button, { variant: "secondary", disabled: true, children: "Secondary" }), _jsx(Button, { variant: "ghost", disabled: true, children: "Ghost" })] })),
};
