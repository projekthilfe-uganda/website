$(window).on('load', function() {

    // **************
    // Gallery
    // **************

    let modalPic = $('#gallery-modal-img')
    let modalTitle = $('#gallery-modal-title')
    $(".gallery_link").click(function (e) {
        let img = $(e.currentTarget).children(".gallery_img")
        modalPic.attr('src', img.attr('src'))
        modalPic.attr('alt', img.attr('alt'))
        modalTitle.text(img.attr('title'))
    })
});

function loadShopItems() {
    const items = localStorage.getItem("shop.items");
    if (!items || items === "undefined") return {};

    return JSON.parse(items);
}
function loadCartItems() {
    const items = localStorage.getItem("cart.items");
    if (!items || items === "undefined") return {};

    return JSON.parse(items);
}

function paypalItems(cartItems, shopItems) {
    let items = [];
    for (let key in cartItems) {
        if (!cartItems.hasOwnProperty(key)) continue;

        const cartItem = cartItems[key];
        const item = shopItems[cartItem.type];

        if (typeof item === "undefined") continue;

        items.push({
            name: cartItem.caption,
            quantity: cartItem.amount,
            unit_amount: {
                currency_code: "EUR",
                value: item.price,
            },
        })
    }
    return items;
}

function cartSum(cartItems, shopItems) {
    let sum = 0;
    for (let key in cartItems) {
        if (!cartItems.hasOwnProperty(key)) continue;

        const cartItem = cartItems[key];
        const item = shopItems[cartItem.type];

        if (typeof item === "undefined") continue;

        sum += cartItem.amount * item.price;
    }
    return sum;
}

Vue.component('cart-item', {
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
    data: function () {
        return {
            item: null,
            n: this.amount,
        }
    },
    methods: {
        setItem: function (item) {
            if (this.item) return;
            this.item = item;
        },
        onKeyPress: function (e) {
            if (e.keyCode < 48 || 57 < e.keyCode) {
                e.preventDefault();
                return
            }
            if (2 < e.currentTarget.value.length &&
                e.currentTarget.selectionStart === e.currentTarget.selectionEnd) {
                e.preventDefault()
            }
        },
        onKeyUp: function (e) {
            this.$emit("amountchange", this.type, e.currentTarget.value * 1)
        },
        onChange: function (e) {
            if (e.currentTarget.value * 1 === 0)
                this.$emit('delete', this.type)
        }
    },
    computed: {
        total: function () {
            if (!this.item) return 0;
            return this.amount * this.item.price
        }
    }
});

Vue.component('btn', {
    template: '#btn',
    delimiters: ['[[', ']]'],
    props: {
        primary: {
            type: Boolean,
            default: false
        },
        cls: {
            type: String,
        }
    },
});

// Vue.component('payment', {
//     template: '#payment',
//     delimiters: ['[[', ']]'],
//     props: {
//         sum: {
//             type: Number,
//             required: true,
//         }
//     },
// });


let shop = new Vue({
    el: '#shop',
    delimiters: ['[[', ']]'],
    data: {
        cartItems: {},
        shopItems: {},
        showPay: false,
    },
    created: function () {
        this.cartItems = this.load();
        jQuery.getJSON("/spenden/index.json", this.fillShopItems)
    },
    updated: function () {
        this.fillChildItems()
    },
    methods: {
        add: function (shopitem, caption) {
            // check if item exists and increment if it does
            if (this.cartItems[shopitem]) {
                // this.$set(this.cartItems[shopitem], 'amount', this.cartItems[shopitem].amount + 1);
                this.cartItems[shopitem].amount++;
                return;
            }

            // add new item if item did not exist
            this.$set(this.cartItems, shopitem, {
                type: shopitem,
                caption: caption,
                amount: 1,
            });
        },
        clear: function () {
            this.cartItems = {};
            this.showPay = false;
            this.save()
        },
        pay: function () {
            this.showPay = true;
        },

        fillShopItems: function (data) {
            let items = {};
            for (let i = 0; i < data.data.items.length; i++) {
                const item = data.data.items[i];
                if (!item.Params) continue;

                if (item.Params.type === "shopitem") items[item.Params.identifier] = item.Params;
            }
            this.shopItems = items;
            this.save()
        },
        fillChildItems: function () {
            // spread items to the children
            for (let i = 0; i < this.$children.length; i++) {
                const child = this.$children[i];
                if (child.$options._componentTag === "cart-item")
                    child.setItem(this.shopItems[child.type])
            }
        },

        onAmountChange: function (type, amount) {
            this.cartItems[type].amount = amount;
        },
        onDelete: function (type) {
            this.$delete(this.cartItems, type);
            this.save()
        },

        save: function () {
            localStorage.setItem("cart.items", JSON.stringify(Object.assign({}, this.cartItems)));
            localStorage.setItem("shop.items", JSON.stringify(Object.assign({}, this.shopItems)));
        },
        load: loadCartItems,
    },
    computed: {
        cartSum: function () {
            const cartItems = this.cartItems;
            const shopItems = this.shopItems;

            let sum = cartSum(cartItems, shopItems);
            this.save();
            return sum
        }
    }
});
