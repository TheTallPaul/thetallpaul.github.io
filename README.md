# Lantow.Net

## Running locally

```bash
bundle exec jekyll serve
```

## Blog posts

Posts are Markdown files in `_posts/`. Name each file:

```
YYYY-MM-DD-your-post-title.md
```

Front matter at the top of every post:

```yaml
---
layout: post
title: Your Post Title
---
```

Published URLs follow `/blog/YYYY/MM/DD/your-post-title/`. The index is at `/blog/`.

### Images

Store images in `assets/images/blog/` and embed them in posts:

```markdown
![Alt text](/assets/images/blog/my-photo.jpg)
```
