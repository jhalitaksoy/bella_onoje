import FlTabbarItemDesign from 'generated/my-components/FlTabbarItem';

export default class FlTabbarItem extends FlTabbarItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
