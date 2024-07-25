import { replaceOrDefault } from '@fumadocs-ui/utils/shared';
import type { BaseLayoutProps } from '@fumadocs-ui/layout';
import { getLinks } from '@fumadocs-ui/layout.shared';

declare const { Nav }: typeof import('./home-layout.client');

export type HomeLayoutProps = BaseLayoutProps;

export function HomeLayout({
  nav = {},
  links = [],
  githubUrl,
  children,
}: BaseLayoutProps): React.ReactElement {
  const finalLinks = getLinks(links, githubUrl);

  return (
    <>
      {replaceOrDefault(
        nav,
        <Nav items={finalLinks} {...nav}>
          {nav.children}
        </Nav>
      )}
      {children}
    </>
  );
}
