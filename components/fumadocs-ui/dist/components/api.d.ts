import { HTMLAttributes, ReactNode } from 'react';
import { Tabs, Tab } from './tabs.js';
import '@radix-ui/react-tabs';

declare function Root({ children, className, ...props }: HTMLAttributes<HTMLDivElement>): React.ReactElement;
declare function API({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): React.ReactElement;
interface APIInfoProps extends HTMLAttributes<HTMLDivElement> {
    method?: string;
    route: string;
}
declare function APIInfo({ children, className, method, route, ...props }: APIInfoProps): React.ReactElement;
interface PropertyProps {
    name: string;
    type: string;
    required: boolean;
    deprecated: boolean;
    children: ReactNode;
}
declare function Property({ name, type, required, deprecated, children, }: PropertyProps): React.ReactElement;
declare function APIExample({ children, className, ...props }: HTMLAttributes<HTMLDivElement>): React.ReactElement;
declare const Responses: typeof Tabs;
declare const Response: typeof Tab;
declare const Requests: typeof Tabs;
declare const Request: typeof Tab;
declare function ResponseTypes(props: {
    children: ReactNode;
}): React.ReactElement;
declare function ExampleResponse(props: {
    children: ReactNode;
}): React.ReactElement;
declare function TypeScriptResponse(props: {
    children: ReactNode;
}): React.ReactElement;
declare function ObjectCollapsible(props: {
    name: string;
    children: ReactNode;
}): React.ReactElement;

export { API, APIExample, APIInfo, type APIInfoProps, ExampleResponse, ObjectCollapsible, Property, Request, Requests, Response, ResponseTypes, Responses, Root, TypeScriptResponse };
