var priceTable = 15.678;
var priceChair = 123.965;
var pricePen = 90.2345;

var sumTovar = (priceTable + priceChair + pricePen);

{
    let maxTovar = (Math.max(priceTable, priceChair, pricePen));
    const maxPrice = `Максимальна ціна: ${maxTovar}`;
    console.log(maxPrice);
}

{
    let minTovar = (Math.min(priceTable, priceChair, pricePen));
    const minPrice = `Мінімальна ціна: ${minTovar}`;
    console.log(minPrice);
}

{
    let sumTovar = (priceTable + priceChair + pricePen);
    const sumTovars = `Вартість всіх товарів: ${sumTovar}`;
    console.log(sumTovars);
}

console.log(`Округлення:`, Math.floor(priceTable), Math.floor(priceChair), Math.floor(pricePen));


{
    let sumTovarFloor = Math.floor(priceTable) + Math.floor(priceChair) + Math.floor(pricePen);
    console.log(`Загальна сума товарів:`, Math.floor(sumTovarFloor));

    let sumTovarCeil = ((Math.ceil(sumTovarFloor / 100)) * 100);
    console.log(`Округлення всієї суми(до 300):`, sumTovarCeil);
}

{
    let remainder = (500 - sumTovar);
    console.log(`Решта з 500:`, remainder);
}

{
    let priceValue = sumTovar / 3;
    console.log(`Cереднє значення цін, округлене до другого знаку після коми:`, priceValue.toFixed(2));
}

{
    let random = (Math.random());
    console.log(`Випадкова знижка(від 0-1)`, random);
}

{
    let clientDiscount = ((priceChair * Math.random()).toFixed(2));
    console.log(`Вартість крісла з випадкв. знижкою:`, clientDiscount);

    let profitChair = (((priceChair - clientDiscount) / 2).toFixed(2));
    console.log(`Чистий прибуток зі знижкою:`, profitChair);
}


