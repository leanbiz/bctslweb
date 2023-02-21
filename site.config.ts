import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Bct-SL-640d268cd1f645fd8100d95ce288debe',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Bột cần tây sấy lanh',
  domain: 'botcantaysaylanh.com',
  author: 'MeliFarm.vn',
 
  // open graph metadata (optional)
  description: 'Bột cần tây sấy lạnh',
  // socialImageTitle: 'Misty 项目草稿',
  // socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'MiscMisty',
  github: 'NyaMisty',
  linkedin: null,
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  includeNotionIdInUrls: true,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Projects',
      pageId: 'Kho-h-c-9e60761d80d74f38b598534ac7967646'
    },
    {
      title: 'About',
      pageId: 'Kho-h-c-9e60761d80d74f38b598534ac7967646'
    },
    {
      title: 'Contact',
      pageId: 'Kho-h-c-9e60761d80d74f38b598534ac7967646'
    }
  ]
})
