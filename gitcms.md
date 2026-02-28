---
website_url: https://waishnav.github.io
media_path: /public
ssg_framework: astro
frontmatter_format: yaml
publishing_mode: direct_publish
collections:
  - name: posts
    git_path: /src/content/posts/
    file_extension: .md
    filename_pattern: "{title.kebabCase}"
    frontmatter_schema:
      - name: title
        type: title
        label: Title
      - name: date
        type: datetime
        label: Date
      - name: tags
        type: multiselect
        label: Tags
        options:
          - indie-hacking
          - buildinpublic
        color: blue
      - name: unlisted
        type: boolean
        label: Unlisted
        default: false
  - name: projects
    git_path: /src/content/projects
    file_extension: .md
    filename_pattern: "{title.kebabCase}"
    frontmatter_schema:
      - name: title
        type: title
        label: Title
      - name: description
        type: richtext
        label: Description
      - name: url
        type: url
        label: Url
      - name: users
        type: number
        label: Users
      - name: isActive
        type: boolean
        label: Is Active
        default: false
      - name: order
        type: number
        label: Order
---
