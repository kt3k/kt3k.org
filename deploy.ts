addEventListener("fetch", (event) => {
  const { pathname } = new URL(event.request.url);
  console.log(pathname);
  switch (pathname) {
    case "/":
      event.respondWith(new Response(homepage, { status: 200, headers: { 'content-type': 'text/html' } }));
      break;
    default:
      event.respondWith(new Response(notFound, { status: 200, headers: { 'content-type': 'text/html' } }));
      break;
  }
});

const homepage = `
<meta charset="utf-8" />
<title>kt3k.org</title>
<link rel="stylesheet" href="https://yegor256.github.io/tacit/tacit.min.css"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="https://kt3k.github.io/kt3k.org/kt3k.jpg" />
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
</style>

<h1>kt3k.org <img class="avatar" src="https://kt3k.github.io/kt3k.org/kt3k.jpg"/></h1>
<p>Hello. I'm Yoshiya Hinosawa.

<h2>About</h2>
<p>I'm a software engineer in 🇯🇵. My main programming language is JavaScript. I've published a number of <a href="https://npm.im/~kt3k">npm modules</a>. I write programs in other languages as well, like python, ruby, groovy, java, bash etc. I published some <a href="https://rubygems.org/profiles/kt3k">ruby gems</a>, <a href="http://search.maven.org/#search%7Cga%7C1%7Corg.kt3k">maven packages</a>, <a href="https://plugins.gradle.org/search?term=kt3k">gradle plugins</a>.

<p>I majored Computer Science in <a href="https://en.wikipedia.org/wiki/Kyoto_University">Kyoto University</a> and graduated in 2009 with a BA degree.

<p>I worked as a full stack engineer in <a href="http://gree.jp/">GREE</a> (A Japanese social gaming company) from 2012 to 2014.

<p>I've been working as a freelance JavaScript engineer since 2015. My main partners are now SEQSENSE and Lightcafe Creation (in 2019).

<p>I often use the id 'kt3k' in several places. 'kt3k' is derived from kata-tataki, a Japanese word for 'shoulder massage' 💆. I chose this name for the account name of a certain small online game many years ago. I didn't intended to use this name for such long time, but the friends there kept calling me by that name for long time, and it gradually became my favorite id.

<h2>OSS Projects</h2>
<p>These are the main OSS projects I've been contributing to.</p>
<ul>
  <li>🦕 <a href="https://deno.land/">Deno (JavaScript runtime)</a>
  <li>💊 <a href="https://github.com/capsidjs/capsid">Capsid (frontend framework)</a>
  <li>💴 <a href="https://github.com/kt3k/moneybit-app">MoneyBit (mobile accounting app)</a>
  <li>📊 <a href="https://github.com/c3js/c3">C3.js (Chart library)</a>
</ul>

<h2>Some Links</h2>
<ul>
  <li><a href="https://github.com/kt3k">my github</a>
  <li><a href="https://twitter.com/kt3k">my twitter</a>
  <li><a href="https://shuho.kt3k.org">My weekly report</a>
  <li><a href="http://kt3k.com">kt3k.com</a>
  <li><a href="https://monoid.cc/">monoid</a>
</ul>

<hr>
<p>© 2021 Yoshiya Hinosawa
`;

const notFound = `
<title>kt3k.org</title>
<link rel="stylesheet" href="https://yegor256.github.io/tacit/tacit.min.css"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="https://kt3k.github.io/kt3k.org/kt3k.jpg" />
<h1>Not Found</h1>
<a href="https://kt3k.org/"><img width="150" src="https://kt3k.github.io/kt3k.org/sheep.png" /></a>
<a href="/">Back</A>
`;
