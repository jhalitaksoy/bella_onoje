import PgProfileDesign from 'generated/pages/pgProfile';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';

export default class PgProfile extends withDismissAndBackButton(PgProfileDesign) {
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
    this.btnLogout.onPress = () => {
        Data.removeVariable("login");
        this.router.push('/login/loginPage');
    }
    this.btnReset.onPress = () => {
        Data.removeAllVariables();
        this.router.push('/welcome/welcomePage');
    }
  }
}
