import {
  getProjectsPage,
  getProjectsPages,
  projectsPageTree,
} from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from '@fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getProjectsPage(params.slug);

  if (page == null) {
    notFound();
  }

  ///////
  ///////
  ///////
  ///////

  // function logTree(node, indent = '') {
  //   console.log(indent + node.name);

  //   if (node.children) {
  //     node.children.forEach((child) => logTree(child, indent + '  '));
  //   }
  // }

  // logTree(projectsPageTree);

  console.log('Page Data:', page.data);
  console.log('Page Slugs:', page.slugs);
  console.log('Page File:', page.file);
  console.log('Page Exports:', page.data.exports);
  console.log('Last Modified:', page.data.exports.lastModified);
  console.log(
    'Structured Data:',
    JSON.stringify(page.data.exports.structuredData, null, 2)
  );
  console.log(
    'Table of Contents:',
    JSON.stringify(page.data.exports.toc, null, 2)
  );

  ///////
  ///////
  ///////
  ///////

  const MDX = page.data.exports.default;

  // Determine if the current page or its parent is "Tech Docs"
  const isTechDocsPage =
    params.slug?.includes('technical-documentation') ||
    params.slug?.[0] === 'tech-docs';

  // Determine if the layout is MergedLayout
  // const isMergedLayout = page.slugs?.includes('case-studies');
  const isMergedLayout = true;

  return (
    <DocsPage
      breadcrumb={{
        enabled: true,
        full: true,
        // includeRoot: true,
        includeRoot: { url: 'http://localhost:3000/projects' },
      }}
      toc={page.data.exports.toc}
      full={page.data.full}
      tableOfContentPopover={{ enabled: isTechDocsPage }}
      className={isMergedLayout ? 'md:pt-20' : ''} // Add top padding if MergedLayout
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getProjectsPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}

export async function generateStaticParams() {
  return getProjectsPages().map((page) => ({
    slug: page.slugs,
  }));
}
