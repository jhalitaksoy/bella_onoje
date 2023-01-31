import PgSearchDesign from 'generated/pages/pgSearch';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import KeyboardAppearance from '@smartface/native/ui/shared/keyboardappearance';
import Application from '@smartface/native/application';
import { KeyboardMode } from '@smartface/native/application/application';

export default class PgSearch extends withDismissAndBackButton(PgSearchDesign) {
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
    this.goBackIcon.on("touch", () => {
        this.router.push("/home/main")
        // todo
        this.textBox1.requestFocus();
    });
    
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
  }
}
