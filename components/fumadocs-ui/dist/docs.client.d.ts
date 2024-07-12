import { S as SidebarProps, a as SharedNavProps } from './layout-ZAteQVYk.js';
export { L as LinksMenu, b as Sidebar } from './layout-ZAteQVYk.js';
export { T as TreeContextProvider } from './tree-CrKzI9Nz.js';
import { ButtonHTMLAttributes } from 'react';
import 'fumadocs-core/server';

declare function DynamicSidebar(props: SidebarProps): React.ReactElement;

declare function ThemeToggle({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement;

declare function SubNav({ title, url, transparentMode, children, enableSearch, }: SharedNavProps): React.ReactElement;

export { DynamicSidebar, SubNav, ThemeToggle };
