// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const codeInjector = require('./src/remark/code-injector')

const baseUrl = '/docs/'

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: 'Hamster Docs',
  tagline: 'User Documentation',
  url: 'https://hamsternet.io/',
  baseUrl: baseUrl,
  favicon: '/img/favicon.png',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  organizationName: 'hamster-shared', // Usually your GitHub org/user name.
  projectName: 'hamster-doc', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          editUrl: 'https://github.com/hamster-shared/gitbook/blob/main',
          remarkPlugins: [codeInjector],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: 'Hamster Logo',
          srcDark: 'img/logo-dark.svg',
          src: 'img/logo-white.svg',
          href: 'https://hamsternet.io'
        },
        items: [
          {
            href: 'https://github.com/hamster-shared',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: null,
            items: [
              {
                html: `
                  <a class="social-link" href="https://hamsternet.io" target="_blank" rel="noopener noreferrer" title="Git">
                     <img class="logo" src="${baseUrl}img/logo-dark.svg" alt="Hamster Logo" />
                  </a>
                `,
              },
            ],
          },
          {
            title: null,
            items: [
              {
                html: `
                <p class="emails">
                  If you have any questions, please contact us at </br>
                  <a href="mailto:hamster@hamsternet.io" target="_self" rel="noreferrer noopener">
                  hamster@hamsternet.io
                  </a>
                </p>
              `,
              },
            ],
          },
          {
            title: null,
            items: [
              {
                html: `
                  <p class="right">
                    <nav class="social-links">
                        <a class="social-link" href="https://github.com/hamster-shared" target="_blank" rel="noopener noreferrer" title="Git">
                         <img class="icon" src="${baseUrl}img/socials/git.svg" alt="Git Icon" />
                        </a>
                        <a class="social-link" href="https://twitter.com/Hamsternetio" target="_blank" rel="noopener noreferrer" title="Twitter">
                        <img class="icon" src="${baseUrl}img/socials/twitter.svg" alt="Twitter Icon" />
                        </a>
                        <a class="social-link" href="https://discord.gg/MrJWxRwXpb" target="_blank" rel="noopener noreferrer" title="Discord">
                          <img class="icon" src="${baseUrl}img/socials/discord.svg" alt="Discord Icon" />
                        </a>
                        <a class="social-link" href="https://hamsternet.medium.com" target="_blank" rel="noopener noreferrer" title="Medium">
                          <img class="icon" src="${baseUrl}img/socials/medium.svg" alt="Medium Icon" />
                        </a>
                    </nav>
                  </p>
              `,
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
}

module.exports = config
