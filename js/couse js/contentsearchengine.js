var index = 0;
var contentt = [
    {
        contenttext: "Търсачката Archie, създадена от Алън Емдж, Бил Хелан и Дж. Питър Дойч, студенти по компютърни науки в университета Макгил в Монреал, излиза на живо. Програмата изтегля списъка с директории на всички файлове, разположени на публични анонимни FTP (File Transfer Protocol) сайтове, създава база данни за търсене с много имена на файлове; Арчи обаче не индексира съдържанието на тези сайтове, тъй като количеството данни е толкова ограничено, че може лесно да се търси ръчно.",
    },
    {
        contenttext: "Възходът на Gopher (създаден през 1991 г. от Марк Маккейъл в университета в Минесота) води до две нови програми за търсене, Вероника и Джугхед. Подобно на Арчи, те търсят имената на файлове и заглавия, съхранявани в индексните системи на Gopher. Veronica (Много лесно ориентиран към гризачи индекс към компютъризирани архиви) предоставя търсене по ключова дума на повечето заглавия от менюто Gopher в целия списък на Gopher. Jughead (Универсално изкопване и показване на йерархията на Gopher Jonzy) е инструмент за получаване на информация за менюто от конкретни сървъри Gopher Докато името на търсачката Арчи не беше препратка към поредицата от комиксите на Арчи, Вероника и Джугхед са герои в поредицата, като по този начин се позовава на техния предшественик.",
    },
    {
        contenttext: "Матю К. Грей произвежда първия известен уеб робот, базиран в Perl World Wide Web Wanderer, и го използва за генериране на индекс на мрежата, наречен Wandex. Въпреки това, World Wide Web Wanderer е предназначен само за измерване на размера на мрежата, а не за улесняване на търсенето.",
    },
];

function getNextcontent(){
    if (index < contentt.length)
        return contentt[index++];
    else {
        return null;
    }
}


