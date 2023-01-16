import PgLoginDesign from 'generated/pages/pgLogin';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import Color from '@smartface/native/ui/color';
import { Data } from '@smartface/native/global';
import SwipeView from '@smartface/native/ui/swipeview';
import PgLoginTab from './pgLoginTab';
import PgRegisterTab from './pgRegisterTab';
import { isJSDocThisTag } from 'typescript';
import { Border } from '@smartface/native/ui/view/view';

export default class PgLogin extends withDismissAndBackButton(PgLoginDesign) {
    swipeView: SwipeView;
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.statusBar.backgroundColor = Color.WHITE;
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.initializeSwipeView();
  }

  initializeSwipeView() {
      this.swipeView = new SwipeView({
          page: this,
          pages: [
            //@ts-ignore
            PgLoginTab,
            //@ts-ignore
            PgRegisterTab,
          ],
          onStateChanged: ()=> {

          },
          
      });

      this.border1.backgroundColor = Color.create("#FA4A0C");
        this.border2.backgroundColor = Color.TRANSPARENT;
        
      //@ts-ignore
      this.label1.onTouch = (e) => {
        this.swipeView.swipeToIndex(0, true);
        this.border1.backgroundColor = Color.create("#FA4A0C");
        this.border2.backgroundColor = Color.TRANSPARENT;
      }
      
      //@ts-ignore
      this.label2.onTouch = (e) => {
        this.swipeView.swipeToIndex(1, true);
        this.border1.backgroundColor = Color.TRANSPARENT;
        this.border2.backgroundColor = Color.create("#FA4A0C");
      }

      this.flexLayout2.addChild(this.swipeView, "swipeView", ".sf-swipeView", {
          marginTop: 10,
      });
  }
}
