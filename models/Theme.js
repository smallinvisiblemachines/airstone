const keystone = require('keystone');
const Types = keystone.Field.Types;

const Theme = new keystone.List('Theme');

Theme.add({
  name: { type: Types.Text },
  primaryColor: { type: Types.Color, required: true, initial: true },
  secondaryColor: { type: Types.Color },
  primaryFont: { type: String, required: true, initial: true },
  secondaryFont: { type: String },
  isActive: { type: Types.Boolean }
});

Theme.defaultColumns = 'name, primaryFont, primaryColor, secondaryColor, isActive';
Theme.register();