const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: "/assets/images/socks_green.jpg",
            inventory: 3,
            details: [
                "50% cotton",
                "30% wool",
                "20% polyester"
            ],
            variants: [
                {
                    id:1,
                    color: 'green',
                    image:"/assets/images/socks_green.jpg"
                },
                {
                    id:2,
                    color: 'blue',
                    image:"/assets/images/socks_blue.jpg"
                }

            ],
            sizes: [
                {
                    id:1,
                    name: 'small'
                },
                {
                    id:2,
                    name: 'medium'
                },
                {
                    id:3,
                    name: 'large'
                }

            ]

        }
    },
    methods: {
        addToCart() {
            if(this.cart < this.inventory){
                this.cart++;
            }
            console.log(this.cart)
            console.log(this.inventory)
            
        },
        decrementCart(){
            if(this.cart >= 0){
                this.cart--;
            }
        },
        updateImage(variantImage){
            this.image = variantImage;
        }
    }
})