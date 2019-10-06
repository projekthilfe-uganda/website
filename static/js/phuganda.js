const cart = {
    items: [],

    Init: function () {
        cart.load();
    },

    Add: function (shopitem) {
        console.log(shopitem);
        const amount = 1;
        const price = 12;
        this.add(shopitem, amount, price);
        this.save();

        console.log(cart.items)
    },

    add: function (shopitem, amount, price) {
        // check if item exists and increment if it does
        for (let i = 0; i < cart.items.length; i++) {
            const item = cart.items[i];
            console.log(item);
            if (item.type === shopitem) {
                item.amount += amount;
                item.total = item.amount * item.price;
                return;
            }
        }

        // add new item if item did not exist
        cart.items.push({
            type: shopitem,
            price: price,
            amount: amount,
            total: amount * price,
        });
    },
    save: function () {
        localStorage.setItem("cart.items", JSON.stringify(cart.items));
    },
    load: function () {
        const items = localStorage.getItem("cart.items");
        console.log(items);
        if (items) cart.items = JSON.parse(items);
        console.log(cart.items);
    }
};

cart.Init();
