import PgLoginDesign from 'generated/pages/pgLogin';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import Color from '@smartface/native/ui/color';
import { Data } from '@smartface/native/global';

export default class PgLogin extends withDismissAndBackButton(PgLoginDesign) {
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
    
    this.btnLogin.onPress = () => {
        Data.setStringVariable("login", "login")
        this.router.push('/home/homePage');
    }

    this.lblPassword.onTouch = (e) => {
        this.router.push('/login/forgotPassword');
    }
  }
}
