import FlTabbarHeaderDesign from 'generated/my-components/FlTabbarHeader';

export default class FlTabbarHeader extends FlTabbarHeaderDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
