const productData = [
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },
    {
        id: 1,
        img1: '/Images/Product/Sunglasses/green-wayfarer-1.png',
        img2: '/Images/Product/Sunglasses/green-wayfarer-2.png',
        img3: '/Images/Product/Sunglasses/green-wayfarer-3.png',
        img4: '/Images/Product/Sunglasses/green-wayfarer-4.png',
        title: 'Green Wayfarer Sunglasses for Men and Women', //~ product title
        price: '1,400',//~ starting from
        desc: 'Green Wayfarer Sunglasses from Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (P357BK1).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Polycarbonate', //~ frame material
        shape: '', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 2,
        img1: '/Images/Product/Sunglasses/gray-geomatric-1.png',
        img2: '/Images/Product/Sunglasses/gray-geomatric-2.png',
        img3: '/Images/Product/Sunglasses/gray-geomatric-3.png',
        img4: '/Images/Product/Sunglasses/gray-geomatric-4.png',
        title: 'Grey Geometric Sunglasses for Women', //~ product title
        price: '2,200',//~ starting from
        desc: 'Round Sunglasses from Titan Eye+. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M273GY1V).',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Fastrack', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
        rating: '', //~ out of 5
        reviews: '', //~ number of reviews
    },
    {
        id: 3,
        img1: '/Images/Product/Sunglasses/metal-unisex-1.png',
        img2: '/Images/Product/Sunglasses/metal-unisex-2.png',
        img3: '/Images/Product/Sunglasses/metal-unisex-3.png',
        img4: '/Images/Product/Sunglasses/metal-unisex-4.png',
        title: 'METAL UNISEX OPTICAL FRAME', //~ product title
        price: '8,690',//~ starting from
        desc: 'A sleek gunmetal pillow-shaped unisex metal frame, designed with standard metal nosepads for comfortable everyday wear. Comes with demo lenses and a durable full-metal build for a premium look.',
        category: 'eyeglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Geometric', //~ frame shape
    },
    {
        id: 4,
        img1: '/Images/Product/Sunglasses/round-metal-1.png',
        img2: '/Images/Product/Sunglasses/round-metal-2.png',
        img3: '/Images/Product/Sunglasses/round-metal-3.png',
        img4: '/Images/Product/Sunglasses/round-metal-4.png',
        title: 'Ray-Ban Round Metal', //~ product title
        price: '8,690',//~ starting from
        desc: 'A timeless round metal design in legend gold paired with G-15 green glass lenses for clear vision, UV protection, and effortless vintage style.',
        category: 'sunglasses', //~ Eyeglasses, Sunglasses, Mens , womens, kids , blue-light,
        brand: 'Ray Ban', //~ Ray-Ban, Kodak , Titan , Vouge , Fastrack`
        color: [], //~ colors available
        material: 'Metal', //~ frame material
        shape: 'Round', //~ frame shape
    },

]

export { productData };