---
website_url: https://waishnav.github.io
media_path: /public
ssg_framework: astro
frontmatter_format: yaml
publishing_mode: direct_publish
collections:
  - name: posts
    git_path: /src/content/posts
    file_extension: .md
    filename_pattern: title
  - name: projects
    git_path: /src/content/projects
    file_extension: .md
    filename_pattern: title
---
