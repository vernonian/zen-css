# Zen CSS

## What is Zen.css?

A variable-driven CSS library with an atomic approach that is robust, simple, and flexible enough to style website systems.

### Variable-driven

Rewritting styles over and over again will always be tedious. Variables in CSS is nothing new and here, we are using them to have to remember less when composing HTML pages and custom styles.

As a rule of thumb, variable names are named after the CSS property that is represents with no spaces:

- `gap` becomes `--gap`
- `font-family` becomes `--fontfamily`
- `max-width` becomes `--maxwidth`
- `gap` becomes `--gap`

However, some are abbreviated:

- `border-radius` becomes `--br-`

### Flag modifiers

Flag modifiers are used create a robust and simple ecosystem of variable and class names.

Throught the variable and class declarations, we often provide flags or modifiers to the end of variable or class names. This is done to handle multiple versions of a style based on a certain use case.

Flags range from `xxl` to `xxs`, contextual keywords, and numbers.

#### Sizing flag key

- `-xxl`: Double extra large
- `-xl`: Extra large
- `-l`: Large
- `-m`: Medium, used as the default case
- `-s`: Small
- `-xs`: Extra small
- `-xxs`: Double extra small
- `-zero `: The number zero, as in `0px`

#### Misc flag key

Flags for font weight:
- `-bl`: Black
- `-b`: Bold
- `-sb`: Semi-bold
- `-m`: Medium
- `-r`: Regular
- `-l`: Light
 Note that the `-m` and `-l` are not the same for the sizing flags as they are contextual to the font weight property.
  
Flags for font family:
- `-serif`: Specifies the serif font
- `-sans`: Specifies the sans-serif font
- `-mono`: Specifies the monospace font

## CSS Files

Zen CSS contains a few main files:
|  File  |  Summary  |
| ------ | --------- |
| `zen.css` | Main file for importing all stylesheets |
| `reset.css`| Basic style resets |
| `units.css` | Variable definitions used throughout styles: mainly unit values |
| `colors.css`  | Color and gradient styles |
| `typogrpahy.css` | Text defaults, variables, and classes |
| `layouts.css` | Flex and grid layout classes |
| `wrappers.css` | Containers, content wrappers, etc. |
| `???.css` | This project is a work in progress |

You may notice that each additional file builds off the previous ones. For example, excluding `zen.css`, the first few files don't have any `@imports` but the last few do.

This is intentional as Zen CSS is being created with atomic design and 'bottom-up' thinking.

### `zen.css`

`zen.css` is the projects 'index' file. 

It imports all relevant stylesheets so other files only has to `@import url('./[path-to]/zen.css')` and not any of the other files. 

### `reset.css`

Reseting browser defaults is a good idea. That is what `reset.css` is for. 

If you have your own, paste your resetting styles here or link to your reset file in `zen.css`.

### `units.css`

The `unit.css` file contains various units used for spacing and timing. 

### `colors.css`

The `colors.css` file contains variable definitions for colors and gradients.

Colors are based on color ramps generated from (https://colorampgen.vercel.app/)[ColoRampGen]. There are 10 flags for colors, going from zero to nine. 

Zero (`-0`) is the lightest shade. Nine (`-9`) is the darkest shade. Five (`-5`) is the 'base' color.

#### Example

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

### `typography.css`

In addition to text related variable definitions, in the `typography.css` file we see class definitions for the first time. 

The classes in this file are (shockingly) all related to typography and text. There are three main types of text: `display`, `heading`, and `body`. Each class is named after its type plus a sizing flags such as `l`, `m`, `s`, or `1`, `2`, `3`.

All classes are composed with responsivity in mind.

#### `.display`

These styles are for huge and decorative text. Use them wherever you want to make an impression.

##### Flags

This class uses the numnerical flags `-l`, `-m`, `-s`.

#### `.heading`

Used for normal text headings. They correspond to the differen `html` header elements but can be used on any element.

##### Flags

This class uses the numnerical flags `-1`, `-2`, `-3`, `-4`,`-5`, `-6`.

#### `.body`

These styles are for body text. There are only four styles.

##### Flags

This class uses the numnerical flags `-l`, `-m`, `-s`, `-xs`.

#### Examples

```
<h1 class="display-m">Article Title</h1>
<p class="heading-3">Subtitle</p>
<h2> class="heading-1">...</h2>
<p class="body-m">...</p>
```

### `layouts.css`

This file contains only classes which are used for controlling layouts.

The two easiest and most responsive ways to create layouts with CSS is using flexboxes and grids. 

For both flex and grid styles, there are classes that act as generic classes that give the element the bare minumum to turn that element into either a flex or grid parent element.

Then, there are an expanded set of styles of modifying classes writen with the same type of flag modifiers.

Alas, not every layout is possible within this file. More sophisitcated grids should be handled ad-hoc with id selectors. 

#### Flex

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

##### Examples

The following is a flexbox row with two flexbox columns within it. 

```
<div class="f-row f-center-center">
  <div class="f-col">...</div>
  <div class="f-col">...</div>
  <div class="f-col">...</div>
</div>
```

#### Grids

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

##### Examples

The following is a grid with four columns within it. 

```
<div class="g-col-4">
  <div class="f-col">...</div>
  <div class="f-col">...</div>
  <div class="f-col">...</div>
  <div class="f-col">...</div>
</div>
```

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
```