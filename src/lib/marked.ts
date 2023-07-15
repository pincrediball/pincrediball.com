import { marked } from 'marked';

const defaultRenderer = new marked.Renderer();
marked.use({ renderer: defaultRenderer }, { headerIds: false, mangle: false });

export type TableOfContentEntry = {
  slug?: string;
  text?: string;
  level?: number;
  children: TableOfContentEntry[];
  parent?: TableOfContentEntry;
};

export type TransformedMarkdown = {
  html: string;
  tableOfContents: TableOfContentEntry;
};

// TODO: Allow running this *without* generating a Table of Contents (e.g. not needed for devlog)
export function markdownToHtml(markdown: string): TransformedMarkdown {
  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    if (href?.startsWith('http')) {
      return `<a target="_blank" href='${href}'>${text}</span><sup class="text-xs no-underline">↗</sup></a>`;
    }
    return defaultRenderer.link(href, title, text);
  };

  let tableOfContents: TableOfContentEntry = { children: [] };
  let previousEntry: TableOfContentEntry;

  const getParent = (
    level: number,
    candidate?: TableOfContentEntry
  ): TableOfContentEntry | undefined => {
    if (!candidate) return undefined;
    if (candidate.level === level - 1) return candidate;
    return getParent(level, candidate.parent);
  };

  renderer.heading = (text, level, raw) => {
    const parent = getParent(level, previousEntry);

    const prefix = parent ? `${parent.slug}--` : '';
    const slug =
      prefix +
      raw
        .toLocaleLowerCase()
        .replace(/[^a-zA-Z\d\s-]/gi, '')
        .trim()
        .replace(/\s/g, '-');

    const tocEntry: TableOfContentEntry = {
      slug,
      text,
      level,
      children: [],
      parent,
    };

    parent?.children.push(tocEntry);

    if (!previousEntry) {
      tableOfContents = tocEntry;
    }

    previousEntry = tocEntry;

    return `<h${level} id="${slug}">${text}</h${level}>`;
  };

  const html = marked(markdown, { renderer });

  return {
    html,
    tableOfContents,
  };
}
