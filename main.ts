import { contentType } from "https://deno.land/std@0.201.0/media_types/content_type.ts";
import { extname } from "https://deno.land/std@0.205.0/path/posix/extname.ts";

Deno.serve(async (req) => {
  const { pathname } = new URL(req.url);
  console.log(pathname);
  switch (pathname) {
    case "/":
      return new Response(homepage, { headers: { 'content-type': 'text/html' } });
    case "/style.css":
    case "/logo-e3e9f0.svg":
    case "/logo-square-white.png":
    case "/hi.png":
    case "/kt3k.jpg": {
      const mime = contentType(extname(pathname));
      return new Response((await Deno.open("." + pathname)).readable, { headers: { 'content-type': mime ?? "" } });
    }
    default:
      return new Response(notFound, { status: 404, headers: { 'content-type': 'text/html' } });
  }
});

const homepage = /* html */`
<head>
  <meta charset="utf-8" />
  <title>kt3k.org</title>
  <link rel="stylesheet" href="/style.css" />
  <link rel="icon" href="/hi.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: 'avenir next', verdana;
      padding-left: 18px;
      padding-right: 18px;
    }
    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      margin-bottom: -12px;
      margin-left: 10px;
    }

    .flex {
      display: flex;
    }
    .items-center {
      align-items: center;
    }
    .gap-4 {
      gap: 16px;
    }
  </style>
</head>

<body>
  <h1 class="flex items-center gap-3"><img src="hi.png" width="40"><span>kt3k.org</span></h1>

  <p><img class="avatar" src="/kt3k.jpg"/>
  <p>Hello. I'm Yoshiya Hinosawa.

  <h2>About</h2>
  <p>I'm a software engineer in 🇯🇵. My main programming language is JavaScript. I've published a number of <a href="https://npm.im/~kt3k">npm modules</a>. I write programs in other languages as well, like python, ruby, groovy, java, bash etc. I published some <a href="https://rubygems.org/profiles/kt3k">ruby gems</a>, <a href="http://search.maven.org/#search%7Cga%7C1%7Corg.kt3k">maven packages</a>, <a href="https://plugins.gradle.org/search?term=kt3k">gradle plugins</a>.

  <p>I majored in Computer Science and Mathematics in <a href="https://en.wikipedia.org/wiki/Kyoto_University">Kyoto University</a> and graduated in 2009 with a BA degree.

  <p>I worked as a full stack engineer in <a href="http://gree.jp/">GREE</a> (A Japanese social gaming company) from 2012 to 2014.

  <p>I worked as a freelance JavaScript engineer from 2015 to 2020. My main partners were CureApp, Recruit, and SEQSENSE.

  <p>I've been working full-time at <a href="https://deno.land/">Deno</a> since January 2021. I work on Deno Standard Library, Deno CLI, Deno Deploy, and other various related projects.

  <p>I usually use the id 'kt3k' online since 2007. It's acronym of a randomly picked Japanese word, which doesn't have a special meaning. I like this id because it's short and nobody tries to take this id on any services. So I can always use this id in every site.</p>

  <h2>OSS Projects</h2>
  <p>These are the main OSS projects I've been contributing to.</p>
  <ul>
    <li>🦕 <a href="https://deno.land/">Deno (JavaScript runtime)</a>
    <li>💊 <a href="https://github.com/kt3k/cell">Cell (frontend tool, which I mainly use in my hobby projects)</a>
    <li>🌉 <a href="https://github.com/kt3k/lepont">LePont (webview <-> react-native bridge)</a>
  </ul>

  <h2>Posts</h2>
  <ul>
    <li><a href="https://kt3k.github.io/2022/">2022 wrapped</a></li>
  </ul>

  <h2>Other Links</h2>
  <ul>
    <li><a href="https://github.com/kt3k">GitHub</a>
    <li><a href="https://threads.net/@kt3k">Threads</a>
    <li><a href="https://bsky.app/profile/kt3k.org">Blue Sky</a>
    <li><a href="https://blog.kt3k.org">Blog (Japanese)</a>
    <li><a href="https://shuho.kt3k.org">My weeknotes</a>
    <li><a href="https://times.kt3k.org">My random comments</a>
  </ul>

  <hr>
  <p>© 2024 Yoshiya Hinosawa
</body>
`;

const notFound = /* html */ `
<head>
  <title>kt3k.org</title>
  <link rel="stylesheet" href="/style.css"/>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="/hi.png" />
<head>
<body>
  <h1>Not Found</h1>
  <a href="/">Back</a>
</body>
`;
