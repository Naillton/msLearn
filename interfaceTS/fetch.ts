import fetch from 'node-fetch';

const fetchUrl = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts<T>(url: string): Promise<Post[]>{
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}

async function showPost(): Promise<void> {
  let posts = await fetchPosts(fetchUrl);
  let post = posts[0];
  console.log(`Post # ${post.id}`)
  console.log(`Author: ${post.userId === 1 ? 'Administrator' : post.userId.toString()}`);
  console.log(`Title: ${post.title}`);
  console.log(`Body: ${post.body}`);
}

showPost();