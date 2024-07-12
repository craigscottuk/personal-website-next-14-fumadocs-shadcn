import { ReactNode } from 'react';

interface Option {
    /**
     * Redirect URL of the folder, usually the index page
     */
    url: string;
    icon: ReactNode;
    title: ReactNode;
    description: ReactNode;
}
declare function RootToggle({ options, }: {
    options: Option[];
}): React.ReactElement;

export { RootToggle };
