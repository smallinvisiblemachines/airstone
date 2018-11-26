const keystone = require('keystone');
const Types = keystone.Field.Types;
const Page = new keystone.List('Page');
import theme from '../theme/index';

Page.add({
  title: { type: String, required: true, initial: true },
  path: { type: String, required:true, initial: true },
  // custom page type
  type: {
    type: Types.Select,
    initial: true,
    options: Object.keys(theme.pageTypes)
  },
  description: { type: Types.Html, wysiwyg: true },
  published: { type: Boolean },
});


Page.defaultColumns = 'title, path, type, published';
Page.register();