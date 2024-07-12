import { Layout as HomeLayout } from 'components/fumadocs-ui/dist/layout';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}
