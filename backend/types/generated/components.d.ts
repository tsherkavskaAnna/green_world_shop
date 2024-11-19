import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCookieButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cookie_buttons';
  info: {
    description: '';
    displayName: 'Cookie Button';
    icon: 'mouse-pointer';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cookie-button': SharedCookieButton;
    }
  }
}
