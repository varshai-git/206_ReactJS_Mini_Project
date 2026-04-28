const allProducts = [
        {
            "id": 1,
            "name": "Air Conditioner AC-1",
            "price": 15999,
            "quantity": 1,
            "stocks": 8,
            "image": "ac1.jfif",
            "description": "High-performance air conditioner with energy-efficient cooling technology. Features smart temperature control and quiet operation, perfect for keeping your space comfortable year-round."
        },
        {
            "id": 2,
            "name": "Air Conditioner AC-2",
            "price": 18499,
            "quantity": 1,
            "stocks": 6,
            "image": "ac2.jfif",
            "description": "Premium air conditioning unit with advanced cooling features. Includes automatic temperature regulation and eco-friendly refrigerant, ideal for maximum comfort and efficiency."
        },
        {
            "id": 3,
            "name": "Air Conditioner AC-3",
            "price": 21999,
            "quantity": 1,
            "stocks": 5,
            "image": "ac3.jfif",
            "description": "State-of-the-art air conditioner with smart controls and superior cooling power. Perfect for large spaces with whisper-quiet operation and energy-saving features."
        },
        {
            "id": 4,
            "name": "Air Conditioner AC-4",
            "price": 24999,
            "quantity": 1,
            "stocks": 4,
            "image": "ac4.jfif",
            "description": "Ultra-efficient air conditioner with modern design and advanced filtration system. Maintains optimal temperature and air quality for a healthier living environment."
        },
        {
            "id": 5,
            "name": "Air Conditioner AC-5",
            "price": 27999,
            "quantity": 1,
            "stocks": 3,
            "image": "ac5.jfif",
            "description": "Premium cooling solution with intelligent temperature management and energy optimization. Ideal for demanding cooling requirements with superior performance."
        },
        {
            "id": 6,
            "name": "Air Cooler Standard",
            "price": 3499,
            "quantity": 1,
            "stocks": 15,
            "image": "air-cooler1.jfif",
            "description": "Affordable and portable air cooler with effective cooling capability. Great for personal use with low power consumption and easy portability."
        },
        {
            "id": 7,
            "name": "Air Cooler Premium",
            "price": 5299,
            "quantity": 1,
            "stocks": 12,
            "image": "air-cooler2.jfif",
            "description": "Enhanced air cooler with larger cooling capacity and improved efficiency. Features adjustable settings for personalized comfort in any room."
        },
        {
            "id": 8,
            "name": "Air Cooler Professional",
            "price": 7499,
            "quantity": 1,
            "stocks": 10,
            "image": "air-cooler3.jfif",
            "description": "Professional-grade air cooler with superior cooling performance. Ideal for larger spaces with advanced moisture control and whisper-quiet operation."
        },
        {
            "id": 9,
            "name": "Air Cooler Deluxe",
            "price": 8999,
            "quantity": 1,
            "stocks": 7,
            "image": "air-cooler5.jfif",
            "description": "Top-tier air cooler with maximum cooling efficiency and modern features. Perfect for demanding environments with enhanced durability and performance."
        },
        {
            "id": 10,
            "name": "Branded Bag Classic",
            "price": 1899,
            "quantity": 1,
            "stocks": 20,
            "image": "branded-bag.jfif",
            "description": "This is a stylish branded bag made from high-quality materials. It features a spacious interior, multiple compartments, and a durable design, making it perfect for everyday use or travel."
        },
        {
            "id": 11,
            "name": "Branded Bag Deluxe",
            "price": 2499,
            "quantity": 1,
            "stocks": 18,
            "image": "branded-bag1.jfif",
            "description": "Premium branded bag with elegant design and superior craftsmanship. Features reinforced stitching and comfortable straps for all-day use."
        },
        {
            "id": 12,
            "name": "Branded Bag Pro",
            "price": 3199,
            "quantity": 1,
            "stocks": 16,
            "image": "branded-bag2.jfif",
            "description": "Professional-grade branded bag with multiple pockets and organizational compartments. Perfect for work, travel, and everyday carry."
        },
        {
            "id": 13,
            "name": "Branded Jacket",
            "price": 3999,
            "quantity": 1,
            "stocks": 12,
            "image": "branded-jacket.jfif",
            "description": "This is a stylish branded jacket made from high-quality materials. It features a comfortable fit, durable construction, and a trendy design, making it perfect for both casual and outdoor wear."
        },
        {
            "id": 14,
            "name": "Branded Luggage",
            "price": 5999,
            "quantity": 1,
            "stocks": 10,
            "image": "branded-luggage.jfif",
            "description": "This is a stylish branded luggage made from high-quality materials. It features a spacious interior, durable construction, and a sleek design, making it perfect for travel and everyday use."
        },
        {
            "id": 15,
            "name": "Branded Trolley",
            "price": 6999,
            "quantity": 1,
            "stocks": 8,
            "image": "branded-trolley.jfif",
            "description": "This is a stylish branded trolley made from high-quality materials. It features a spacious interior, durable construction, and a sleek design, making it perfect for travel and everyday use."
        },
        {
            "id": 16,
            "name": "Branded Wallet Classic",
            "price": 999,
            "quantity": 1,
            "stocks": 25,
            "image": "branded-wallet.jfif",
            "description": "This is a stylish branded wallet made from high-quality materials. It features multiple compartments, a durable design, and a sleek look, making it perfect for everyday use."
        },
        {
            "id": 17,
            "name": "Branded Wallet Premium",
            "price": 1599,
            "quantity": 1,
            "stocks": 22,
            "image": "branded-wallet1.jfif",
            "description": "Premium branded wallet with RFID protection and enhanced card storage. Designed for style and security with genuine leather construction."
        },
        {
            "id": 18,
            "name": "Laptop LT-1",
            "price": 29999,
            "quantity": 1,
            "stocks": 6,
            "image": "laptop1.jfif",
            "description": "Entry-level laptop with reliable performance for everyday computing tasks. Features essential specifications for work and entertainment needs."
        },
        {
            "id": 19,
            "name": "Laptop LT-2",
            "price": 34999,
            "quantity": 1,
            "stocks": 5,
            "image": "laptop2.jfif",
            "description": "Mid-range laptop with enhanced processor and improved display. Perfect for students and professionals with balanced performance and portability."
        },
        {
            "id": 20,
            "name": "Laptop LT-3",
            "price": 39999,
            "quantity": 1,
            "stocks": 5,
            "image": "laptop3.jfif",
            "description": "Advanced laptop with powerful specifications and superior graphics. Ideal for creative professionals and demanding applications."
        },
        {
            "id": 21,
            "name": "Laptop LT-4",
            "price": 44999,
            "quantity": 1,
            "stocks": 4,
            "image": "laptop4.jfif",
            "description": "High-performance laptop with latest processor and dedicated graphics card. Great for gaming, video editing, and resource-intensive tasks."
        },
        {
            "id": 22,
            "name": "Laptop LT-5",
            "price": 49999,
            "quantity": 1,
            "stocks": 4,
            "image": "laptop5.jfif",
            "description": "Premium laptop with cutting-edge technology and superior build quality. Perfect for professionals requiring maximum performance and reliability."
        },
        {
            "id": 23,
            "name": "Laptop LT-6",
            "price": 54999,
            "quantity": 1,
            "stocks": 3,
            "image": "laptop6.jfif",
            "description": "Ultrabook with sleek design and powerful internals. Combines portability with performance for mobile professionals."
        },
        {
            "id": 24,
            "name": "Laptop LT-7",
            "price": 59999,
            "quantity": 1,
            "stocks": 3,
            "image": "laptop7.jfif",
            "description": "Professional-grade laptop with exceptional processing power. Designed for content creators and engineers."
        },
        {
            "id": 25,
            "name": "Laptop LT-8",
            "price": 64999,
            "quantity": 1,
            "stocks": 2,
            "image": "laptop8.jfif",
            "description": "Flagship laptop with top-tier specifications and premium materials. Offers unparalleled performance for demanding workloads."
        },
        {
            "id": 26,
            "name": "Laptop LT-9",
            "price": 69999,
            "quantity": 1,
            "stocks": 2,
            "image": "laptop9.jfif",
            "description": "Elite laptop with advanced cooling system and maximum performance. Perfect for intensive computing and gaming."
        },
        {
            "id": 27,
            "name": "Laptop LT-10",
            "price": 74999,
            "quantity": 1,
            "stocks": 2,
            "image": "laptop10.jfif",
            "description": "Ultra-premium laptop with exclusive features and top specifications. The ultimate choice for power users and professionals."
        },
        {
            "id": 28,
            "name": "LED TV 32 Inch",
            "price": 10999,
            "quantity": 1,
            "stocks": 12,
            "image": "led-tv1.jfif",
            "description": "Compact 32-inch LED TV with crystal-clear picture quality. Perfect for bedrooms or small living spaces with essential smart features."
        },
        {
            "id": 29,
            "name": "LED TV 40 Inch",
            "price": 13999,
            "quantity": 1,
            "stocks": 10,
            "image": "led-tv2.jfif",
            "description": "40-inch LED TV with Full HD resolution and enhanced color accuracy. Great for everyday viewing with multiple connectivity options."
        },
        {
            "id": 30,
            "name": "LED TV 43 Inch",
            "price": 16499,
            "quantity": 1,
            "stocks": 9,
            "image": "led-tv3.jfif",
            "description": "43-inch LED TV with 4K ultra HD resolution and smart capabilities. Ideal for modern living rooms with immersive viewing experience."
        },
        {
            "id": 31,
            "name": "LED TV 50 Inch",
            "price": 19999,
            "quantity": 1,
            "stocks": 7,
            "image": "led-tv4.jfif",
            "description": "Large 50-inch LED TV with stunning 4K display and smart features. Perfect for home entertainment with wide viewing angles."
        },
        {
            "id": 32,
            "name": "LED TV 55 Inch",
            "price": 23499,
            "quantity": 1,
            "stocks": 6,
            "image": "led-tv5.jfif",
            "description": "Premium 55-inch 4K LED TV with HDR support and smart platform. Delivers cinematic experience for the entire family."
        },
        {
            "id": 33,
            "name": "LED TV 60 Inch",
            "price": 27999,
            "quantity": 1,
            "stocks": 5,
            "image": "led-tv6.jfif",
            "description": "Immersive 60-inch 4K LED TV with advanced picture processing. Great for large rooms and premium entertainment setup."
        },
        {
            "id": 34,
            "name": "LED TV 65 Inch",
            "price": 31999,
            "quantity": 1,
            "stocks": 4,
            "image": "led-tv7.jfif",
            "description": "Ultra-large 65-inch 4K LED TV with superior color accuracy. Perfect for high-end home theaters and large living rooms."
        },
        {
            "id": 35,
            "name": "LED TV 70 Inch",
            "price": 39999,
            "quantity": 1,
            "stocks": 3,
            "image": "led-tv8.jfif",
            "description": "Massive 70-inch 4K display with cutting-edge technology. Offers theater-like experience in your home."
        },
        {
            "id": 36,
            "name": "LED TV 75 Inch",
            "price": 47999,
            "quantity": 1,
            "stocks": 2,
            "image": "led-tv9.jfif",
            "description": "Premium 75-inch 4K TV with latest smart features and AI upscaling. The ultimate centerpiece for any entertainment space."
        },
        {
            "id": 37,
            "name": "LED TV 85 Inch",
            "price": 59999,
            "quantity": 1,
            "stocks": 1,
            "image": "led-tv10.jfif",
            "description": "Flagship 85-inch ultra-premium 4K TV with advanced display technology. Designed for ultimate home theater experience."
        },
        {
            "id": 38,
            "name": "Sandals Comfort 1",
            "price": 699,
            "quantity": 1,
            "stocks": 30,
            "image": "sandals1.jfif",
            "description": "Comfortable everyday sandals with cushioned footbed. Perfect for casual wear and warm weather comfort."
        },
        {
            "id": 39,
            "name": "Sandals Comfort 2",
            "price": 899,
            "quantity": 1,
            "stocks": 28,
            "image": "sandals2.jfif",
            "description": "Stylish sandals with ergonomic support and breathable design. Ideal for beach days and casual outings."
        },
        {
            "id": 40,
            "name": "Sandals Premium 3",
            "price": 1299,
            "quantity": 1,
            "stocks": 25,
            "image": "sandals3.jfif",
            "description": "Premium quality sandals with superior comfort and durability. Great for extended wear and various terrains."
        },
        {
            "id": 41,
            "name": "Sandals Elite 4",
            "price": 1699,
            "quantity": 1,
            "stocks": 20,
            "image": "sandals4.jfif",
            "description": "High-end sandals with luxury materials and exceptional comfort. Perfect for both casual and semi-formal occasions."
        },
        {
            "id": 42,
            "name": "Sandals Deluxe 5",
            "price": 2199,
            "quantity": 1,
            "stocks": 18,
            "image": "sandals5.jfif",
            "description": "Luxury sandals with premium craftsmanship and exclusive design. Combines style with ultimate comfort and quality."
        },
        {
            "id": 43,
            "name": "Shoes Casual 1",
            "price": 1899,
            "quantity": 1,
            "stocks": 22,
            "image": "shoes1.jfif",
            "description": "Casual everyday shoes with comfortable padding. Perfect for daily wear and casual outings."
        },
        {
            "id": 44,
            "name": "Shoes Casual 2",
            "price": 2299,
            "quantity": 1,
            "stocks": 20,
            "image": "shoes2.jfif",
            "description": "Stylish casual shoes with modern design. Great for work and leisure with all-day comfort."
        },
        {
            "id": 45,
            "name": "Shoes Sport 3",
            "price": 2799,
            "quantity": 1,
            "stocks": 18,
            "image": "shoes3.jfif",
            "description": "Athletic sports shoes with advanced cushioning. Designed for active lifestyle and fitness activities."
        },
        {
            "id": 46,
            "name": "Shoes Sport 4",
            "price": 3299,
            "quantity": 1,
            "stocks": 16,
            "image": "shoes4.jfif",
            "description": "Professional sports shoes with enhanced support. Perfect for gym workouts and running."
        },
        {
            "id": 47,
            "name": "Shoes Formal 5",
            "price": 3899,
            "quantity": 1,
            "stocks": 14,
            "image": "shoes5.jfif",
            "description": "Formal dress shoes with elegant design. Ideal for business meetings and formal events."
        },
        {
            "id": 48,
            "name": "Shoes Formal 6",
            "price": 4499,
            "quantity": 1,
            "stocks": 12,
            "image": "shoes6.jfif",
            "description": "Premium formal shoes with superior craftsmanship. Perfect for professional settings and special occasions."
        },
        {
            "id": 49,
            "name": "Shoes Adventure 7",
            "price": 5099,
            "quantity": 1,
            "stocks": 11,
            "image": "shoes7.jfif",
            "description": "Adventure hiking shoes with rugged construction. Great for outdoor trails and challenging terrain."
        },
        {
            "id": 50,
            "name": "Shoes Adventure 8",
            "price": 5699,
            "quantity": 1,
            "stocks": 9,
            "image": "shoes8.jfif",
            "description": "Premium hiking boots with excellent grip and support. Designed for serious outdoor enthusiasts."
        },
        {
            "id": 51,
            "name": "Shoes Premium 9",
            "price": 6299,
            "quantity": 1,
            "stocks": 8,
            "image": "shoes9.jfif",
            "description": "High-end shoes with luxury materials and exceptional comfort. Perfect for all occasions."
        },
        {
            "id": 52,
            "name": "Shoes Elite 10",
            "price": 6999,
            "quantity": 1,
            "stocks": 7,
            "image": "shoes10.jfif",
            "description": "Elite designer shoes with premium craftsmanship. The ultimate choice for style and comfort."
        },
        {
            "id": 53,
            "name": "Watch Classic 1",
            "price": 4999,
            "quantity": 1,
            "stocks": 14,
            "image": "watch1.jfif",
            "description": "Elegant classic watch with timeless design. Perfect for everyday wear and formal occasions."
        },
        {
            "id": 54,
            "name": "Watch Classic 2",
            "price": 6499,
            "quantity": 1,
            "stocks": 12,
            "image": "watch2.jfif",
            "description": "Sophisticated watch with premium features. Great for professionals who value style and accuracy."
        },
        {
            "id": 55,
            "name": "Watch Sport 3",
            "price": 7999,
            "quantity": 1,
            "stocks": 10,
            "image": "watch3.jfif",
            "description": "Sports watch with advanced features and durability. Ideal for active individuals and athletes."
        },
        {
            "id": 56,
            "name": "Watch Sport 4",
            "price": 9499,
            "quantity": 1,
            "stocks": 9,
            "image": "watch4.jfif",
            "description": "Professional sports watch with multiple functions. Perfect for fitness tracking and outdoor adventures."
        },
        {
            "id": 57,
            "name": "Watch Smart 5",
            "price": 12999,
            "quantity": 1,
            "stocks": 8,
            "image": "watch5.jfif",
            "description": "Advanced smartwatch with health monitoring features. Keeps you connected with notifications and fitness tracking."
        },
        {
            "id": 58,
            "name": "Watch Smart 6",
            "price": 15499,
            "quantity": 1,
            "stocks": 6,
            "image": "watch6.jfif",
            "description": "Premium smartwatch with full suite of features. Combines technology with elegant design."
        },
        {
            "id": 59,
            "name": "Watch Luxury 7",
            "price": 18999,
            "quantity": 1,
            "stocks": 5,
            "image": "watch7.jfif",
            "description": "Luxury watch with premium materials and exclusive design. A statement piece for discerning collectors."
        },
        {
            "id": 60,
            "name": "Watch Luxury 8",
            "price": 22499,
            "quantity": 1,
            "stocks": 4,
            "image": "watch8.jfif",
            "description": "Ultra-luxury watch with exceptional craftsmanship. Perfect for special occasions and investment."
        },
        {
            "id": 61,
            "name": "Watch Elite 9",
            "price": 26999,
            "quantity": 1,
            "stocks": 3,
            "image": "watch9.jfif",
            "description": "Elite timepiece with cutting-edge technology and luxury aesthetics. For those who demand excellence."
        },
        {
            "id": 62,
            "name": "Watch Signature 10",
            "price": 31999,
            "quantity": 1,
            "stocks": 2,
            "image": "watch10.jfif",
            "description": "Signature collection watch with iconic design and unmatched quality. The crown jewel of any collection."
        },
        {
            "id": 63,
            "name": "Earphone EP-3",
            "price": 1999,
            "quantity": 1,
            "stocks": 20,
            "image": "earphone3.jfif",
            "description": "Advanced wireless earphones with premium sound quality and active noise cancellation. Ideal for immersive listening experiences."
        },
        {
            "id": 64,
            "name": "Earphone EP-4",
            "price": 2499,
            "quantity": 1,
            "stocks": 18,
            "image": "earphone4.jfif",
            "description": "High-performance earphones with superior audio technology and comfortable fit. Perfect for music enthusiasts and professionals."
        },
        {
            "id": 65,
            "name": "Earphone EP-5",
            "price": 2999,
            "quantity": 1,
            "stocks": 16,
            "image": "earphone5.jfif",
            "description": "Premium earphones with cutting-edge features and exceptional sound clarity. Designed for audiophiles and demanding users."
        },
        {
            "id": 66,
            "name": "Earpod ED-1",
            "price": 2499,
            "quantity": 1,
            "stocks": 22,
            "image": "earpod1.jfif",
            "description": "Wireless earpods with seamless connectivity and balanced sound. Great for everyday use and wireless freedom."
        },
        {
            "id": 67,
            "name": "Earpod ED-2",
            "price": 2999,
            "quantity": 1,
            "stocks": 20,
            "image": "earpod2.jfif",
            "description": "Enhanced earpods with improved battery life and sound quality. Perfect for long listening sessions and calls."
        },
        {
            "id": 68,
            "name": "Earpod ED-3",
            "price": 3499,
            "quantity": 1,
            "stocks": 18,
            "image": "earpod3.jfif",
            "description": "Professional earpods with advanced audio features and comfort. Ideal for music production and critical listening."
        },
        {
            "id": 69,
            "name": "Earpod ED-4",
            "price": 3999,
            "quantity": 1,
            "stocks": 16,
            "image": "earpod4.jfif",
            "description": "Premium earpods with superior noise isolation and sound reproduction. Designed for premium audio experiences."
        },
        {
            "id": 70,
            "name": "Earpod ED-5",
            "price": 4499,
            "quantity": 1,
            "stocks": 14,
            "image": "earpod5.jfif",
            "description": "Elite earpods with top-tier specifications and luxury build. The ultimate choice for audio enthusiasts."
        },
        {
            "id": 71,
            "name": "Refrigerator RF-1",
            "price": 14999,
            "quantity": 1,
            "stocks": 8,
            "image": "fridge1.jfif",
            "description": "Compact refrigerator with essential cooling features. Perfect for small spaces with reliable performance and energy efficiency."
        },
        {
            "id": 72,
            "name": "Refrigerator RF-2",
            "price": 16999,
            "quantity": 1,
            "stocks": 7,
            "image": "fridge2.jfif",
            "description": "Mid-size fridge with improved capacity and smart features. Great for families with enhanced cooling technology."
        },
        {
            "id": 73,
            "name": "Refrigerator RF-3",
            "price": 18999,
            "quantity": 1,
            "stocks": 6,
            "image": "fridge3.jfif",
            "description": "Advanced refrigerator with frost-free technology and spacious compartments. Ideal for modern kitchens."
        },
        {
            "id": 74,
            "name": "Refrigerator RF-4",
            "price": 20999,
            "quantity": 1,
            "stocks": 6,
            "image": "fridge4.jfif",
            "description": "Premium fridge with superior cooling and energy-saving features. Perfect for large households."
        },
        {
            "id": 75,
            "name": "Refrigerator RF-5",
            "price": 22999,
            "quantity": 1,
            "stocks": 5,
            "image": "fridge5.jfif",
            "description": "High-end refrigerator with smart controls and advanced filtration. Designed for optimal food preservation."
        },
        {
            "id": 76,
            "name": "Refrigerator RF-6",
            "price": 24999,
            "quantity": 1,
            "stocks": 5,
            "image": "fridge6.jfif",
            "description": "Professional-grade fridge with exceptional capacity and performance. Great for commercial and large family use."
        },
        {
            "id": 77,
            "name": "Refrigerator RF-7",
            "price": 26999,
            "quantity": 1,
            "stocks": 4,
            "image": "fridge7.jfif",
            "description": "Elite refrigerator with cutting-edge technology and luxury design. Perfect for premium home setups."
        },
        {
            "id": 78,
            "name": "Refrigerator RF-8",
            "price": 28999,
            "quantity": 1,
            "stocks": 4,
            "image": "fridge8.jfif",
            "description": "Ultra-premium fridge with maximum efficiency and smart features. Ideal for discerning consumers."
        },
        {
            "id": 79,
            "name": "Refrigerator RF-9",
            "price": 30999,
            "quantity": 1,
            "stocks": 3,
            "image": "fridge9.jfif",
            "description": "Flagship refrigerator with top specifications and innovative design. The ultimate in home appliances."
        },
        {
            "id": 80,
            "name": "Refrigerator RF-10",
            "price": 32999,
            "quantity": 1,
            "stocks": 3,
            "image": "fridge10.jfif",
            "description": "Signature collection fridge with exclusive features and unmatched quality. For those who demand excellence."
        },
        {
            "id": 81,
            "name": "Headphone HP-1",
            "price": 2999,
            "quantity": 1,
            "stocks": 15,
            "image": "headphone1.jfif",
            "description": "Comfortable over-ear headphones with clear sound quality. Perfect for everyday listening and calls."
        },
        {
            "id": 82,
            "name": "Headphone HP-2",
            "price": 3999,
            "quantity": 1,
            "stocks": 14,
            "image": "headphone2.jfif",
            "description": "Wireless headphones with enhanced bass and noise isolation. Great for immersive music experiences."
        },
        {
            "id": 83,
            "name": "Headphone HP-3",
            "price": 4999,
            "quantity": 1,
            "stocks": 12,
            "image": "headphone3.jfif",
            "description": "Premium headphones with active noise cancellation and superior comfort. Ideal for long sessions."
        },
        {
            "id": 84,
            "name": "Headphone HP-4",
            "price": 5999,
            "quantity": 1,
            "stocks": 10,
            "image": "headphone4.jfif",
            "description": "Professional headphones with studio-quality sound and adjustable features. Perfect for audio professionals."
        },
        {
            "id": 85,
            "name": "Headphone HP-5",
            "price": 6999,
            "quantity": 1,
            "stocks": 8,
            "image": "headphone5.jfif",
            "description": "Elite headphones with top-tier audio technology and luxury build. The pinnacle of listening devices."
        },
        {
            "id": 86,
            "name": "Smartphone SP-1",
            "price": 9999,
            "quantity": 1,
            "stocks": 10,
            "image": "phone1.jfif",
            "description": "Entry-level smartphone with essential features. Reliable performance for everyday communication and basic tasks."
        },
        {
            "id": 87,
            "name": "Smartphone SP-2",
            "price": 11999,
            "quantity": 1,
            "stocks": 9,
            "image": "phone2.jfif",
            "description": "Mid-range phone with improved camera and display. Great for users seeking balance between features and affordability."
        },
        {
            "id": 88,
            "name": "Smartphone SP-3",
            "price": 13999,
            "quantity": 1,
            "stocks": 8,
            "image": "phone3.jfif",
            "description": "Advanced smartphone with high-resolution camera and fast processor. Perfect for photography and multimedia."
        },
        {
            "id": 89,
            "name": "Smartphone SP-4",
            "price": 15999,
            "quantity": 1,
            "stocks": 8,
            "image": "phone4.jfif",
            "description": "Premium phone with superior build quality and innovative features. Ideal for tech enthusiasts."
        },
        {
            "id": 90,
            "name": "Smartphone SP-5",
            "price": 17999,
            "quantity": 1,
            "stocks": 7,
            "image": "phone5.jfif",
            "description": "High-end smartphone with flagship specifications. Designed for demanding users and professionals."
        },
        {
            "id": 91,
            "name": "Smartphone SP-6",
            "price": 19999,
            "quantity": 1,
            "stocks": 6,
            "image": "phone6.jfif",
            "description": "Elite phone with cutting-edge technology and exceptional performance. Perfect for power users."
        },
        {
            "id": 92,
            "name": "Smartphone SP-7",
            "price": 21999,
            "quantity": 1,
            "stocks": 5,
            "image": "phone7.jfif",
            "description": "Ultra-premium smartphone with exclusive features. Combines luxury with advanced capabilities."
        },
        {
            "id": 93,
            "name": "Smartphone SP-8",
            "price": 23999,
            "quantity": 1,
            "stocks": 5,
            "image": "phone8.jfif",
            "description": "Flagship device with top-tier camera and display. The ultimate in mobile technology."
        },
        {
            "id": 94,
            "name": "Smartphone SP-9",
            "price": 25999,
            "quantity": 1,
            "stocks": 4,
            "image": "phone9.jfif",
            "description": "Signature smartphone with innovative design and unmatched quality. For those who lead."
        },
        {
            "id": 95,
            "name": "Smartphone SP-10",
            "price": 27999,
            "quantity": 1,
            "stocks": 3,
            "image": "phone10.jfif",
            "description": "Legendary phone with revolutionary features and premium materials. The crown jewel of smartphones."
        },
        {
            "id": 96,
            "name": "Washing Machine WM-1",
            "price": 12999,
            "quantity": 1,
            "stocks": 8,
            "image": "washing-machine1.jfif",
            "description": "Compact washing machine with essential cleaning features. Perfect for small households with efficient water usage."
        },
        {
            "id": 97,
            "name": "Washing Machine WM-2",
            "price": 14999,
            "quantity": 1,
            "stocks": 7,
            "image": "washing-machine2.jfif",
            "description": "Mid-capacity washer with multiple wash programs. Great for families with improved energy efficiency."
        },
        {
            "id": 98,
            "name": "Washing Machine WM-3",
            "price": 16999,
            "quantity": 1,
            "stocks": 6,
            "image": "washing-machine3.jfif",
            "description": "Advanced washing machine with smart controls and superior cleaning. Ideal for modern laundry needs."
        },
        {
            "id": 99,
            "name": "Washing Machine WM-4",
            "price": 18999,
            "quantity": 1,
            "stocks": 6,
            "image": "washing-machine4.jfif",
            "description": "Premium washer with high-capacity drum and advanced features. Perfect for large loads and busy households."
        },
        {
            "id": 100,
            "name": "Washing Machine WM-5",
            "price": 20999,
            "quantity": 1,
            "stocks": 5,
            "image": "washing-machine5.jfif",
            "description": "High-end washing machine with steam cleaning and smart diagnostics. Designed for optimal fabric care."
        },
        {
            "id": 101,
            "name": "Washing Machine WM-6",
            "price": 22999,
            "quantity": 1,
            "stocks": 5,
            "image": "washing-machine6.jfif",
            "description": "Professional-grade washer with exceptional performance and durability. Great for heavy-duty use."
        },
        {
            "id": 102,
            "name": "Washing Machine WM-7",
            "price": 24999,
            "quantity": 1,
            "stocks": 4,
            "image": "washing-machine7.jfif",
            "description": "Elite washing machine with cutting-edge technology and luxury design. Perfect for premium home setups."
        },
        {
            "id": 103,
            "name": "Washing Machine WM-8",
            "price": 26999,
            "quantity": 1,
            "stocks": 4,
            "image": "washing-machine8.jfif",
            "description": "Ultra-premium washer with maximum efficiency and innovative features. Ideal for discerning consumers."
        },
        {
            "id": 104,
            "name": "Washing Machine WM-9",
            "price": 28999,
            "quantity": 1,
            "stocks": 3,
            "image": "washing-machine9.jfif",
            "description": "Flagship washing machine with top specifications and smart integration. The ultimate in laundry appliances."
        },
        {
            "id": 105,
            "name": "Washing Machine WM-10",
            "price": 30999,
            "quantity": 1,
            "stocks": 3,
            "image": "washing-machine10.jfif",
            "description": "Signature collection washer with exclusive features and unmatched quality. For those who demand excellence."
        }
  ]
  function shuffleProducts(array) {
  // Create a copy to avoid mutating the original array
  const shuffled = [...array]; 
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements using destructuring
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const products = shuffleProducts(allProducts);
