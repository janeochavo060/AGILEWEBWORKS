const resourcePortal = {
    slices: [
        {
            sliceType: 'tabs',
            data: [
                {
                    sliceType: 'titleDescriptionLink',
                    tabTitle: 'EGRMs',
                    title: 'What are EGRMs?',
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                    link: {
                        title: "Proceed to Portal",
                        value: "https://sample-url.com"
                    }
                },
                {
                    sliceType: 'files',
                    tabTitle: 'Training Materials',
                    title: "Training Materials",
                    files: [
                        {
                            name: 'SampleFileName.pdf',
                            type: 'pdf',
                            filePath: 'https://www.africau.edu/images/default/sample.pdf',
                            fileSize: '2.1 MB',
                        },
                        {
                            name: 'SampleFileName.pdf',
                            type: 'pdf',
                            filePath: 'https://www.africau.edu/images/default/sample.pdf',
                            fileSize: '2.1 MB',
                        },
                        {
                            name: 'SampleFileName.pdf',
                            type: 'pdf',
                            filePath: 'https://www.africau.edu/images/default/sample.pdf',
                            fileSize: '2.1 MB',
                        },
                        {
                            name: 'SampleFileName.pdf',
                            type: 'pdf',
                            filePath: 'https://www.africau.edu/images/default/sample.pdf',
                            fileSize: '2.1 MB',
                        }
                    ]
                },

                {
                    sliceType: 'TitleLinks',
                    tabTitle: 'Learning Tools',
                    title: "Learning Tools",
                    links: [
                        {
                            title: "Photoshop",
                            value: "https://www.adobe.com/au/products/photoshop.html"
                        },
                        {
                            title: "Photoshop",
                            value: "https://www.adobe.com/au/products/photoshop.html"
                        },
                        {
                            title: "Photoshop",
                            value: "https://www.adobe.com/au/products/photoshop.html"
                        },
                        {
                            title: "Photoshop",
                            value: "https://www.adobe.com/au/products/photoshop.html"
                        }
                    ]
                },
                
                {
                    sliceType: 'images',
                    tabTitle: 'Images',
                    title: "Sample Title Here",
                    images: [
                        {
                            title: "Sample Title",
                            value: "https://via.placeholder.com/500x500"
                        },
                        {
                            title: "Sample Title",
                            value: "https://via.placeholder.com/500x500"
                        },
                        {
                            title: "Sample Title",
                            value: "https://via.placeholder.com/500x500"
                        },
                        {
                            title: "Sample Title",
                            value: "https://via.placeholder.com/500x500"
                        },
                        {
                            title: "Sample Title",
                            value: "https://via.placeholder.com/500x500"
                        },
                    ]
                },
                {
                    sliceType: 'images',
                    tabTitle: 'Images',
                    title: "Sample Title Here",
                    videos: [
                        {
                            title: "Sample Video Title",
                            link: "https://www.youtube.com/watch?v=K4TOrB7at0Y",
                        },
                        {
                            title: "Sample Video Title",
                            link: "https://www.youtube.com/watch?v=K4TOrB7at0Y",
                        },
                        {
                            title: "Sample Video Title",
                            link: "https://www.youtube.com/watch?v=K4TOrB7at0Y",
                        },
                        {
                            title: "Sample Video Title",
                            link: "https://www.youtube.com/watch?v=K4TOrB7at0Y",
                        },
                        {
                            title: "Sample Video Title",
                            link: "https://www.youtube.com/watch?v=K4TOrB7at0Y",
                        },
                    ]
                }
            ]   
        },

        {
            sliceType: 'loginForm',
            title: "Login into your account </br> to download and access our modules",
            description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper vitae elit eu convallis. Vestibulum porttitor elit vel turpis finibus volutpat.</p>",
            bgColor: '#034F8B',
            form: {
                id: "form_login",
                action: "https://boilerplate.staging.saas.halcyondigitalhost.com/api/form/form_login" // POST
            }
        }
    ]
}


export default resourcePortal; 