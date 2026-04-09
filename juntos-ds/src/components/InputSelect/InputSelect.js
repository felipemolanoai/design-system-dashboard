import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './InputSelect.module.css';
// ---- Inline SVG icons ----
function ChevronDownIcon({ size = 20 }) {
    return (_jsx("svg", { width: size, height: size, viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "M5 7.5L10 12.5L15 7.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function ChevronUpIcon({ size = 20 }) {
    return (_jsx("svg", { width: size, height: size, viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "M15 12.5L10 7.5L5 12.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
// ---- Component ----
export function InputSelect({ label, placeholder = 'Input Text', value, options, disabled = false, size = 'default', leadingIcon, onChange, className, 'data-testid': testId, }) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const selectedOption = options.find(o => o.value === value);
    const displayText = selectedOption?.label ?? placeholder;
    const isPlaceholder = !selectedOption;
    const iconSize = size === 'small' ? 16 : 20;
    // Close on outside click
    useEffect(() => {
        if (!isOpen)
            return;
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);
    // Close on Escape
    useEffect(() => {
        if (!isOpen)
            return;
        function handleKeyDown(e) {
            if (e.key === 'Escape')
                setIsOpen(false);
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);
    function handleTriggerClick() {
        if (!disabled)
            setIsOpen(prev => !prev);
    }
    function handleOptionClick(optionValue) {
        onChange?.(optionValue);
        setIsOpen(false);
    }
    function handleKeyboardSelect(e, optionValue) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOptionClick(optionValue);
        }
    }
    return (_jsxs("div", { ref: wrapperRef, className: clsx(styles.root, styles[size], className), "data-testid": testId, children: [label && (_jsx("span", { className: styles.label, children: label })), _jsxs("button", { type: "button", className: clsx(styles.trigger, isOpen && styles.open, disabled && styles.disabled), onClick: handleTriggerClick, disabled: disabled, "aria-haspopup": "listbox", "aria-expanded": isOpen, "aria-label": label ?? 'Select', children: [leadingIcon && (_jsx("span", { className: styles.leadingIcon, children: leadingIcon })), _jsx("span", { className: clsx(styles.triggerText, isPlaceholder && styles.placeholderText), children: displayText }), _jsx("span", { className: styles.chevron, children: isOpen
                            ? _jsx(ChevronUpIcon, { size: iconSize })
                            : _jsx(ChevronDownIcon, { size: iconSize }) })] }), isOpen && (_jsx("ul", { role: "listbox", className: styles.dropdown, "aria-label": label ?? 'Options', children: options.map((option, index) => (_jsxs("li", { role: "option", "aria-selected": option.value === value, className: clsx(styles.option, option.value === value && styles.optionSelected), onClick: () => handleOptionClick(option.value), onKeyDown: e => handleKeyboardSelect(e, option.value), tabIndex: 0, children: [option.leadingIcon && (_jsx("span", { className: styles.optionLeadingIcon, children: option.leadingIcon })), _jsx("span", { className: styles.optionLabel, children: option.label }), option.trailingIcon && (_jsx("span", { className: styles.optionTrailingIcon, children: option.trailingIcon })), index < options.length - 1 && (_jsx("span", { className: styles.optionDivider, "aria-hidden": "true" }))] }, option.value))) }))] }));
}
