import './styles.css';
import { createHomepage } from './homepage';

document.addEventListener('DOMContentLoaded',()=>{
    createHomepage();

    const homeButton=document.querySelector('.home');
    if(homeButton){
        homeButton.addEventListener('click',function(){
            createHomepage();
        });
    }
});
