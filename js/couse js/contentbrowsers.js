var index = 0;
var contentt = [
    {
        contenttext: "Предшествениците на уеб браузъра се появиха под формата на хиперсвързани приложения през средата и края на 80-те години и след тях Тим Бърнърс-Лий е кредитиран за разработването през 1990 г. и на първия уеб сървър, и на първия уеб браузър, наречен WorldWideWeband по-късно преименуван на Nexus. Много други бяха разработени скоро, като Mosaic от 1993 г. на Марк Андресен (по-късно Netscape) беше особено лесен за използване и инсталиране и често се кредитира с разпалване на интернет бума на 90-те години. Днес основните уеб браузъри са Chrome, Safari, Internet Explorer, Firefox, Opera и Edge.",
    },
    {
        contenttext: "Експлозията на популярността на мрежата е предизвикана през септември 1993 г. от NCSA Mosaic, графичен браузър, който в крайна сметка работи на няколко популярни офис и домашни компютри. Това беше първият уеб браузър, който имаше за цел да предостави мултимедийно съдържание на нетехнически потребители и затова включи изображения и текст на същата страница, за разлика от предишните дизайни на браузъра; неговият основател Марк Андреесен също създаде компанията, която през 1994 г. пусна Netscape Navigator, което доведе до една от ранните войни за браузъри, когато се озова в конкуренция за доминиране (която загуби) с Internet Explorer на Microsoft (за Windows)",
    },
    {
        contenttext: "Отначало проектът Mozilla се бореше да привлече разработчици, но до 2002 г. той се превърна в сравнително стабилен и мощен интернет пакет. Mozilla 1.0 беше освободен, за да отбележи този важен момент. Също през 2002 г. беше пуснат проект за спинов, който в крайна сметка ще стане популярният Firefox. Firefox винаги беше свалян безплатно от самото начало, както беше и неговият предшественик, браузърът Mozilla. Бизнес моделът на Firefox, за разлика от бизнес модела на Netscape от 90-те години на миналия век, се състои главно от правене на сделки с търсачки като Google за насочване на потребителите към тях - вижте уеб браузър # Бизнес модели. През 2003 г. Microsoft обяви, че Internet Explorer вече няма да бъде предлаган като отделен продукт, но ще бъде част от развитието на неговата Windows платформа и че няма да се правят повече версии за Macintosh.",
    },
];

function getNextcontent(){
    if (index < contentt.length)
        return contentt[index++];
    else {
        return null;
    }
}



