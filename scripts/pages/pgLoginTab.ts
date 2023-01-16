import PgLoginTabDesign from 'generated/pages/pgLoginTab';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import Font from '@smartface/native/ui/font';
import Data from '@smartface/native/global/data';
import { FontStyle } from '@smartface/native/ui/font/font';

export default class PgLoginTab extends withDismissAndBackButton(PgLoginTabDesign) {
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
    this.mtbEmail.android.textBoxHeight = 60;
    this.mtbPassword.android.textBoxHeight = 60;
    this.mtbEmail.font = Font.create("Arial-ItalicMT", 16, FontStyle.BOLD);
    this.mtbPassword.font = Font.create("Arial-ItalicMT", 16, FontStyle.BOLD);

    this.button1.onPress = () => {
        Data.setStringVariable("login", "login")
        Router.currentRouter.push('/home/homePage');
    }

    this.lblForgotPassword.onTouch = (e) => {
        Router.currentRouter.push('/login/forgotPassword');
    }
  }
}
