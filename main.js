let payment = document.getElementById("btn");
let itemName = document.getElementById("itemName");
let itemAmount = document.getElementById("itemAmount");
let qtyDisplay = document.getElementById("qtyDisplay");
let disDisplay = document.getElementById("disDisplay");
let totalDisplay = document.getElementById("totalDisplay");
let display = document.getElementById("display");
let thnk = document.getElementById("thnk");

payment.addEventListener("click", cal);

function cal(discount) {
    discount.preventDefault();
    let productName = document.getElementById("pdt").value;
    let quantity = document.getElementById("qty").value;
    let amount = document.getElementById("amt").value;

    let totalCost = amount * quantity;
    let _10percent = 0.1;
    let _10percentDiscount = totalCost * _10percent;
    let _20percent = 0.2;
    let _20percentDiscount = totalCost * _20percent;
    let _30percent = 0.3;
    let _30percentDiscount = totalCost * _30percent;
    let _40percent = 0.4;
    let _40percentDiscount = totalCost * _40percent;

    if (quantity == 0 || quantity <= -1) {
        display.innerHTML = `Kindly purchase at least one item to enjoy our DISCOUNT`;
        // console.log(`Kindly purchase at least one item to enjoy our DISCOUNT`);
    } else if (quantity >= 1 && quantity <= 3) {
        totalCost -= _10percentDiscount; 
        itemName.innerHTML = `Item Name: ${productName}`;
        itemAmount.innerHTML = `Item Amount: ${amount} Naira per item`;
        qtyDisplay.innerHTML = `Quantity: ${quantity} item purchased`;
        disDisplay.innerHTML = `Discount: ${_10percentDiscount} Naira @ 10% DISCOUNT`;
        totalDisplay.innerHTML = `Total Cost: ${totalCost} Naira`;
        // console.log(`Item Name: ${productName}`);
        // console.log(`Item Amount: ${amount} Naira per item`);
        // console.log(`Quantity: ${quantity}`);
        // console.log(`Discount: ${_10percentDiscount} Naira @ 10% DISCOUNT`);
        // console.log(`Total Cost: ${totalCost} Naira`);
    } else if (quantity >= 4 && quantity <= 6) {
        totalCost -= _20percentDiscount;
        itemName.innerHTML = `Item Name: ${productName}`;
        itemAmount.innerHTML = `Item Amount: ${amount} Naira per item`;
        qtyDisplay.innerHTML = `Quantity: ${quantity}`;
        disDisplay.innerHTML = `Discount: ${_20percentDiscount} Naira @ 20% DISCOUNT`;
        totalDisplay.innerHTML = `Total Cost: ${totalCost} Naira`;
        // console.log(`Item Name: ${productName}`);
        // console.log(`Item Amount: ${amount} Naira per item`);
        // console.log(`Quantity: ${quantity}`);
        // console.log(`Discount: ${_20percentDiscount} Naira @ 20% DISCOUNT`);
        // console.log(`Total Cost: ${totalCost} Naira`);
    } else if (quantity >= 7 && quantity <= 8) {
        totalCost -= _30percentDiscount;
        itemName.innerHTML = `Item Name: ${productName}`;
        itemAmount.innerHTML = `Item Amount: ${amount} Naira per item`;
        qtyDisplay.innerHTML = `Quantity: ${quantity}`;
        disDisplay.innerHTML = `Discount: ${_30percentDiscount} Naira @ 30% DISCOUNT`;
        totalDisplay.innerHTML = `Total Cost: ${totalCost} Naira`;
        // console.log(`Item Name: ${productName}`);
        // console.log(`Item Amount: ${amount} Naira per item`);
        // console.log(`Quantity: ${quantity}`);
        // console.log(`Discount: ${_30percentDiscount} Naira @ 30% DISCOUNT`);
        // console.log(`Total Cost: ${totalCost} Naira`);
    } else if (quantity >= 9 && quantity <= 10) {
        totalCost -= _40percentDiscount;
        itemName.innerHTML = `Item Name: ${productName}`;
        itemAmount.innerHTML = `Item Amount: ${amount} Naira per item`;
        qtyDisplay.innerHTML = `Quantity: ${quantity}`;
        disDisplay.innerHTML = `Discount: ${_40percentDiscount} Naira @ 40% DISCOUNT`;
        totalDisplay.innerHTML = `Total Cost: ${totalCost} Naira`;
        // console.log(`Item Name: ${productName}`);
        // console.log(`Item Amount: ${amount} Naira per item`);
        // console.log(`Quantity: ${quantity}`);
        // console.log(`Discount: ${_40percentDiscount} Naira @ 40% DISCOUNT`);
        // console.log(`Total Cost: ${totalCost} Naira`);
    } else {
        display.innerHTML = `No sales for more than 10 items.`;
        //     console.log(` No sales for more than 10 items.`);
    }
    thnk.innerHTML = `Thanks for your patranage.`;
    // console.log(`Thanks for your patranage `);
}