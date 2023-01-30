import PgHomeDesign from 'generated/pages/pgHome';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import { Data } from '@smartface/native/global';
import Color from '@smartface/native/ui/color';
import FlTabbarItem from "components/FlTabbarItem"
import FlProductItem from "components/FlProductItem"
import ScrollView from "@smartface/native/ui/scrollview"
import FlexLayout from "@smartface/native/ui/flexlayout"
import TextAlignment from '@smartface/native/ui/shared/textalignment';
import Path from '@smartface/native/io/path';

export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    this.statusBar.backgroundColor = Color.create("#F2F2F2");
    super.onShow();
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
    this.headerBar.borderVisibility = false;
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    
    this.initializeProductsTabbar();
    this.initializeProducts();
  }

  initializeProductsTabbar() {
    const items = [
        {
            title: "Foods"
        },
        {
            title: "Drinks"
        },
        {
            title: "Snacks"
        },
        {
            title: "Sauce"
        },
        {
            title: "Foods"
        },
    ];
    const items2 = [];
    this.flTabbarHeader.contetScroll = new ScrollView({
        //@ts-ignore
        align: "horizontal",
        height: 40,
        flexGrow: 1,
    });
    const flexLayout = new FlexLayout({
        flexDirection: 2,
        height: 40,
        width: 500,
    });
    let i = 0;
    this.flTabbarHeader.contetScroll.addChild(flexLayout);
    this.flTabbarHeader.contetScroll.bounces = false;
    this.flTabbarHeader.contetScroll.scrollBarEnabled = false;
    for (const item of items) {
        const flTabbarItem = new FlTabbarItem();
        flTabbarItem.alignContent = FlexLayout.AlignContent.CENTER;
        flTabbarItem.justifyContent = FlexLayout.JustifyContent.CENTER;
        flTabbarItem.tabbarText.text = item.title;
        flTabbarItem.width = 100;// todo
        flTabbarItem.tabbarText.width = 100;// todo
        flTabbarItem.tabbarText.height = 37;// todo
        flTabbarItem.tabbarText.textAlignment = TextAlignment.MIDCENTER;
        flTabbarItem.line.height = 3;
        flTabbarItem.line.width = 75;
        flTabbarItem.line.marginLeft = 12;
        if(i === 0) {
            flTabbarItem.line.backgroundColor = Color.create("#FA4A0C");
            flTabbarItem.tabbarText.textColor = Color.create("#FA4A0C");
        }
        flTabbarItem.tabbarText.onTouch = () => {
            for (const item of items2) {
                item.line.backgroundColor = Color.TRANSPARENT;
                item.tabbarText.textColor = Color.create("#9A9A9D");
            }
            flTabbarItem.tabbarText.textColor = Color.create("#FA4A0C");
            flTabbarItem.line.backgroundColor = Color.create("#FA4A0C");
            this.onSelect(item);
        }
        flexLayout.addChild(flTabbarItem);
        i++;
        items2.push(flTabbarItem);
    }
    this.flTabbarHeader.addChild(this.flTabbarHeader.contetScroll);
  }

  onSelect(item: any) {
    console.log(item);
    
  }

  initializeProducts() {
    const items = [
        {
            title: "Foods"
        },
        {
            title: "Drinks"
        },
        {
            title: "Snacks"
        },
        {
            title: "Sauce"
        },
        {
            title: "Foods"
        },
    ];
    const scroll = new ScrollView({
        //@ts-ignore
        align: "horizontal",
        height: 400,
        flexGrow: 1,
    });
    const flexLayout = new FlexLayout({
        flexDirection: 2,
        height: 400,
        width: 1000,
    });
    let i = 0;
    scroll.addChild(flexLayout);
    scroll.bounces = false;
    scroll.scrollBarEnabled = false;
    for (const item of items) {
        const flProductItem = new FlProductItem();
        flProductItem.height = 300;
        flProductItem.width = 175;
        flProductItem.margin = 20;
        flProductItem.flProductInside.marginTop = 25;
        flProductItem.flProductInside.backgroundColor = Color.WHITE;
        flProductItem.flProductInside.borderRadius = 30;
        flProductItem.flProductInside.height = 250;
        flProductItem.flProductInside.width = 200;
        flProductItem.flProductInside.alignItems = FlexLayout.AlignItems.CENTER;
        flProductItem.flProductItemWrapper.alignItems = FlexLayout.AlignItems.CENTER;
        flProductItem.txtTitle.marginTop = 100;
        flProductItem.lblPrice.marginTop = 25;
        flProductItem.txtTitle.textAlignment = TextAlignment.MIDCENTER;
        flProductItem.lblPrice.textAlignment = TextAlignment.MIDCENTER;
        flProductItem.imageViewProduct.backgroundColor = Color.BLUE;
        flProductItem.imageViewProduct.height = 100;
        flProductItem.imageViewProduct.width = 100;
        flProductItem.imageViewProduct.positionType = FlexLayout.PositionType.ABSOLUTE;
        flProductItem.imageViewProduct.android.zIndex = 30;
        flProductItem.imageViewProduct.image = Path.AssetsUriScheme + "image140.png";
        flProductItem.imageViewProduct
        flexLayout.addChild(flProductItem);
    }
    this.flProductList.addChild(scroll);
  }
}
