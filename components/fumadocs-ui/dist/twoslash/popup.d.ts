import * as _radix_ui_react_popover from '@radix-ui/react-popover';
import * as React from 'react';

declare function Popup({ delay, children, }: {
    delay?: number;
    children: React.ReactNode;
}): JSX.Element;
declare const PopupTrigger: React.ForwardRefExoticComponent<Omit<_radix_ui_react_popover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const PopupContent: React.ForwardRefExoticComponent<Omit<Omit<_radix_ui_react_popover.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

export { Popup, PopupContent, PopupTrigger };
