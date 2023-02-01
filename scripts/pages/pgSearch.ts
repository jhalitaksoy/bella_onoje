import PgSearchDesign from 'generated/pages/pgSearch';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import KeyboardAppearance from '@smartface/native/ui/shared/keyboardappearance';
import Application from '@smartface/native/application';
import { KeyboardMode } from '@smartface/native/application/application';
import FlProductItem from 'components/FlProductItem';
import Color from '@smartface/native/ui/color';


const items = [
    {
        title: "Veggie tomato mix"
    },
    {
        title: "Egg and cucmber..."
    },
    {
        title: "Fried chicken m."
    },
    {
        title: "Moi-moi and ekpa."
    },
    {
        title: "Veggie tomato mix"
    },
    {
        title: "Fried chicken m."
    },
    {
        title: "Moi-moi and ekpa."
    },
    {
        title: "Veggie tomato mix"
    },
    {
        title: "Fried chicken m."
    },
    {
        title: "Moi-moi and ekpa."
    },
];

export default class PgSearch extends withDismissAndBackButton(PgSearchDesign) {
    filteredData = items;
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.statusBar.backgroundColor = Color.create("#EEEEEE");
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
    this.goBackIcon.on("touch", () => {
        this.router.push("/home/main")
        
    });
    // todo
    this.textBox1.requestFocus();
    this.headerBar.borderVisibility = false;
    this.headerBar.visible = false;

    //this.gridView1.layoutManager.lineSpacing = 20;
    //this.gridView1.layoutManager.itemSpacing = 60;

    this.textBox1.onTextChanged = () => {
        if(this.textBox1.text.length === 0 ) {
            this.filteredData = items;
        } else {
            this.filterData(this.textBox1.text);)
        }
        this.gridView1.itemCount = this.filteredData.length;
        console.log(this.gridView1.itemCount);
        
        this.gridView1.refreshData();
    }
  }

  filterData(text: string) {
    this.filteredData = [];
    for (const item of items) {
        if(item.title.toLowerCase().indexOf(text.toLowerCase()) >= 0){
            console.log("add: ", text);
            console.log("item.title: ", item.title.indexOf(text));
            
            this.filteredData.push(item);
        }
    }
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();

    let j = -1;
    let i = -1;
    this.gridView1.onItemType = (index: number) => {
        return index;
    }
    this.gridView1.layoutManager.onItemLength = (lenght) => {
        const a = j % 2 === 0 ? 230 : 260;
        return a;
    }
    this.gridView1.onItemBind = (item, index) => {
        i++;
        const a = i % 2 === 0 ? 0 : 30;
        item.children.flProductItem.marginTop = a;
        const flProductItem = item.children.flProductItem as FlProductItem;
        flProductItem.txtTitle.text = this.filteredData[index].title;
    }
    this.gridView1.refreshEnabled = false;
  }
}
