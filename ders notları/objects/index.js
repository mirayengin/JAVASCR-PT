//? OBJECT LİTERALS //


let val;
let person = {
    firstName: "erhan",
    lastName: "fırat",
    age: '31',
    hobies: ['music', 'game'],
    adress: {
        city: 'Bolu',
        country : 'Turkey'
    }
};
val = person.firstName;  //? Object ten eleman çağırırken objenin ismi ve variable nını yazıyoruz zaten o nokta koyunca objectin içindeki elemanlar çıkacaktır.*/
console.log(val);
val = person.lastName;
console.log(val);
val = person['firstName'];
console.log(val);
val = person.age;
console.log(val);
val = person.hobies[1]; //! person.hobies.game Burada eleman bir object ti ve onun içine indexleme yaparak girdik.İnexlemeyi hobies bir array olduğu için yapık. 
console.log(val);
val = person.hobies.length;
console.log(val);
val = person.adress;
console.log(val);
val = person.adress.city; //! person.adress["city"]
console.log(val);



console.log(person);
console.log(typeof person);

//? metod yapımı

let val1;
let person1 = {
    firstName: "erhan",
    lastName: "fırat",
    age: '31',
    hobies: ['music', 'game'],
    adress: {
        city: 'Bolu',
        country : 'Turkey'
    },

    getBirthyear: function () {
        return 2022 - this.age; //! Burada this person içide yazdığıız için onu belirtir. Bu yüzden onun içindeki öğelere erişebiliriz. 
    }
};

val1 = person1.getBirthyear(); //! Burada ise yaptığımız fonk çağırdık.

console.log(val1);






let choose;
let people = [
    { firstName: 'Erhan', lastName: 'FIRAT' },
    { firstName: 'Aslı', lastName: 'FIRAT' },
    { firstName: 'Miray', lastName:'FIRAT'},
    { firstName: 'Engin', lastName:'FIRAT'}
];  //? Bu object içöinde objectler bulunduruyor. Bu object lere indexleme yaparak ulaşıyoruz.


choose = people[2];
console.log(choose);

choose = people[2].firstName; //? Burada içindekilere ulaştık index ile çünkü arraydı ve sonrada object in içindeki variable yazarak ekrana display yaptık.
console.log(choose);

choose = people[2].lastName;
console.log(choose);

choose = people[1].firstName;
console.log(choose);

choose = people[1].lastName;
console.log(choose);

console.log(people);
console.log(typeof people);

let car = [
{
    id : 'bmw116d_123',
    model: 'bmw 116d',
    year: '2015',
    color: 'green',
    service: [
        {
            id: 'bmw116d_123_1',
            date: '20.01.2022',
            km: '16800',
            price: 900,
            result: [
                {
                    id: 'bmw116d_123_1_1',
                    explain: 'oil change price',
                    price : 300
                },

                {
                    id: 'bmw116d_123_1_2',
                    explain: 'filter change price',
                    price : 300
                },


                {
                    id: 'bmw116d_123_1_3',
                    explain: 'hydrolicoil change price',
                    price : 300
                }
            ]
        },

        {
            id: 'bmw116d_123_2',
            date: '20.05.2022',
            km: '16800',
            price: 1900,
            result: [
                {
                    id: 'bmw116d_123_2_1',explain: 'oil change price',price : 300
                },

                {
                    id: 'bmw116d_123_2_2',explain: 'filter change price',price : 300
                },


                {
                    id: 'bmw116d_123_2_3',explain: 'hydrolicoil change price',price : 300
                },

                {
                    id: 'bmw116d_123_2_4',explain: 'balata change price',price : 900
                }
            ]
        }
    ]
}

]

