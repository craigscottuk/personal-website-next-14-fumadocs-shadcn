This is my page.tsx that handles the pages/content in the projects folder `app/projects/[[...slug]]/page.tsx`

here is the script below:

```js

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
  console.log(projectsPageTree);
  const MDX = page.data.exports.default;

  return (
    <DocsPage
      breadcrumb={{ enabled: true, full: true, includeRoot: true }}
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



```

Attached is a screenshot of how the folder structure looks in the content folder.

Here is a console log of my page tree from the page.tsx (`console.log(projectsPageTree`);):

```json
{
  name: 'Projects',
  children: [
    { type: 'page', name: 'Projects', url: '/projects' },
    { type: 'separator', name: 'Coding' },
    {
      type: 'folder',
      name: 'Custom Bikes',
      defaultOpen: false,
      index: [Object],
      children: [Array]
    },
    {
      type: 'folder',
      name: 'Quiz',
      defaultOpen: false,
      index: [Object],
      children: [Array]
    },
    { type: 'separator', name: 'Photography' },
    { type: 'separator', name: 'Blog' }
  ]
}

```

Inside the folder named: 'Custom Bikes' I have more files in the `children: [Array]`... how can I access these using the console log... or is there a way of seeing what's inside the complete tree...

```js


    {
      type: 'folder',
      name: 'Custom Bikes',
      defaultOpen: false,
      index: [Object],
      children: [Array]
    },


```

The reason I ask is that I'd like to target certain pages inside my page tree layout to make some alterations to the files. Does this make sense?

I have a cioule of questions:

1. is it possible to apply a different background colour to the index.mdx page in the following directories:
   - `content/projects/custom-bikes-sheets-system/index.mdx`
   - `content/projects/quiz-react-app/index.mdx`

For example.. a red bg color to the `custom-bikes-sheets-system/index.mdx`

and a yellow bg color to the quiz `quiz-react-app/index.mdx`

from the page.tsx code?
