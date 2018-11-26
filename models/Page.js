const keystone = require('keystone');
const Types = keystone.Field.Types;

const Page = new keystone.List('Page');

Page.add({
  title: { type: String, required: true, initial: true },
  url: { type: Types.Url, required: true, initial: true },
  description: { type: Types.Html, wysiwyg: true },
  published: { type: Boolean },
  // custom page type
  type: {
    type: Types.Select,
    initial: true,
    options: [
      'Landing',
      'Add Event',
    ]
  }
});


Page.defaultColumns = 'title, published, type, url';
Page.register();