# Agent guidelines

## Styling with class-recipe

Use [class-recipe](https://lynstack.github.io/recipe/class-recipe/installation/) for component class names. Import from `@libs/classRecipe/variants`, not from `@lynstack/class-recipe` directly. The local exports are created with `createRecipes({ join: twMerge })`, so conflicting Tailwind classes are merged.

```ts
import { cva, cx, sva } from '@libs/classRecipe/variants';
```

### Which function to use

| You want to                                                              | Use             |
| ------------------------------------------------------------------------ | --------------- |
| Style one element, such as a button                                      | `cva`           |
| Style several elements together, such as a card and its header           | `sva`           |
| Join class names, as with clsx                                           | `cx`            |
| Merge classes with a custom join, such as twMerge, or turn off the cache | `createRecipes` |
