---
emoji: 📝
title: Markdown
tags:
  - markdown
---

## Headings
To create a heading, use a hash mark (#) at the beginning of a line:

# Lorem ipsum 1
## Lorem ipsum 2
### Lorem ipsum 3
#### Lorem ipsum 4
##### Lorem ipsum 5
###### Lorem ipsum 6

## Basic Text
A paragraph requires no special syntax in Markdown.
To format text as bold, you enclose it in two asterisks. To format text as italic, you enclose it in a single asterisk:

This text is **bold**.
This text is *italic*.
This text is both ***bold and italic***.

## Numbered lists and bullet lists
To create numbered lists, begin a line with 1. or 1), but don’t use both formats within the same list. You don’t need to specify the numbers.

1. This is step 1.
1. This is the next step.
1. This is yet another step, the third.

To create bullet lists, begin a line with * or - or +, but don’t mix the formats within the same list. (Do not mix bullet formats, such as * and +, within the same document.)

* First item in an unordered list.
* Another item.
* Here we go again.

## Tables
Tables are not part of the core Markdown specification. Markdown doesn’t support multiple lines lists in cells. Best practice is to avoid using multiple lines in tables. You can create tables by using the pipe (|) character to delineate columns and rows. Hyphens create each column’s header, while pipes separate each column. Include a blank line before your table so it’s rendered correctly.

| Header | Another header | Yet another header |
|--- |--- |--- |
| row 1 | column 2 | column 3 |
| row 2 | row 2 column 2 | row 2 column 3 |

## Links
The Markdown syntax for an inline link consists of the [link text] portion, which is the text that will be hyperlinked, followed by the (file-name.md) portion, which is the URL or file name that’s being linked to:

[File](file-name.md)

[Google](https://www.google.com/)

## Syntax highlighting
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

## MDX

Below is an example of JSX embedded in Markdown. <br /> **Try and change
the background color!**

<div style={{ padding: '20px', backgroundColor: 'tomato' }}>
  <h3>This is JSX</h3>
</div>
