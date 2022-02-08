const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        // solution
        updateCart(type, id) {
            if(type=='A') {
                this.cart.push(id)
            } else if(type=='D') {
                const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
            }
        }
    }
})
