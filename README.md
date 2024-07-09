# Zen CSS

A variable-driven CSS library with an atomic approach that is robust, simple, and flexible enough to style website systems.

## Overview

### What is Zen.css?

Zen CSS is a system of CSS files inspired by the [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) methodology and [tailwindcss](https://tailwindcss.com/). It defines variables which combine to make classes for elements, layouts, and sections. 

To go along with Brad Frost's metaphor of the atom, the CSS variable can be thought of as the sub-atomic particles that create the atom: protons, neurons, and electrons. They have also been called "design tokens". These three "particles" give us the designed "atom" in the same way that CSS variables are used in classes to styles the HTML element.

| Zen CSS | Atomic Design |
| ------- | ------- |
| CSS variables | Sub-atomic particles |
| Element classes | Atoms |
| Layout classes | Molecules |
| Wrapper classes | Organisms |
| Components | Templates |
| Pages | Pages |


"Element classes" refers to elements that are usually only children such as links, inputs, and text (Frost's atom).

"Layout"classes" refers to elements that handle layout such as divs, sections, and lists with low-level elements within them (the molecule).

"Wrapper classes" refers to elements that serve as the parent containing element, such as sections, headers, and footers (the organism).

### What's included?

#### Main file (zen.css)

The main file is located in `./dist/zen.css` and is a combination and minification of all the files in the `/css` directory.

#### Variable files

Variable files are located in the `./css/variables` directory.

|  File  |  Summary  |
|---------|----|
| `colors.css` | Color and gradient variables |
| `units.css` | Unit variables for spacing |
| `elevations.css` | Variables for defining box shadows |
| `typogrpahy.css` | Text defaults, variables, and classes |

#### Class files

The core class files are located in the `./css/classes` directory.

|  File  |  Summary  |
| ------ | --------- |
| `reset.css`| Basic style resets for global HTML elements |
| `colors.css`  | Color and gradient styles |
| `spaces.css`| Flex gap, padding, margin styles |
| `text.css` | Text and font related classes |
| `flex.css` | Flex layout definitions |
| `grids.css` | Grid layout definitions |
| `images.css` | Generic image styles |
| `wrappers.css` | Containers, content wrappers, etc. |
| `???.css` | This project is a work in progress |

### Comment conventions ###

Leveraging CSS comments, you'll find different 'levels' of comments:

- `/* ### TOP LEVEL HEADING ### */` is used to designate sections
- `/* === Second Level Heading === */` is sued to designate sub-section
- `/* Regular comment providing information or usage notes */` is used for regular comment text, notes, or to provide context

## Basic composing

At its core, Zen CSS is a variable-driven class-based approach to web styling. These variables are used in a handlful of reusable and flexible classes which are typed into the your HTML.

Here is an example of a basic navigation element with links.

```
<nav class="section-wrap">
  <section class="content-wrap">
    <ul class="list-wrap f-row f-center-start">
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>
  </section>
</nav>
```

So then, what are the variables we're using? Variables in CSS are nothing new and we use them here to help to remember less when composing HTML pages and custom styles.

### Variables and naming

As a rule of thumb, variable names are named after the CSS property that is represents with no spaces:

- `gap` becomes `--gap`
- `font-family` becomes `--fontfamily`
- `max-width` becomes `--maxwidth`

However, some are abbreviated:

- `border-radius` becomes `--br`

There are also some primitives that don't have any CSS property associated with it, which we call "flags modifiers".

### Flag modifiers

Flag modifiers (or "flags" for short) are used create a robust and simple ecosystem of variable and class names.

Throught the variable and class declarations, we often provide flags or modifiers to the end of variable or class names. This is done to handle multiple versions of a style based on a certain use case.

Flags range from `xxl` to `xxs`, numbers, and contextual keywords.

#### Sizing flags

- `-xxl`: Double extra large
- `-xl`: Extra large
- `-l`: Large
- `-m`: Medium, used as the default case
- `-s`: Small
- `-xs`: Extra small
- `-xxs`: Double extra small
- `-zero `: The number zero, as in `0px`

#### Number flags

- `-1`: One
- `-2`: Two
- `-3`: Three
- `-4`: Four
- `-5`: Five
- `-6`: Six
  
##### Contextual flags

- `-serif`: Specifies the serif font
- `-sans`: Specifies the sans-serif font
- `-mono`: Specifies the monospace font

---

## Working with colors

### Color variables

The `colors.css` variable file contains variable definitions for colors and gradients.

Colors are based on color ramps generated from [ColorRampGen](https://colorampgen.vercel.app/). There are 10 flags for colors, going from zero to nine. 

Zero (`-0`) is the lightest shade. Nine (`-9`) is the darkest shade. Five (`-5`) is the 'base' color.

### Example

```
--primary-0: #ffeceb;
--primary-1: #ffd9d7;
--primary-2: #ffb3af;
--primary-3: #ff8d86;
--primary-4: #ff675e;
--primary-5: #ff4136;
--primary-6: #cc342b;
--primary-7: #992720;
--primary-8: #661a16;
--primary-9: #330d0b;
```

### Color classes
The main two use cases for generic color styling is to assign a color to the text color or the background color. For this reason, we have two types of classes for controlling colors: `.color` and `.bg-color` where 'color' matches your color variable names.

### Example

Here we have created four classes to handle styling the text and background black. The class prefixed with `bg-` means that it is used to set the background color.

```
/* Black */
.black { color: var(--black); }
.bg-black { background-color: var(--black); }
```

So to style the text for with the `--primary` variable's value, we do have 
```
/* Text color */
.primary-0 { color: var(--primary-0); }
.primary-1 { color: var(--primary-1); }
.primary-2 { color: var(--primary-2); }
...
.primary-9 { color: var(--primary-9); }

/* Background color */
.bg-primary-0 { background-color: var(--primary-0); }
.bg-primary-1 { background-color: var(--primary-1); }
...
.bg-primary-4 { background-color: var(--primary-4); }

.bg-primary-5 { background-color: var(--primary-5); color: var(--white); }
.bg-primary-6 { background-color: var(--primary-6); color: var(--white); }
...
.bg-primary-9 { background-color: var(--primary-9); color: var(--white); }

```

Note that for the background color classses higher than `-5`, we also set the text color to white automatically to account for the text being readable on a darker or more vibrant background. You may need to edit these for your project.

---

## Working with text

### Typography variables
The `typography.css` variable file contains variable definitions for typographic styles. Mainly we want to control font family at a global level.

```
/* Font families */
--fontfamily-serif: serif;
--fontfamily-sans: sans-serif;
--fontfamily-mono: monospace;
```

Replace them with whatever font you are actually using.

### Text classes

The bulk of text styling happens in the `text.css` file. Here, we define display, heading, and body styles. 

#### Heirarchy

There are three levels of heirarhy to use for text: display, heading, and body. Each level has their own sub-hierarchy.

- `.display-1`
- `.display-1`
- `.display-1`
- `.heading-1`
- `.heading-2`
- `.heading-3`
- `.heading-4`
- `.heading-5`
- `.heading-6`
- `.body-1`
- `.body-2`
- `.body-3`

#### Text alignment

We often want to change the alignment of text. To do so, we have the following classes.

```
/* === TEXT ALIGNMENT === */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
```

### Examples

In our HTML, we can apply these classes as such:

```
<div>
  <h1 class="display-1">Hello world!</h1>
  <p class="body-1 text-center">This is just some body text.</p>
</div>
```

## Working with content wrappers
## Working with flex layouts
## Working with grid layouts

<!-- OUTDATED COMMENT

---
### Flex

The flex classes are all denoted by the `.f` class, with many flags to control certain flex related properties. 

The key two classes to handle flex layouts are `.f-row` and `.f-col` for row and column layouts, respectively.

```
.f-col, .f-row {
  display: flex;
  gap: var(--gap-m);
  flex-wrap: wrap;
}

.f-row { flex-direction: row; }
.f-col { flex-direction: column; }
```

Since flexboxes can be customized a lot, see the file for a all the flags and shorthands. 

#### Examples

The following is a flexbox row with two flexbox columns within it. 

```
<div class="f-row f-center-center">
  <div class="f-col">...</div>
  <div class="f-col">...</div>
  <div class="f-col">...</div>
</div>
```

---

### Grids

Grid classes are all denoted by the `.g` class, with many flags to control certain grid related properties. 

As grids can be complex, there are a few predefined, basic classes to handle one, two, three, and four equal column layouts.

Use the `-col` and `-#` flag to specify the type of grid parent: `.g-col-2` creates a two column grid.

```
.grid,
.g-col-1, .g-col-2,
.g-col-3, .g-col-4 {
  display: grid;
  gap: var(--gap-l);
  width: 100%;
  overflow-wrap: break-word;
}

.g-col-1 { grid-template-columns: repeat(1, 1fr); }
.g-col-2 { grid-template-columns: repeat(2, 1fr); }
.g-col-3 { grid-template-columns: repeat(3, 1fr); }
.g-col-4 { grid-template-columns: repeat(4, 1fr); }
```

#### Examples

The following is a grid with four columns within it. 

```
<div class="g-col-4">
  <div class="f-col">...</div>
  <div class="f-col">...</div>
  <div class="f-col">...</div>
  <div class="f-col">...</div>
</div>
```

---

### `wrappers.css`

A lot of the time we put our layouts into 'container' or 'wrapper' `divs and sections. We use these containers to build consistently spaced sections and blocks of content. 

The three most common container types used in Zen CSS are the .`section-wrap`, `.content-wrap`, and `.list-wrap`. Each has their own set of flags and modifying classes.

### `.section-wrap` and `.content-wrap`

The `.section-wrap` class is used to style sections that serve as the 'root' section. Basically, if the parent element is to take up the full width of the viewport, use this. There should **never** be a `.section-wrap` *within* another `.section-wrap`.

The `.content-wrap` is a generic content wrapper used for consistent content width.

```
.section-wrap,
.content-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--l);
  width: 100%;
}


.section-wrap {
    gap: var(--v-gap-section);
    padding: var(--padding-section);
}

.content-wrap {
    max-width: var(--max-w-xl);
    margin: 0 auto;
}
```

#### Examples

Here we have a basic section/content set up.

```
<footer class="section-wrap">
  <div class="content-wrap f-row">
    ...
  </div>
</footer>
```

Note that even though `.section-wrap` has the word 'section' in it, you can and should use the class on any element that you want.

---

### `.list-wrap`

The `.list-wrap` class is used when you want to get rid of all that default list styling on list elements. It conveniently makes the element a flexbox so that you can chain other `.f-[flags]` to its HTML class list.

```
.list-wrap {
    display: flex;
    padding: 0px;
    list-style: none;
}
```

#### Examples

Here we have a basic navigation element with links.

```
<nav class="section-wrap">
  <section class="content-wrap">
    <ul class="list-wrap f-row f-center-start">
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>
  </section>
</nav>
``` -->