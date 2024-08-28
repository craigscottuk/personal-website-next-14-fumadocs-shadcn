// import { DocsLayout } from '@fumadocs-ui/layout';
import { MergedLayout } from '@fumadocs-ui/merged-layout';
import type { ReactNode } from 'react';
import { projectsOptions } from '../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return <MergedLayout {...projectsOptions}>{children}</MergedLayout>;
}
