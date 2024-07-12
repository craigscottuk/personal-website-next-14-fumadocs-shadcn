import { CodeBlockProps } from './components/codeblock.js';
import 'react';

declare function Pre({ title, allowCopy, icon, ...props }: CodeBlockProps): React.ReactElement;

export { Pre };
