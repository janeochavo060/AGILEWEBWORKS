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

        ]
    }
]


export default ProjectsData;

