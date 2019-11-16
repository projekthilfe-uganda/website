
var cartItem = Vue.component('cart-item', {
    template: '#cart-item',
    delimiters: ['[[', ']]'],
    props: {
        type: {
            type: String,
            required: true,
        },
        caption: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            default: 1,
        },
    },
    data: function() {
        return {
            item: null,
        }
    },
    methods: {
        setItem: function (item) {
            if (this.item) return;
            this.item = item;
        }
    },
    computed: {
        total: function () {
            if (!this.item) return 0;
            return  this.amount * this.item.price
        }
    }
});

let shop = new Vue({
    el: '#shop',
    delimiters: ['[[', ']]'],
    data: {
        cartItems: [],
        shopItems: {},
    },
    created: function () {
        this.cartItems = this.load();
        jQuery.getJSON("/shop/index.json", this.fillShopItems)
    },
    updated: function() {
        this.fillChildItems()
    },
    methods: {
        add: function (shopitem, caption) {
            // check if item exists and increment if it does
            for (let i = 0; i < this.cartItems.length; i++) {
                const cartItem = this.cartItems[i];
                if (cartItem.type === shopitem) {
                    cartItem.amount++;
                    return;
                }
            }

            // add new item if item did not exist
            this.cartItems.push({
                type: shopitem,
                caption: caption,
                amount: 1,
            });
        },
        clear: function () {
            this.cartItems = [];
        },

        fillShopItems: function (data) {
            let items = {};
            for (let i = 0; i < data.data.items.length; i++) {
                const item = data.data.items[i];
                if (item.type === "shopitem") items[item.id] = item;
            }
            this.shopItems = items;
        },
        fillChildItems: function() {
            // spread items to the children
            for (let i = 0; i < this.$children.length; i++) {
                const child = this.$children[i];
                child.setItem(this.shopItems[child.type])
            }
        },

        save: function (items) {
            localStorage.setItem("cart.items", JSON.stringify(items));
        },
        load: function () {
            const items = localStorage.getItem("cart.items");
            if (!items || items === "undefined") return [];

            return JSON.parse(items);
        },
    },
    computed: {
        cartSum: function () {
            let sum = 0;
            for (let i = 0; i < this.cartItems.length; i++) {
                const cartItem = this.cartItems[i];
                const item = this.shopItems[cartItem.type];

                if (typeof item === "undefined") continue;

                sum += cartItem.amount * item.price;
            }
            this.save(this.cartItems);
            return sum
        }
    }
});
