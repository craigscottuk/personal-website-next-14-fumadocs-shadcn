declare function Info({ children, }: {
    children: React.ReactNode;
}): React.ReactElement;
interface ObjectType {
    /**
     * Additional description of the field
     */
    description?: React.ReactNode;
    type: string;
    typeDescription?: string;
    /**
     * Optional link to the type
     */
    typeDescriptionLink?: string;
    default?: string;
}
declare function TypeTable({ type, }: {
    type: Record<string, ObjectType>;
}): React.ReactElement;

export { Info, TypeTable };
