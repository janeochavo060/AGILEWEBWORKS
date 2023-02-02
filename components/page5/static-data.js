const ProjectsData = [
    {
        title: 'Restaurant Online Food Ordering',
        description: "<p>Our Online Food Ordering Website is an ideal solution for hotels, restaurants, pizza places, bakeries or catering businesses to augment their dwindling sales during the Coronavirus Pandemic, by making the meals, breads or pastries available through online sales and ordering. Our solution is specifically for online food ordering or catering, and comes with extensive features that are not available with online shop websites.</p><p>The system is suitable to be used in any country, and can be modified to meet your specific food ordering requirements.</p>",
        slug: 'restaurant-online-food-ordering',
        bgColor: '#B2272D',
        // Slices Here
        slices: [
            
            // 2 phones center laptop image
            {
                sliceType: 'PhonesCenterLaptop',
                sliceId: 1,
                phones: [
                    {
                        uri: '/page-5/Rectangle 10.png'
                    },
                    {
                        uri: '/page-5/Rectangle 9.png'
                    }
                ],
                laptop: {
                    uri: '/page-5/Group 58.png'
                }
            },
            // Title + List
            {
                sliceType: 'TitleList',
                title: 'Feature Overview',
                sliceId: 2,
                list: [
                    {
                        value: '<p>Includes an API based Progressive Web App (PWA) with almost full mobile app functionality.</p>'
                    },
                    {
                        value: '<p>Mobile responsive and “mobile first” design.</p>'
                    },
                    {
                        value: '<p>Easy to use CMS for uploading and managing products, users and branches.</p>'
                    },
                    {
                        value: '<p>Products can be very complex, with add-ons, flavours, etc., which can be free or paid extras.</p>'
                    },
                    {
                        value: '<p>Includes COD, store pickup and almost any payment gateway.</p>'
                    },
                    {
                        value: '<p>Customers can create a log-in (members) account.</p>'
                    },
                    {
                        value: '<p>Each store can set up their own delivery area for the “Check to see if we deliver in your Area” . This can be based on postal codes, suburbs or barangas for example.</p>'
                    },
                    {
                        value: '<p>Unlimited number of branches/stores, each with their own dashboard for managing and tracking sales orders.</p>'
                    },
                    {
                        value: '<p>Mobile printer app for viewing and printing out the orders, either for the cashier, kitchen or delivery, or all three. This app also allows the staff to track orders and manage their status without having to use a PC or laptop.</p>'
                    },
                ]
            },

            {
                sliceType: 'ImageTitleDescription',
                title: 'Feature Overview',
                alignmentRight: 0, 
                sliceId: 3,
                image: {
                    uri: '/page-5/Rectangle 11.png'
                },
                description: '<p><ul><li>The Progressive Web Application (PWA) provides Mobile App functionality, providing improved user retention and performance, without the complications involved in maintaining a mobile app.</li><li>It’s not downloaded from an app store. Users only need to click on the link (bottom right) to install it on their desktop or mobile phone home screen.</li><li>PWAs load in seconds, and use a very small amount of phone memory.</li><li>PWAs work offline like mobile apps.</li></ul></p>'
            },
            {
                sliceType: 'ImageTitleDescription',
                title: 'Select Delivery Date & Time',
                alignmentRight: 1,
                sliceId: 4,
                image: {
                    uri: '/page-5/Rectangle 12.png'
                },
                description: "<p><ul><li>A client can choose “Deliver Now” or a delivery date and time.</li><li>The store admin can set up the operating hours, and the days in advance which a customer can order for. In this example, it's a week in advance.</li><li>Each product has a “preparation time” and a “delivery time”. An order cannot be placed for a time if it’s less than the delivery and preparation time.</li><li>Special meals could have many hours of cooking time, where custom cakes may have a one or two day preparation time.</li></ul></p>"
            },

            {
                sliceType: 'Carousel',
                sliceId: 5,
                title: 'Sites Built',
                bgColor: '#E9EEF6',
                images: [
                    {
                        uri: '/page-5/Rectangle 37.png',
                        title: 'Wing Zone'
                    },
                    {
                        uri: '/page-5/Rectangle 37.png',
                        title: 'Wing Zone 1'
                    },
                    {
                        uri: '/page-5/Rectangle 37.png',
                        title: 'Wing Zone 2'
                    },
                    {
                        uri: '/page-5/Rectangle 37.png',
                        title: 'Wing Zone 3'
                    },
                    {
                        uri: '/page-5/Rectangle 37.png',
                        title: 'Wing Zone 4'
                    },
                    {
                        uri: '/page-5/Rectangle 37.png',
                        title: 'Wing Zone 5'
                    },
                    {
                        uri: '/page-5/Rectangle 37.png',
                        title: 'Wing Zone 6'
                    }
                ]
            }

        ]
    }
]


export default ProjectsData;

