import { ReactNode } from 'react';

declare function Steps({ children, }: {
    children: ReactNode;
}): React.ReactElement;
declare function Step({ children, }: {
    children: ReactNode;
}): React.ReactElement;

export { Step, Steps };
