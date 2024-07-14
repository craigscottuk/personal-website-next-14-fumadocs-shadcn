import {
  getProjectsPage,
  getProjectsPages,
  projectsPageTree,
} from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
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
  // console.log(projectsPageTree);
  const MDX = page.data.exports.default;

  return (
    <DocsPage
      breadcrumb={{ includeRoot: true }}
      toc={page.data.exports.toc}
      full={page.data.full}
      tableOfContentPopover={{ enabled: false }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getProjectsPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getProjectsPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
