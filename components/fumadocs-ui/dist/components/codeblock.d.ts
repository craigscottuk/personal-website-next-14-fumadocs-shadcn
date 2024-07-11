import * as React from 'react';
import { HTMLAttributes, ReactNode } from 'react';

type CodeBlockProps = HTMLAttributes<HTMLElement> & {
    /**
     * Icon of code block
     *
     * When passed as a string, it assumes the value is the HTML of icon
     */
    icon?: ReactNode;
    allowCopy?: boolean;
};
declare const Pre: React.ForwardRefExoticComponent<HTMLAttributes<HTMLPreElement> & React.RefAttributes<HTMLPreElement>>;
declare const CodeBlock: React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & {
    /**
     * Icon of code block
     *
     * When passed as a string, it assumes the value is the HTML of icon
     */
    icon?: ReactNode;
    allowCopy?: boolean;
} & React.RefAttributes<HTMLElement>>;

export { CodeBlock, type CodeBlockProps, Pre };
