import { defineConfig } from 'vitepress';


export default defineConfig({
  title: 'My Vue Component Library',
  description: 'A collection of reusable Vue components.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' }
    ]
  }
});
