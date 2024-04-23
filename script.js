document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { slNo: 1, name: 'Smartwatches', dropShopQuantity: 245, myQuantity: 245 },
        { slNo: 2, name: 'Best Sellers', dropShopQuantity: 203, myQuantity: 203 },
        { slNo: 3, name: 'Bluetooth Speaker', dropShopQuantity: 191, myQuantity: 191 },
        { slNo: 4, name: 'TWS', dropShopQuantity: 190, myQuantity: 190 },
        { slNo: 5, name: 'Mouse', dropShopQuantity: 152, myQuantity: 152 },
        { slNo: 6, name: 'Cable', dropShopQuantity: 150, myQuantity: 150 },
        { slNo: 7, name: 'Kitchen Accessories', dropShopQuantity: 146, myQuantity: 146 },
        { slNo: 8, name: 'WiFi Router', dropShopQuantity: 129, myQuantity: 129 },
        { slNo: 9, name: 'Power Bank', dropShopQuantity: 118, myQuantity: 118 },
        { slNo: 10, name: 'Headphone', dropShopQuantity: 108, myQuantity: 108 },
        { slNo: 11, name: 'Watch Strap', dropShopQuantity: 85, myQuantity: 85 },
        { slNo: 12, name: 'Ready to Boost', dropShopQuantity: 83, myQuantity: 83 },
        { slNo: 13, name: 'Keyboard', dropShopQuantity: 81, myQuantity: 81 },
        { slNo: 14, name: 'Rechargeable Fan', dropShopQuantity: 71, myQuantity: 71 },
        { slNo: 15, name: 'Neckband', dropShopQuantity: 67, myQuantity: 67 },
        { slNo: 16, name: 'Microphone', dropShopQuantity: 63, myQuantity: 63 },
        { slNo: 17, name: 'Toys', dropShopQuantity: 57, myQuantity: 57 },
        { slNo: 18, name: 'Mobile Charger', dropShopQuantity: 48, myQuantity: 48 },
        { slNo: 19, name: 'Bluetooth Headphone', dropShopQuantity: 43, myQuantity: 43 },
        { slNo: 20, name: 'Tripod', dropShopQuantity: 40, myQuantity: 40 },
        { slNo: 21, name: 'Web Camera', dropShopQuantity: 40, myQuantity: 40 },
        { slNo: 22, name: 'Wireless Mouse', dropShopQuantity: 38, myQuantity: 38 },
        { slNo: 23, name: 'Security Camera', dropShopQuantity: 37, myQuantity: 37 },
        { slNo: 24, name: 'Gaming Headphone', dropShopQuantity: 37, myQuantity: 37 },
        { slNo: 25, name: 'IP Camera', dropShopQuantity: 37, myQuantity: 37 },
        { slNo: 26, name: 'Pen Drive', dropShopQuantity: 34, myQuantity: 34 },
        { slNo: 27, name: 'Speaker', dropShopQuantity: 29, myQuantity: 29 },
        { slNo: 28, name: 'All Time Hot Selling', dropShopQuantity: 28, myQuantity: 28 },
        { slNo: 29, name: 'Electric Kettle', dropShopQuantity: 28, myQuantity: 28 },
        { slNo: 30, name: 'Power Strip', dropShopQuantity: 27, myQuantity: 27 },
        { slNo: 31, name: 'Torch Light', dropShopQuantity: 27, myQuantity: 27 },
        { slNo: 32, name: 'Electric Trimmer', dropShopQuantity: 27, myQuantity: 27 },
        { slNo: 33, name: 'Converters', dropShopQuantity: 25, myQuantity: 25 },
        { slNo: 34, name: 'USB HUB', dropShopQuantity: 25, myQuantity: 25 },
        { slNo: 35, name: 'Mouse Pad', dropShopQuantity: 25, myQuantity: 25 },
        { slNo: 36, name: 'Blender', dropShopQuantity: 25, myQuantity: 25 },
        { slNo: 37, name: 'Attendance Machine', dropShopQuantity: 20, myQuantity: 20 },
        { slNo: 38, name: 'Room Heater', dropShopQuantity: 20, myQuantity: 20 },
        { slNo: 39, name: 'Smart TV Box', dropShopQuantity: 19, myQuantity: 19 },
        { slNo: 40, name: 'Wireless Charger', dropShopQuantity: 19, myQuantity: 19 },
        { slNo: 41, name: 'Power Charger', dropShopQuantity: 19, myQuantity: 19 },
        { slNo: 42, name: 'Selfie Stick', dropShopQuantity: 17, myQuantity: 17 },
        { slNo: 43, name: 'Battery', dropShopQuantity: 17, myQuantity: 17 },
        { slNo: 44, name: 'Access Control', dropShopQuantity: 15, myQuantity: 15 },
        { slNo: 45, name: 'Air Humidifier', dropShopQuantity: 16, myQuantity: 16 },
        { slNo: 46, name: 'Mobile Holder', dropShopQuantity: 15, myQuantity: 15 },
        { slNo: 47, name: 'Clock', dropShopQuantity: 14, myQuantity: 14 },
        { slNo: 48, name: 'Vlogging Tripod', dropShopQuantity: 13, myQuantity: 13 },
        { slNo: 49, name: 'Laptop Stand', dropShopQuantity: 13, myQuantity: 13 },
        { slNo: 50, name: 'Travel Adapter', dropShopQuantity: 12, myQuantity: 12 },
        { slNo: 51, name: 'Hair Dryer', dropShopQuantity: 12, myQuantity: 12 },
        { slNo: 52, name: 'Action Camera', dropShopQuantity: 12, myQuantity: 12 },
        { slNo: 53, name: 'Profitable Products', dropShopQuantity: 12, myQuantity: 12 },
        { slNo: 54, name: 'RGB Light', dropShopQuantity: 12, myQuantity: 12 },
        { slNo: 55, name: 'Toothbrush', dropShopQuantity: 12, myQuantity: 12 },
        { slNo: 56, name: 'Calculator', dropShopQuantity: 11, myQuantity: 11 },
        { slNo: 57, name: 'Dry Iron', dropShopQuantity: 10, myQuantity: 10 },
        { slNo: 58, name: 'Audio Cable', dropShopQuantity: 10, myQuantity: 10 },
        { slNo: 59, name: 'Emergency Light', dropShopQuantity: 10, myQuantity: 10 }
    ];


    const tableBody = document.querySelector('#productTable tbody');

    // Populate table rows
    products.forEach(product => {
        const row = tableBody.insertRow();
        const slNoCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const dropShopQuantityCell = row.insertCell(2);
        const myQuantityCell = row.insertCell(3);
        const uploadCell = row.insertCell(4);

        slNoCell.textContent = product.slNo;
        nameCell.textContent = product.name;
        myQuantityCell.textContent = product.myQuantity === '' ? '[Enter quantity]' : product.myQuantity;
        dropShopQuantityCell.textContent = product.dropShopQuantity !== '' ? product.dropShopQuantity : '[Static quantity]';
        uploadCell.innerHTML = `<input type="number" value="${product.myQuantity}">
                                <button onclick="saveQuantity(this)">Save</button>`;

        // Check if there's stored data for this product
        const storedQuantity = localStorage.getItem(product.name);
        if (storedQuantity !== null) {
            product.myQuantity = parseInt(storedQuantity);
            myQuantityCell.textContent = product.myQuantity;
            uploadCell.innerHTML = `<input type="number" value="${product.myQuantity}">
                                    <button onclick="saveQuantity(this)">Save</button>`;
        }
    });

    // Function to save the edited quantity
    window.saveQuantity = function(button) {
        const row = button.parentNode.parentNode;
        const input = row.querySelector('input');
        const myQuantityCell = row.cells[2];
        const productName = row.cells[1].textContent;

        // Update table cell
        myQuantityCell.textContent = input.value;

        // Update localStorage
        localStorage.setItem(productName, input.value);
    };
});
