class ExampleRequest {
    constructor (name, phone, email, product) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }
}

const testData = [
    new ExampleRequest("Анатолий Зайцев", 89995467373, "zaicev@mail.ru", "course-html"),
    new ExampleRequest("Ксения Романова", 89113450203, "romanovaKS@mail.ru", "course-vue"),
    new ExampleRequest("Евгений Ветров", 88127894512, "vetrov_e@gmail.com", "course-php"),
    new ExampleRequest("Андрей Прокофьев", 89083334545, "prokofiev@inbox.ru", "course-js"),
    new ExampleRequest("Жанна Солнцева", 89189997315, "solnce5503@bk.ru", "course-vue"),
    new ExampleRequest("Лидия Петрова", 89051231213, "lidya-petr@yandex.ru", "course-wordpress"),
    new ExampleRequest("Эльмира Блок", 89994579496, "blockEI@gmail.com", "course-wordpress"),
    new ExampleRequest("Александр Белый", 89126347589, "sashawhite@mail.ru", "course-js"),
];

function getRandomIndex(max){
    return Math.floor(Math.random() * max);
};

export default function getRandomRequest(){
    const random = getRandomIndex(testData.length);
    return testData[random];
}