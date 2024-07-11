interface RollButtonProps {
    /**
     * Percentage of scroll position to display the roll button
     *
     * @defaultValue 0.1
     */
    percentage?: number;
}
/**
 * A button that scrolls to the top
 */
declare function RollButton({ percentage, }: RollButtonProps): React.ReactElement;

export { RollButton };
