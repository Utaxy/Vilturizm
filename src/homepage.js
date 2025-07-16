import bgImage from './asset/resources/bg-image.jpeg';
import contentImg from './asset/resources/content-img.jpeg';
import quoteImg from './asset/resources/eff540d39420febdaa48c41374a4fcbb-removebg-preview.png';
import securityImg from './asset/resources/security.png';
import phoneImg from './asset/resources/phone.png';
import userImg from './asset/resources/user.png';



export function createHomepage(){

    const content= document.getElementById('content');
    if(content.querySelector('.background-image-container')){
        return;
    }
    content.innerHTML =`
        <div class="background-image-container">
            <div class="overlay"></div>
            <img src="${bgImage}">
            <div class="image-text-container">
                <div class="header-text">Gelecegimizi tasiyoruz.</div>
                <div class="text">
                    Her sabah çocuklarınızın okula güvenli ulaşımından, hafta sonları ailenizle
                    yapacağınız unutulmaz gezilere kadar... Vilturizm olarak,<br> hayatınızın her anında güvenilir çözümler sunuyoruz.
                    Okul servisleri, turlar, özel organizasyonlar - her hizmetimizde aynı kalite,<br> aynı güvenlik. Çünkü biz sadece araç değil, güven ve konfor sağlıyoruz.
                    Bugün güvenli, yarın keyifli. Vilturizm ile geleceğinizi taşıyın.
                </div>
                <div class="more-info-button-wrapper">
                    <button class="more-info">Detayli bilgi></button>
                </div>
            </div>
        </div>
        <div class="content-wrapper">
            <img class="content-img" src="${contentImg}">
            <div class="content-text">
                <h2>Çocuklarınız Güvende, Siz Huzurdasınız</h2>
                <p>
                    Vilturizm okul servisi olarak, her sabah çocuklarınızın okula güvenli 
                    bir şekilde ulaşmasını sağlıyoruz. Eğitimli şoförlerimiz ve düzenli 
                    bakımdan geçen araçlarımızla, ailenizin değerli fertlerini koruma 
                    altına alıyoruz. Size sadece "güle güle" deme fırsatı bırakıyoruz.
                </p>
            </div>
        </div>
        <div class="testimonials">
            <img class="quote" src="${quoteImg}">
            <div class="testimonial-item"></div>
            <img class="quote2" src="${quoteImg}">
        </div>
        <div class="customer-satisfaction">
            <div class="customer-satisfaction-bg">
                <div class="customer-sec-img">
                    <img class="customer-security" src="${securityImg}">
                    <div class="cus-sec-text">Guvenliginiz bizim icin her zaman on planda</div>
                </div>
                <div class="customer-phone">
                    <img class="customer-satisfaction-phone" src="${phoneImg}">
                    <div class="cus-phone-text">Bize her zaman ulasabilirsiniz</div>
                </div>
                <div class="user-img">
                    <img class="users" src="${userImg}">
                    <div class="user-text">1000 den fazla okul ile is yaptik</div>
                </div>
            </div>
        </div>
    `;
}



