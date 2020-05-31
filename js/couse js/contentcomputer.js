var index = 0;
var contentt = [
    {
        contenttext: "В периода 1812 – 1822 г. английският математик Чарлз Бабидж конструира машина за автоматизирана обработка на таблица от числови данни, за която получава златен медал от Астрономическото общество на Великобритания. Тъй като резултатите от работата на машината не били пригодни за по-нататъшна обработка, Бабидж започва работа върху машина, която да изпълнява функциите на универсален изчислител. Наследство от неговата работа са над 200 чертежа, в които са изобразени около 50 000 детайла и около 4000 пояснения към тях. Проектираната от Бабидж машина съдържа няколко устройства: за запазване на цифровата информация (числата), за извършване на операции, за управление на последователността от операции, и за въвеждане и извеждане на числата; с други думи – всички основни блокове на архитектурата на съвременните компютри. С въвеждането на управляващо устройство Бабидж става автор на фундаменталния принцип на програмното управление: процесът на обработката на информация (данни) се направлява от друга информация (инструкции или програма), специално предназначена за това.",
    },
    {
        contenttext: "Принос към развитието на изчислителните машини има и Херман Холерит, който в края на 19-и и началото на 20 век проектира система за въвеждане на набор от символи върху перфокарта, и изобретява табулираща машина която Холерит използва с успех за автоматизиране на изчислителната дейност по преброяване на населението на САЩ. Под ръководството на Мокли, Екерт и Голдстайн, десет инженера, 200 техника и голям брой работници и помощен персонал създават за две години (1943 – 45 г.) първата универсална действаща електронна изчислителна машина, наречена (Electronics Numerical Integrator and Computer), работеща с десетична бройна система. Машината съдържа около 18 000 електронни лампи и 1500 релета и консумира около 130 kW мощност.",
    },
    {
        contenttext: "Управлението на машината (задаването на инструкции) се извършва с комутационен панел с щепсели и превключватели, което изисква значително време и усилия при изпълнението на всяка нова задача, т.е. ENIAC не е компютър със запаметена програма. Паметта за данни е с обем 20 машинни думи. Работата върху ENIAC е засекретена и поради това случайно, при разговор с Голдстайн, през 1944 г. за нея разбира Джон фон Нойман. На 30 юни 1945 г. (още преди завършването на ENIAC) той публикува изследване, озаглавено „Първа чернова на доклад за EDVAC“ („First Draft of a Report on the EDVAC“), в което описва принципите на компютър със запаметена програма, т.е. програмата, както и данните, трябва да бъде представена като набор от двоични числени стойности, които да се пазят в паметта, което би позволило машината да извършва операциите доста по-бързо, отколкото ако инструкциите се задават чрез физическо свързване.",
    },
];

function getNextcontent(){
    if (index < contentt.length)
        return contentt[index++];
    else {
        return null;
    }
}



