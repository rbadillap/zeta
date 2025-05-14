import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/components/logos';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'zeta',
  },
  links: [
    {
      type: 'custom',
      children: (
        <GithubInfo owner="rbadillap" repo="zeta" />
      ),
    },
  ],

};