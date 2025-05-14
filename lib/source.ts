// .source folder will be generated when you run `next dev`
import { docs } from '@/.source';
import { createElement } from 'react';
import { icons } from 'lucide-react';
import { loader } from 'fumadocs-core/source';
import Logo, { brands } from '@/components/logos';

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }

    if (icon && brands.includes(icon)) {
      return createElement(Logo, { name: icon });
    }
  },
  source: docs.toFumadocsSource(),
});