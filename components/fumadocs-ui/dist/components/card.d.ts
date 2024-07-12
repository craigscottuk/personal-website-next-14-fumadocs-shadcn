import { LinkProps } from 'fumadocs-core/link';
import { HTMLAttributes, ReactNode } from 'react';

declare function Cards(props: HTMLAttributes<HTMLDivElement>): React.ReactElement;
type CardProps = {
    icon?: ReactNode;
    title: string;
    description: string;
} & Omit<LinkProps, 'title'>;
declare function Card({ icon, title, description, ...props }: CardProps): React.ReactElement;

export { Card, type CardProps, Cards };
