function evenOdd(...numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    let even = [];
    let odd = [];

    numbers.forEach(num => {
        if (num % 2 === 0) {
            sumEven += num;
            even.push(num);
        } else {
            sumOdd += num;
            odd.push(num);
        }
    });

    const evenStr = `{ Even: ${even.join(', ')}. SumEvent = ${sumEven} }`;
    const oddStr = `{ Odd: ${odd.join(', ')}. SumOdd = ${sumOdd} }`;

    console.log(evenStr);
    console.log(oddStr);
}

evenOdd(1, 2, 3, 4, 5);