const app = Vue.createApp({
    data() {
        return {
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
                    color: 'green'
                },
                {
                    id:2,
                    color: 'blue'
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
    }
})