import './scss/blog.scss';

// components
import { useTheme } from './theme';
useTheme();
import { useBurger } from './burger';
useBurger();
import { useBlogSlider, useArticleSlider } from './blog-slider';
useBlogSlider();
useArticleSlider();
import { useFilter } from './blog-filter';
useFilter();
