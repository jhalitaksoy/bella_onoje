import PgHelloDesign from 'generated/pages/pgHello';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import { Data } from '@smartface/native/global';
import { routeToGomeOrLoginOrWelcome } from 'start';
import Color from '@smartface/native/ui/color';

export default class PgHello extends withDismissAndBackButton(PgHelloDesign) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    this.statusBar.backgroundColor = Color.create("#FF4B3A");
    super.onShow();
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.textView1.text = "Food For\nEveryone";
    this.btnGetStarted.onPress = () => {
        Data.setBooleanVariable("firstOpenFlag", true);
        routeToGomeOrLoginOrWelcome();
    }
  }
}
