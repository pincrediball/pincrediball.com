import { getWeekNumber } from '$lib/util';
import { readdirSync, readFileSync } from 'fs';
import type { PageServerLoad } from './$types';

function getTitle(content: string) {
  const matches = content.match(/^## (.+)$/gm);
  if (matches && matches.length > 0) {
    return matches[0].replace('##', '').trim();
  }
  return '<no title>';
}

export type Post = {
  id: string;
  date: Date;
  title: string;
  content: string;
};

export type Group = { key: string; posts: Post[] };

function getPosts(): Post[] {
  return readdirSync('content/devlog')
    .filter((f) => f.endsWith('.md'))
    .reverse()
    .map((file) => {
      const dateString = file.replace('.md', '');
      const id = `post-${dateString}`;
      const date = new Date(`${dateString}T00:00:00.000Z`);
      const content = readFileSync(`content/devlog/${file}`, 'utf-8');
      const title = getTitle(content);
      return {
        id,
        date,
        title,
        content,
      };
    });
}
const posts = getPosts();

const postsGroupedByWeek: Group[] = posts.reduce((groups: Group[], post) => {
  const [weekYear, weekNr] = getWeekNumber(post.date);
  const key = `${weekYear}, week ${weekNr}`;
  const group = groups.find((g) => g.key === key) || { key, posts: [] };
  if (group.posts.length === 0) {
    groups.push(group);
  }
  group.posts.push(post);
  return groups;
}, []);

export const load = (() => {
  return {
    postsGroupedByWeek,
    posts,
  };
}) satisfies PageServerLoad;
