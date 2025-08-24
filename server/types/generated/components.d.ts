import type { Schema, Struct } from '@strapi/strapi';

export interface PageHeader extends Struct.ComponentSchema {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    bodycopy: Schema.Attribute.Text;
    btn: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    bodycopy: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.header': PageHeader;
      'page.section': PageSection;
    }
  }
}
