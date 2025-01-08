export interface Test {
  test: string;
}
export interface ContextType {
  activeCodeTheme: ThemeType;
  changeCodeTheme: (arg: ThemeType) => void;
  isMobile: boolean;
}
export interface ArticleElement {
  href: string;
  description: string;
  alt: string;
  created: string;
  title: string;
  image: string;
}
export enum ThemeType {
  GRAY = 'GRAY',
  COLOR = 'COLOR',
  HIGH_CONTRAST = 'HIGH_CONTRAST',
}

export enum RouteType {
  STREAMING_PLATFORM_DOCS = 'streaming-platform-docs',
  CRYPTOCURRENCY_APP_DOCS = 'cryptocurrency-app-docs',
  CRYPTOCURRENCY_APP_PRODUCT = 'cryptocurrency-app-product',
  STREAMING_PLATFORM_PRODUCT = 'streaming-platform-product',
  HOMEPAGE = '',
  SERVICES = 'services',
  ABOUT_US = 'about_us',
}
