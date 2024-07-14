Offers
Live Projects
Stage 1. Painting & Parts
Stage 2. Assembly & Testing
Stage 3. Dispatch / Pick-Up
Completed Projects
Focused Projects
Other Key OMS Components
Archive Sheets

offers
live-projects
stage-painting-parts
stage-assembly-testing
stage-dispatch-pick-up
completed-projects
focused-projects
other-key-oms-components
archive-sheets

"system-overview",
"oms-component",
"inventory-component",
"project-manager-tool",
"processes-and-workflows",
"data-and-analytics",

"blog-post-one",
"blog-post-two",
"blog-post-three",

"quiz-case-study-one",
"quiz-case-study-two",
"quiz-case-study-three",

---

Thanks a lot for working on this! I've also been playing around with the the Links API. It is awesome! 😁

I'm still having a bit of bother with the breadcrumbs... maybe it's just me, though... I've added the 'includeRoot' param to the `app/blog/[[...slug]]/page.tsx` file but I don't see breadcrumb when I navigate to `/blog/blog-post-one/two/three`.

Here is my blog page tree:

```js
//console.log(blogPageTree);

{
  name: 'Blog',
  children: [
    { type: 'page', name: 'Blog Post 1', url: '/blog/blog-post-one' },
    { type: 'page', name: 'Blog Post 2', url: '/blog/blog-post-two' },
    { type: 'page', name: 'Blog Post 3', url: '/blog/blog-post-three' }
  ]
}
```

There are no folders in my `/blog`. Maybe that's the issue?

Here is a look at some more of my code:

```js
// app/blog/[[...slug]]/page.tsx

const MDX = page.data.exports.default;

console.log(blogPageTree);

return (
  <DocsPage
    breadcrumb={{ enabled: true, includeRoot: true }}
    tableOfContentPopover={{ enabled: false }}
    toc={page.data.exports.toc}
    full={page.data.full}
  >
    <DocsBody>
      <h1>{page.data.title}</h1>
      <MDX />
    </DocsBody>
  </DocsPage>
);
```

```json
//content/blog/meta.json

{
  "title": "Blog",
  "pages": ["blog-post-one", "blog-post-two", "blog-post-three"],
  "defaultOpen": false,
  "root": true
}
```
