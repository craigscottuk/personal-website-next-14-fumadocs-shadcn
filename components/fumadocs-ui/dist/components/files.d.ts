import { HTMLAttributes, ReactNode } from 'react';

declare function Files({ className, ...props }: HTMLAttributes<HTMLDivElement>): React.ReactElement;
interface FileProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    icon?: ReactNode;
}
interface FolderProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    /**
     * Open folder by default
     *
     * @defaultValue false
     */
    defaultOpen?: boolean;
}
declare function File({ name, icon, className, ...rest }: FileProps): React.ReactElement;
declare function Folder({ name, defaultOpen, ...props }: FolderProps): React.ReactElement;

export { File, type FileProps, Files, Folder, type FolderProps };
