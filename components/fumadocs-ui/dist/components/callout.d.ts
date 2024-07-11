import * as React from 'react';
import { HTMLAttributes, ReactNode } from 'react';

declare const Callout: React.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "title" | "icon" | "type"> & {
    title?: ReactNode;
    /**
     * @defaultValue info
     */
    type?: "info" | "warn" | "error";
    icon?: ReactNode;
} & React.RefAttributes<HTMLDivElement>>;

export { Callout };
