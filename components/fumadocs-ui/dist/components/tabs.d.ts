import * as TabsPrimitive from '@radix-ui/react-tabs';
import { TabsContentProps } from '@radix-ui/react-tabs';
import * as React$1 from 'react';
import { ReactNode } from 'react';

declare const Tabs$1: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const tabs_TabsContent: typeof TabsContent;
declare const tabs_TabsList: typeof TabsList;
declare const tabs_TabsTrigger: typeof TabsTrigger;
declare namespace tabs {
  export { Tabs$1 as Tabs, tabs_TabsContent as TabsContent, tabs_TabsList as TabsList, tabs_TabsTrigger as TabsTrigger };
}

interface TabsProps {
    /**
     * Identifier for Sharing value of tabs
     */
    id?: string;
    /**
     * Enable persistent
     */
    persist?: boolean;
    /**
     * @defaultValue 0
     */
    defaultIndex?: number;
    items?: string[];
    children: ReactNode;
}
declare function Tabs({ id, items, persist, defaultIndex, children, }: TabsProps): React.ReactElement;
declare function Tab({ value, className, ...props }: TabsContentProps): React.ReactElement;

export { tabs as Primitive, Tab, Tabs, type TabsProps };
