import *as Yup from "yup";


export let signUpSchema = Yup.object({
    gameName: Yup.string().min(2, "Game name must be at least 2 characters").max(20).required('Please enter game name'),
    publisherName: Yup.string().min(3, "Game name must be at least 3 characters").max(20).required('Please enter publisher name'),
    gameUrl: Yup.string().url('Invalid url').required("Please enter game url"),
    shortDesc: Yup.string().min(100, 'Short description must be at least 100 characters').max(300, "Short description must be at most 300 characters").required("Please write short description about game"),
    longDesc: Yup.string().min(400, 'Full description must be at least 400 characters').required("Please write Full description about game"),
    facebookUrl: Yup.string().url('Invalid url').required("Please enter facebook url"),
    xUrl: Yup.string().url('Invalid url').required("Please enter X url"),
    instagramUrl: Yup.string().url('Invalid url').required("Please enter instagram url"),
    docsUrl: Yup.string().url('Invalid url').required("Please enter docs url"),
    telegramUrl: Yup.string().url('Invalid url').required("Please enter telegram url"),
    discourseUrl: Yup.string().url('Invalid url').required("Please enter discourse url"),
    otherLink: Yup.string().url('Invalid url'),
    coins: Yup.object().shape({
        Solana: Yup.boolean(),
        Ethereum: Yup.boolean(),
        Bitcoin: Yup.boolean(),
        Dogecoin: Yup.boolean(),
        Arbitrum: Yup.boolean(),
        TRON: Yup.boolean(),
    }).test('at-least-one-selected', 'At least one coin must be selected', value =>
        Object.values(value).some(selected => selected === true)
    ),
    releaseDate: Yup.date().nullable().required('Please select release date'),
    playerType: Yup.string().oneOf(['single', 'multiplayer']).required('Please select player type'),
    token: Yup.string().oneOf(['free', 'paid']).required('Please select token type'),
    tokenAddress: Yup.string(),
    tokenRequired: Yup.string(),
    categories: Yup.array().min(1, 'Please select at least one category').required('Please select at least one category'),
    files: Yup.mixed()
        .test('file-type', 'Only jpg and png files are allowed', (value) => {
            return value && ['image/jpeg', 'image/png'].includes(value.type);
        })
        .test('file-size', 'File size is too large', (value) => {
            return value && value.size <= 5242880; // 5MB
        })
        .test('file-dimensions', 'Image must be 250x260 pixels', async (value) => {
            if (!value) return true; // Skip validation if no file is selected
            const file = value;
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target.result;
                    img.onload = () => {
                        const isValidDimensions = img.width <= 250 && img.height <= 260 && img.width >= 220 && img.height >= 230;
                        if (isValidDimensions) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    };
                    img.onerror = () => {
                        reject(new Error('Failed to load image'));
                    };
                };
            });
        }).required('Please select image of game'),
    gameLogo: Yup.mixed()
        .test('file-type', 'Only jpg and png files are allowed', (value) => {
            return value && ['image/jpeg', 'image/png'].includes(value.type);
        })
        .test('file-size', 'File size is too large', (value) => {
            return value && value.size <= 5242880; // 5MB
        })
        .test('file-dimensions', 'Image must be 29x30 pixels', async (value) => {
            if (!value) return true; // Skip validation if no file is selected
            const file = value;
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target.result;
                    img.onload = () => {
                        const isValidDimensions = img.width <= 29 && img.height <= 30;
                        if (isValidDimensions) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    };

                };
            });
        }).required('Please select logo of game'),
    gameHeader: Yup.mixed()
        .test('file-type', 'Only jpg and png files are allowed', (value) => {
            return value && ['image/jpeg', 'image/png'].includes(value.type);
        })
        .test('file-size', 'File size is too large', (value) => {
            return value && value.size <= 5242880; // 5MB
        })
        .test('file-dimensions', 'Image must be 1500x700 pixels', async (value) => {
            if (!value) return true; // Skip validation if no file is selected
            const file = value;
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target.result;
                    img.onload = () => {
                        const isValidDimensions = img.width >= 1100 && img.height >= 700;
                        if (isValidDimensions) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    };
                    img.onerror = () => {
                        reject(new Error('Failed to load image'));
                    };
                };
            });
        }).required('Please select header image of game'),
    screenshot: Yup.array()
        .of(
            Yup.object().shape({
                file: Yup.mixed()
                    .test('file-type', 'Only jpg and png files are allowed', (value) => {
                        return value && ['image/jpeg', 'image/png'].includes(value.type);
                    })
                    .test('file-size', 'File size is too large', (value) => {
                        return value && value.size <= 5242880; // 5MB
                    })
                    .test('file-dimensions', 'Image must be 1200x500 pixels', async (value) => {
                        if (!value) return true; // Skip validation if no file is selected
                        const file = value;
                        return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = (event) => {
                                const img = new Image();
                                img.src = event.target.result;
                                img.onload = () => {
                                    const isValidDimensions = img.width <= 1200 && img.height <= 700;
                                    if (isValidDimensions) {
                                        resolve(true);
                                    } else {
                                        resolve(false);
                                    }
                                };
                                img.onerror = () => {
                                    reject(new Error('Failed to load image'));
                                };
                            };
                        });
                    })
            })
        )
        .min(4, 'Please select at least four image')
        .required('Please select at least one image')

})


