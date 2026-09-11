import { marked, Renderer, type Tokens } from 'marked';

const defaultRenderer = new Renderer();
marked.use({ renderer: defaultRenderer });

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
  const renderer = new Renderer();

  renderer.link = ({ href, text }: Tokens.Link) => {
    if (href?.startsWith('http')) {
      return `<a target="_blank" href='${href}'>${marked.parseInline(text, { gfm: false })}<sup class="text-xs no-underline">↗</sup></a>`;
    }

    return `<a target="_blank" href='${href}'>${marked.parseInline(text, { gfm: false })}</a>`;
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

  renderer.heading = ({ depth: level, raw, text }: Tokens.Heading) => {
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

  const html = marked.parse(markdown, { renderer }) as string;

  return {
    html: html,
    tableOfContents,
  };
}
