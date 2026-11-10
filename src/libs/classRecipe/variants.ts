import { createRecipes } from '@lynstack/class-recipe';
import { twMerge } from 'tailwind-merge';

export const { cx, cva, sva } = createRecipes({ join: twMerge });
