let userPunto = 10;
const newArrayQuestions = [
    { letter: 'a', answer: 'atril', status: 0, question: 'CON LA A. Soporte con un plano inclinado que sirve…papeles o partituras y leerlos con más comodidad.' },
    { letter: 'b', answer: 'bucle', status: 0, question: 'CON LA B. Conjunto de instrucciones cuya ejecución…eterminada condición de salida se vea satisfecha.' },
    { letter: 'c', answer: 'cameo', status: 0, question: 'CON LA C. Aparición breve de una persona famosa en una película o una serie de televisión.' },
    { letter: 'd', answer: 'dolmen', status: 0, question: 'CON LA D. Monumento megalítico formado por una los…al que se apoya sobre grandes piedras verticales.' },
    { letter: 'e', answer: 'erizo', status: 0, question: 'CON LA E. Mamífero de unos 25 cm de longitud, colo…mnívoro y nocturno, y abunda en casi toda Europa.' },
    { letter: 'f', answer: 'fabada', status: 0, question: 'CON LA F. Plato que consiste en un guiso de alubia…; es típico de España, en particular de Asturias.' },
];

function userPuntos(i, punto, status) {
    userPunto += punto;
    newArrayQuestions[i].status = status;
}

describe("Given userPunto function", () => {
    describe("When a resived index = 5, punto = 1, status = 1", () => {
        test("Then it returns userPunto = 11", () => {
            const index = 4;
            const punto = 1;
            const status = 1;

            const expected = 11;

            userPuntos(index, punto, status);
            const result = userPunto;
            expect(result).toBe(expected);
        });
    });
    describe("When a resived index = 4, punto = 1, status = 1", () => {
        test("Then it returns { letter: 'e', answer: 'erizo', status: 1, question: 'CON LA E. Mamífero de unos 25 cm de longitud, colo…mnívoro y nocturno, y abunda en casi toda Europa.' }", () => {
            const index = 4;
            const punto = 1;
            const status = 1;

            const expected = { letter: 'e', answer: 'erizo', status: 1, question: 'CON LA E. Mamífero de unos 25 cm de longitud, colo…mnívoro y nocturno, y abunda en casi toda Europa.' };
            userPuntos(index, punto, status);

            const result = newArrayQuestions[index];
            expect(result).toStrictEqual(expected);
        });
    });
    describe("When a resived index = 2, punto = 1, status = 0", () => {
        test("Then it returns { letter: 'c', answer: 'cameo', status: 0, question: 'CON LA C. Aparición breve de una persona famosa en una película o una serie de televisión.' }", () => {
            const index = 2;
            const punto = 1;
            const status = 0;

            const expected = { letter: 'c', answer: 'cameo', status: 0, question: 'CON LA C. Aparición breve de una persona famosa en una película o una serie de televisión.' };
            userPuntos(index, punto, status);

            const result = newArrayQuestions[index];
            expect(result).toStrictEqual(expected);
        });
    });
});