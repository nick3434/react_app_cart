// 提供一系列的假產品資料(id、名稱、敘述、價格、圖片)
export default [
    {
        id: 1,
        name: 'Macbook Pro 16',
        description: 'Apple Macbook Pro 16 2019',
        price: 300,
        image: 'https://picsum.photos/id/76/1200/800',
        isAvailable: false,
        discount: {
            // 打折的折數,是否打折
            rate: 0.8,
            isDiscount: true
        }
    },
    {
        id: 2,
        name: 'iPhone 11 Pro',
        description: 'Apple iPhone 11 Pro 2019',
        price: 250,
        image: 'https://picsum.photos/id/77/1200/800',
        isAvailable: true,
        discount: {
            // 打折的折數,是否打折
            rate: 0.8,
            isDiscount: false
        }
    },
    {
        id: 3,
        name: 'iPad Pro 12.9',
        description: 'Apple iPad Pro 12.9 2019',
        price: 200,
        image: 'https://picsum.photos/id/78/1200/800',
        isAvailable: true,
        discount: {
            // 打折的折數,是否打折
            rate: 0.7,
            isDiscount: true
        }
    },
    {
        id: 4,
        name: 'Apple Watch Series 5',
        description: 'Apple Watch Series 5 2019',
        price: 150,
        image: 'https://picsum.photos/id/79/1200/800',
        isAvailable: true,
        discount: {
            // 打折的折數,是否打折
            rate: 0.7,
            isDiscount: false
        }
    },
    {
        id: 5,
        name: 'AirPods Pro',
        description: 'Apple AirPods Pro 2019',
        price: 100,
        image: 'https://picsum.photos/id/80/1200/800',
        isAvailable: true,
        discount: {
            // 打折的折數,是否打折
            rate: 0.6,
            isDiscount: true
        }
    }
]