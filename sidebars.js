/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // defaultSidebar: [{ type: 'autogenerated', dirName: '.', }],
  hamsterSidebar: [
    'index',

    // {
    //   type: 'html',
    //   value: '<img src= "icon/WX20230524-141302.png" alt = "Template Market">',
    //   defaultStyle:true,
    // },
    {
      type: 'category',
      label: 'Automated Workflow',
      collapsible: true,
      collapsed: true,
      items: [
        'Automated workflow/Overview',
        {
          type: 'category',
          label: 'EVM Contracts',
          collapsible: true,
          collapsed: true,
          items: ['Automated workflow/EVM Contract/Create Project for EVM',
                  'Automated workflow/EVM Contract/Check EVM Contract', 
                  'Automated workflow/EVM Contract/Build EVM Contract', 
                  'Automated workflow/EVM Contract/Deploy EVM Contract',
                  'Automated workflow/EVM Contract/Exploring EVM Contract',
                  'Automated workflow/EVM Contract/Manage EVM Project'],
        },
        {
          type: 'category',
          label: 'Starknet Contracts',
          collapsible: true,
          collapsed: true,
          items: ['Automated workflow/Starknet Contract/Overview',
                  'Automated workflow/Starknet Contract/Create Contract Project',
                  'Automated workflow/Starknet Contract/Check Contract', 
                  'Automated workflow/Starknet Contract/Build Contract', 
                  'Automated workflow/Starknet Contract/Deploy Contract',
                  'Automated workflow/Starknet Contract/Explore Contract',
                  'Automated workflow/Starknet Contract/Manage Project'],
        },
        {
          type: 'category',
          label: 'Front-End Project',
          collapsible: true,
          collapsed: true,
          items: ['Automated workflow/Front-End Project/Create Project for Front-End',
                  'Automated workflow/Front-End Project/Check Front-End Code', 
                  'Automated workflow/Front-End Project/Build Front-End Code', 
                  'Automated workflow/Front-End Project/Deploy Front-End Code',
                  'Automated workflow/Front-End Project/Exploring Front-End Project',
                  'Automated workflow/Front-End Project/Manage Front-End Project'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Middleware',
      collapsible: true,
      collapsed: true,
      items: [
        'Middleware/Overview',
        'Middleware/MiddlewareServer',
        'Middleware/Getting Started/GettingStarted',
      {
          type: 'category',
          label: 'User Guide',
          collapsible: true,
          collapsed: true,
          items: ['Middleware/User Guide/RPC/RPC','Middleware/User Guide/Hamslink/Hamslink'],
       },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'ALine CI',
          collapsible: true,
          collapsed: true,
          items: ['AlineCI/overview','AlineCI/syntax', 'AlineCI/plugins'],
        },
      ],
    },
    'ReleaseNote/release',
  ],
}

module.exports = sidebars

