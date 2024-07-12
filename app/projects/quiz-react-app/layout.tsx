import { DocsLayout } from 'components/fumadocs-ui/dist/layout';
import type { ReactNode } from 'react';
import { projectQuizOptions } from '../../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...projectQuizOptions}>{children}</DocsLayout>;
}
