import 'theme';
import router from 'router'
import { Data } from '@smartface/native/global';

export function routeToGomeOrLoginOrWelcome() {
    if(Data.getBooleanVariable("firstOpenFlag") !== true) {
        router.push('/welcome/welcomePage');
    } else {
        if(Data.getStringVariable("login")) {
            router.push('/home/homePage');
        } else {
            router.push('/login/loginPage');
        }
    }
}

routeToGomeOrLoginOrWelcome();


