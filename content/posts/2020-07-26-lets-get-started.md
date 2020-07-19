---
title: Let’s get started with web development
description: In the first part of my web development basics article series I’ll focus on HTML and how to create your first small webpage.
date: 2020-07-26
---

This is the first post of a series of articles about web development (basics). The motivation for it can be read [in my previous article ”The why”](/blog/another-web-development-blog/). Most of the upcoming articles will be mainly written for beginners and anyone who is interested in the work of web developers. This could be designers who have to work together closely with devs or people working in marketing who want to understand the easy and the hard parts about building websites.

Knowing web development basics (as somebody who does not plan to start a career in this field) can really help when communicating with your developer colleagues. Speaking the same language saves you from wrong expectations, misunderstandings and makes lives easier.

After reading this post you should be able to

- create an HTML file in a text editor and view it in the browser
- understand the basic HTML file structure
- know common HTML tags and attributes
- understand why well-structured HTML is important for accessibility and search engine optimization
- open the browser’s developer tools

## Where to begin?

One of the things I like most about web development is that it’s easy to get started. You only need a text editor and a browser and you’re good to go! Which programs to choose is mainly personal preference. I use Visual Studio Code and WebStorm as text editors and Chrome and Firefox as browsers for development. Please feel free to also try other software as well and find your favourites.

## HTML, CSS and JavaScript

The most important three languages spoken in the World Wide Web are HTML (Hypertext Markup Language), CSS (Cascading Style Sheets) and JavaScript. You need HTML to define and structure the content and metadata of your webpage. CSS is used to create a great design including colors, fonts, text styles, an overall page layout, animations and so on… For all interactive parts, JavaScript is the language to use. With it you can react to events triggered by the user (e.g. a button click) and transform elements on the page or execute other, more complex functionality.

CSS and JavaScript alone make no sense without HTML. HTML is the basis of each web page and holds everything together. This is why I’m going to focus on HTML in my first posts.

## The heart of every webpage: HTML

HTML is short for Hypertext Markup Language. It was developed by Tim Berners-Lee and released in the early 90s. An HTML document’s file ending is `.html`. HTML files can be opened in a text editor to edit the source code and in a browser to render the content of the file (including the design and interaction defined in CSS and JavaScript). Let’s try that out!

If you haven’t installed a text editor and a browser by now, now is the time to do it. To learn HTML you have to write some code yourself, it’s not enough to just read through tutorials. 😉

### Angle brackets everywhere: elements and tags

When you start writing your first HTML document, you have to get used to use angle brackets (`<` and `>`). So check out where you can find them on your keyboard.

Words enclosed by these brackets are called **HTML tags**. There are **opening** and **closing** HTML tags; the latter start with an angle bracket and a forward slash, like this: `</`. Together with their content they are called **HTML elements**. Here are some tags you will see and use very often:

- `<p>`: paragraph
- `<h1>` - `<h6>`: headlines
- `<div>`: content division
- `<img>`: image
- `<a>`: anchor

And here are two HTML elements using some of these tags:

- `<h1>Welcome to my website!</h1>`
- `<p>The web is awesome!</p>`

This sounds too abstract? Let’s put everything together in a first code snippet.

## A simple web page

This is a short HTML code snippet including some basic elements you can find in every HTML document.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first HTML page</title>
  </head>
  <body>
    <h1>Welcome to my personal website!</h1>
    <p>Hello everyone, this is my first HTML page.</p>
  </body>
</html>
```

Okay, there are some more HTML tags, I didn’t mention before. Let’s go through the snippet line by line.

In the first line you see the so called **HTML doctype**. This line of code tells the browser to use standards mode to display the page. Other doctype versions are important to know when working with (very) old browsers, but for us `<!DOCTYPE html>` is just fine.

Line 2 and 9 contain the opening and closing `<html>` tags. This is the required **root element** of every HTML document. All other elements must be descendants (more about that in a minute) of this one.

From line 3 to 5 we have the `<head>` of our HTML document. This is the place where all metadata (containing important information for the browser) and links to different resources are placed. For now, we only set a `<title>` for our page. The title is visible in the browser’s title bar, or the tabs bar. Later we will add a few more interesting tags to the page’s head.

After the head is closed, the `<body>` of the page is opened. It contains all the content, that is displayed in the browser window, that can be styled with CSS and modified with JavaScript. This is the place where we will put most of our code.

For the page title we use a `<h1>` headline and for the content a paragraph `<p>`.

You can now copy & paste the code snippet or write it yourself (to practice finding the right keys on your keyboard) in a text editor and save the file as `index.html`. Then open the file in a browser and tadaaa: you just built your first, tiny webpage! 🎉

![First code snippet opened in Firefox](/assets/blog/code-snippet-001.png)

### Modify your webpage in the browser: development tools

Now we’re in the browser, let’s have a look at a very useful part of it for us web developers: the browser’s **development tools**. There are several ways to open them:

- right-click on an element (e.g. the headline of your page) and select `Inspect` or `Inspect Element` (depends on the browser)
- in Chrome: navigate to "View" - "Developer" - "Developer Tools"
- in Firefox: navigate to "Tools" - "Web Developer" - "Toggle Tools"
- or remember the Shortcut `Option+Command+I` (Mac) or `Control+Shift+I` (Windows, Linux)

Once opened, select the Elements-tab (Chrome), or the Inspector-tab (Firefox). Then you should be able to see the code you just wrote in your text editor right next to the rendered output.

![First code snippet opened in Firefox with opened developer tools](/assets/blog/code-snippet-002-devtools.png)

To quickly try things out or move elements around on the page, you can always use developer tools and change code directly in the browser. Of course, you are not modifying the original source files this way. You can now try these two things:

- Change the order of your elements, move the headline below the paragraph and back (drag & drop)
- Change the text in the paragraph

During development, it’s useful to always keep the developer tools open. You’ll need them most of the time, especially when searching for bugs in your code or style your page with CSS and want to have live feedback how changes affect the look of your page.

### Adding more content

At the moment we only use two different tags for the actual page content. Let’s go back to our text editor and add a bit more elements there! We start another content section with a level 2 headline after our introduction paragraph. As this is going to be a personal website, we’ll add a list of things we like. This looks as follows:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first HTML page</title>
  </head>
  <body>
    <h1>Welcome to my personal website!</h1>
    <p>Hello everyone, this is my first HTML page.</p>
    <h2>Things I like</h2>
    <ul>
      <li>Cats</li>
      <li>Coffee</li>
      <li>Music</li>
      <li>Harry Potter</li>
    </ul>
  </body>
</html>
```

The `<ul>` tag is used for unordered list. You can also use `<ol>` instead for an ordered list on your page, which displays numbers before your list item content. The list items `<li>` are nested, that means they are direct children (descendants) of their parent element (`ul` or `ol`). Always keep in mind that elements that have been opened first must be closed last. The following snippet is invalid HTML code because the `ul` element is closed before the last `li` element:

```html
<ul>
  <li>Cats</li>
  <li>Coffee</li>
  <li>
    Music
  </ul> <!-- li has to be closed here! -->
</li> <!-- ul has to be closed here! -->
```

The good and the bad thing: most browsers know what to do when they find invalid syntax in your HTML code and display everything as expected. In some cases, though, invalid HTML can also lead to broken-looking web pages. If you always take care of a good, readable code structure, e.g. use indentation to group elements on the same level, then mistakes like that are less likely to happen. Later I’ll share a useful resource with you, that you can use to check your code easily.

### Self-closing tags and attributes

The underlying principle of the World Wide Web is to connect a variety of web pages and resources, so one essential HTML element that you’ll probably need on all of your web pages is the anchor element `<a>`. I’ll add some more text about my hobbies to my current webpage and include a link to another website.

(Note: To shorten the code examples, I sometimes replace code we already discussed before with an HTML comment, which starts with `<!--` and is closed by `-->`.)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first HTML page</title>
  </head>
  <body>
    <!-- code from the previous example -->
    <h3>My music</h3>
    <p>
      I like music a lot. I play different instruments and play in a band, a
      vocal ensemble, called
      <a href="https://www.anderschor.at">anders_chor</a>.
    </p>
  </body>
</html>
```

I want people to find the website of my band easily, so I add a link to it. You probably noticed there is something new we didn’t have before: In order to make a link work, it isn’t enough to just mark something as a link like this: `<a>anders_chor</a>`; we also have to tell the browser where to navigate when clicking on it. To do so, we add a so-called **attribute** to the opening HTML tag: `href` (hypertext reference). Attributes have a name followed by an equals sign, and the actual value you want to assign, in our case the URL (uniform resource locator) of the band’s website, between quotation marks. The text between the opening and closing anchor tags is now clickable, and the link leads to the specified website.

After editing the HTML file in the text editor, switch back to the browser and reload the page to see the changes you just made.

![Code snippet with more content and a link](/assets/blog/code-snippet-003.png)

One last thing I want to add to my first web page is a nice image of me. To insert images we use the `<img>` tag. There are two special things about this HTML element: the element has no content, that means it is **self-closing** and similar to the anchor element we need an attribute to make it work. Following is a code snippet how this looks like in code:

```html
<p>
  This is me with my cat Gandalf.
  <img src="./images/me.jpg" />
</p>
```

As you can see in the example above, the `img` tag is immediately closed again, thus ends with `/>`. The slash is optional, but makes it more obvious no extra closing tag is expected and no further content is needed for this HTML element. The `src` (source) attribute is similar to the `href` attribute of the anchor tag we learned about two minutes ago. It tells the browser where to look for extra content, in this case the image. To make this code snippet work, the image has to be placed in a directory `images` that’s located in the same folder as the `index.html` file we are currently editing, and has to be named `me.jpg`. The following screenshot shows how the page looks when opened in the browser right now.

![Code snippet with an image](/assets/blog/code-snippet-004.png)

## How you don’t mess up your HTML code

Well-structured HTML code is key for creating a good website or web application. What do I mean with "good" in this context? Good means: accessible, readable, understandable, semantically correct, well-formatted, optimized for search engines,… When you take care of the quality of your code from the very beginning,

- you avoid mistakes
- maintaining the code in the future is much easier – for you and people you work with
- you provide a better user experience – for developers and your website visitors
- you don’t have to put in a lot of extra work to make your code accessible at the end of the project
- Google ranks your page higher in the result list

All the points mentioned above are somehow connected. Following are some tips about good code quality using our example.

### Accessibility and SEO from the very beginning

Let’s have a look again at our first small web page code example.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first HTML page</title>
  </head>
  <body>
    <h1>Welcome to my personal website!</h1>
    <p>Hello everyone, this is my first HTML page.</p>
    <h2>Things I like</h2>
    <ul>
      <li>Cats</li>
      <li>Coffee</li>
      <li>Music</li>
      <li>Harry Potter</li>
    </ul>
    <h3>My music</h3>
    <p>
      I like music a lot. I play different instruments and play in a band, a
      vocal ensemble, called
      <a href="https://www.anderschor.at">anders_chor</a>.
    </p>
    <h3>My cat</h3>
    <p>
      This is me with my cat Gandalf.
      <img src="./images/me.jpg" />
    </p>
  </body>
</html>
```

You can already see that I always added two space characters of indentation when starting a new line, and the following element is a nested child element of the previous one, like the `h1` is a child element of the `body` or the `li` element is a child of the `ul`. This helps you a lot to organize your code as soon as the HTML file grows and prevents errors like missing closing tags or closing tags in the wrong order (as described above).

Always take care of the **headline order** within your HTML document. Think of your page as an article (even if it isn’t). Every single web page should have only one level 1 headline (`<h1>`), this is the page title (or your article’s title). Content sections below are labelled with a `<h2>` headline. If a subheadline is needed there, use a `<h3>` element, and so on. Never choose a headline because its font size fits your design better, always choose the headline that’s the semantically correct version for that place. (To change font sizes we’ll use CSS later!) All headlines of your webpage should be seen as its table of contents (like a table of contents of an article). When providing a proper document outline, people using assistive technologies (e.g. a screen reader) to consume the content of your website can, for example, jump from one `h2` headline to the next and get a basic idea what it’s all about. The table of contents of my code snippet would be as follows:

```
h1. Welcome to my personal website!
  h2. Things I like
    h3. My music
    h3. My cat
```

On modern websites you can often find non-textual content like icons, images, or videos. It’s a very important accessibility guideline to always provide additional text for those elements if they are an essential part of your page’s content. Otherwise, people who can’t see your website or crawlers indexing it have no chance to perceive content "hidden" in those additional elements. Text alternatives are easy to provide and a huge benefit for accessibility and search engine optimization (SEO).

In our example, we have to add alternative text for the image using the `alt` attribute like this:

```html
<img 
  src="./images/me.jpg"
  alt="A photo of me and my white cat Gandalf."
/>
```

Start writing good HTML code from the very beginning. Build even the smallest page or the quickest prototype with semantics and accessibility in mind. A nice tool that can help you find errors in your code at an early stage is the [W3C validator](https://validator.w3.org). Provide a URL to your website, upload a file or directly paste the code and run a check if your code is valid.

## Wrapping up

In this blog post we learned about HTML basics and built a small web page using some of the most used HTML tags. We already built the page with accessibility in mind. This is the final code that should be the content of your `index.html` file (of course the text in your file can be different):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first HTML page</title>
  </head>
  <body>
    <h1>Welcome to my personal website!</h1>
    <p>Hello everyone, this is my first HTML page.</p>
    <h2>Things I like</h2>
    <ul>
      <li>Cats</li>
      <li>Coffee</li>
      <li>Music</li>
      <li>Harry Potter</li>
    </ul>
    <h3>My music</h3>
    <p>
      I like music a lot. I play different instruments and play in a band, a
      vocal ensemble, called
      <a href="https://www.anderschor.at">anders_chor</a>.
    </p>
    <h3>My cat</h3>
    <p>
      This is me with my cat Gandalf.
      <img
        src="./images/me.jpg"
        alt="A photo of me and my white cat Gandalf."
      />
    </p>
  </body>
</html>
```

## Further reading

You don’t have to remember all existing HTML tags and attributes. Another cool thing about web development is that you can look up most of the things you need, – there is almost certainly somebody out there who already had the same problem you’re currently facing. A reference I always use when developing is the [MDN documentation by Mozilla](https://developer.mozilla.org/en-US/). It’s the first address I go to if I want to know details about any HTML tag and its properties.

If you want to dig further into accessibility standards and guidelines visit the [Web Accessibility Initiative (WAI) website](https://www.w3.org/WAI/standards-guidelines/).

Another great resource when you’re just about to get started in web development is [Interneting Is Hard](https://www.internetingishard.com/). It’s a 14 chapters introduction to HTML and CSS with great code examples and illustrations.

Next time we’ll get to know some more HTML tags and the difference between block and inline elements.
