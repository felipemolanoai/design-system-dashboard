import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
describe('Button', () => {
    it('renders children correctly', () => {
        render(_jsx(Button, { children: "Click me" }));
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });
    it('calls onClick when clicked', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(_jsx(Button, { onClick: handleClick, children: "Click me" }));
        await user.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledOnce();
    });
    it('does not call onClick when disabled', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(_jsx(Button, { disabled: true, onClick: handleClick, children: "Click me" }));
        await user.click(screen.getByRole('button'));
        expect(handleClick).not.toHaveBeenCalled();
    });
    it('renders with the correct data-testid', () => {
        render(_jsx(Button, { "data-testid": "submit-btn", children: "Submit" }));
        expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
    });
    it('applies a className override', () => {
        render(_jsx(Button, { className: "layout-override", children: "Click me" }));
        expect(screen.getByRole('button')).toHaveClass('layout-override');
    });
    it('sets aria-disabled when disabled', () => {
        render(_jsx(Button, { disabled: true, children: "Click me" }));
        expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    });
    it('renders the button as type="button" to prevent accidental form submission', () => {
        render(_jsx(Button, { children: "Click me" }));
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
});
