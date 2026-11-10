# Agent guidelines

## Styling with class-recipe

Use [class-recipe](https://lynstack.github.io/recipe/class-recipe/installation/) for component class names. Import from `@libs/classRecipe/variants`, not from `@lynstack/class-recipe` directly. The local exports are created with `createRecipes({ join: twMerge })`. Change the join or cache there, not per component.

```ts
import { cva, cx, sva } from '@libs/classRecipe/variants';
```

Follow the rules in the class-recipe skill (`.claude/skills/class-recipe`).

### Which function to use

| You want to                                                    | Use   |
| -------------------------------------------------------------- | ----- |
| Style one element, such as a button                            | `cva` |
| Style several elements together, such as a card and its header | `sva` |
| Add classes that set properties the recipe leaves alone        | `cx`  |

### Do

- Set each CSS property of an element in one place: `base`, one variant, or compound variants.
- Put shared classes in `base` and the differences in variants.
- When several props set the same property, derive one variant in the component.
- Declare options that add no classes as `""` (or `{}` in a slot recipe).
- Use `composes` to share a recipe instead of copying its config.
- Type props with `VariantsOf<typeof recipe>`.
- Write the config inside the `cva(…)` or `sva(…)` call.

### Don't

- Override a recipe with `className` or `classNames`. Add an option to the variant that owns the property.
- Set again a property that a composed recipe sets.
- Use compound variants to override a variant.
- Pick classes with lookup objects or conditionals.
