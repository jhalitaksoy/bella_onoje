import PgHomeDesign from 'generated/pages/pgHome';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import { Data } from '@smartface/native/global';
import Color from '@smartface/native/ui/color';

export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.statusBar.backgroundColor = Color.WHITE;
    this.button1.onPress = () => {
        Data.removeVariable("login");
        this.router.push('/login/loginPage');
    }

    this.button1_1.onPress = () => {
        Data.removeAllVariables();
        this.router.push('/welcome/welcomePage');
    }
  }
}
