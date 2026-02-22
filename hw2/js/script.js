const prices = [499.99, 1400.00, 4000.00]; // Graflex, Hasselblad, Leica
let promoDiscount = 10; // percent off
//shipping codes: FREESHIP HALFOFF SAVE10

//EVENT lISTENERS
document.querySelector("#applyPromoBtn").addEventListener("click", applyPromo); // promo button
//event listener for the selects
for (let i = 1; i <= 3; i++) {
    document.getElementById(`amount${i}`).addEventListener("change", updateTotals);
}
const shippingSelect = document.querySelector("#shipping");
const shippingImg = document.querySelector("#shippingImg");
shippingSelect.addEventListener("change", updateShippingImage);
shippingSelect.addEventListener("change", updateTotals);
document.querySelector("#checkoutBtn").addEventListener("click", function() {
    alert("Thank you for your purchase, you will get an email soon!");
});

//for loop to create 0 through 20 option amounts for each camera select tag
for (let i = 1; i <= 3; i++) {
    const select = document.getElementById(`amount${i}`);
    for (let j = 0; j <= 20; j++) {
        const option = document.createElement("option");
        option.value = j;
        option.textContent = j;
        select.appendChild(option);
    }
}

// set correct image on initial load
updateShippingImage();

//change price for each camera amount
function calculateSubtotal() {
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        const qty = parseInt(document.getElementById(`amount${i}`).value);
        const itemSubtotal = qty * prices[i - 1];
        document.getElementById(`subtotal${i}`).textContent = itemSubtotal.toFixed(2);
        total += itemSubtotal;
    }
    return total;
}

function getShippingCost() {
    const method = document.getElementById("shipping").value;
    if (method === "express") return 25;
    if (method === "economy") return 5;
    return 10; // standard
}

function applyPromo() {
    const code = document.querySelector("#promo").value.trim().toUpperCase();
    const msg = document.querySelector("#promoMsg");

    // reset
    promoDiscount = 0;
    msg.style.color = "red";

    if (code === "") {
        msg.textContent = "Please enter a promo code.";
        return;
    }

    if (code === "SAVE10") {
        promoDiscount = 10; // $10 off
        msg.textContent = "Promo applied: $10 off!";
        msg.style.color = "green";
    } else if (code === "FREESHIP") {
        promoDiscount = -1; // special flag (handle in totals)
        msg.textContent = "Promo applied: Free shipping!";
        msg.style.color = "green";
    } else if (code === "HALFOFF") {
        promoDiscount = 0.5; // special flag for 50% off subtotal (handle in totals)
        msg.textContent = "Promo applied: 50% off subtotal!";
        msg.style.color = "green";
    } else {
        msg.textContent = "Invalid promo code.";
    }

    updateTotals();
}

function updateTotals() {
    let subtotal = calculateSubtotal();
    let shipping = getShippingCost();

    // Apply promo
    const code = document.querySelector("#promo").value.trim().toUpperCase();

    if (code === "FREESHIP") {
        shipping = 0;
    } else if (code === "HALFOFF") {
        subtotal *= 0.5;
    } else if (code === "SAVE10") {
        subtotal = Math.max(0, subtotal - 10);
    }

    const taxRate = 0.10;
    const tax = subtotal * taxRate;
    const total = subtotal + tax + shipping;

    document.querySelector("#shippingCost").textContent = shipping.toFixed(2);
    document.querySelector("#finalTax").textContent = tax.toFixed(2);
    document.querySelector("#finalTotal").textContent = total.toFixed(2);

    // Style change example (rubric)
    document.querySelector("#finalTotal").style.fontWeight = "bold";
}

function updateShippingImage() {
    const method = shippingSelect.value;

    if (method === "standard") {
        shippingImg.src = "img/truck.png";
        shippingImg.alt = "Truck shipping";
    } else if (method === "express") {
        shippingImg.src = "img/plane.png";
        shippingImg.alt = "Plane shipping";
    } else { // economy
        shippingImg.src = "img/snail.png";
        shippingImg.alt = "Snail shipping";
    }
}