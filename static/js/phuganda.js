const cart = {
    items: [],

    Init: function () {
        cart.load();

        const checkHTML = function () {
            if (!document.getElementById("cart_content")) {
                setTimeout(checkHTML, 100);
                return
            }
            cart.render();
        };
        checkHTML();
    },

    Add: function (shopitem, caption) {
        const amount = 1;
        const price = 12;
        cart.add(shopitem, caption, amount, price);
        cart.render();
        cart.save();
    },
    Clear: function () {
        cart.items = [];
        cart.render();
        cart.save();
    },

    add: function (shopitem, caption, amount, price) {
        // check if item exists and increment if it does
        for (let i = 0; i < cart.items.length; i++) {
            const item = cart.items[i];
            if (item.type === shopitem) {
                item.amount += amount;
                item.total = item.amount * item.price;
                return;
            }
        }

        // add new item if item did not exist
        cart.items.push({
            type: shopitem,
            caption: caption,
            price: price,
            amount: amount,
            total: amount * price,
        });
    },
    render: function () {
        let rows = [];
        for (let i = 0; i < cart.items.length; i++) {
            const item = cart.items[i];
            const row = '<tr><td class="text-right pr-2">' + item.amount +
                'x</td><td>' + item.caption + '</td><td class="text-right">' + item.total + '€</td></tr>';
            rows.push(row)
        }
        document.getElementById("cart_content").innerHTML = rows.join("\n");
    },
    save: function () {
        localStorage.setItem("cart.items", JSON.stringify(cart.items));
    },
    load: function () {
        const items = localStorage.getItem("cart.items");
        if (items) cart.items = JSON.parse(items);
    },
};

cart.Init();
