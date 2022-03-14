const langEl = document.querySelector('.langwrap');
            const link = document.querySelectorAll('a');
            const homeEl = document.querySelector('.home');
            const productEl = document.querySelector('.product');
            const blogEl = document.querySelector('.blog');
            const contactEl = document.querySelector('.contact');
            const langdEl = document.querySelector('.langwrap');
            const linkd = document.querySelectorAll('h1');
            const titleEl = document.querySelector('.title');

            link.forEach(el => {
                el.addEventListener('click', () => {
                    langEl.querySelector('.activelang').classList.remove('activelang');
                    el.classList.add('activelang');

                    const attr = el.getAttribute('language');

                    homeEl.textContent = data[attr].home;
                    productEl.textContent = data[attr].product;
                    blogEl.textContent = data[attr].blog;
                    contactEl.textContent = data[attr].contact;
                    titleEl.textContent = data[attr].title;
                });
            });

            var data = {
                "english": {
                    "home": "Home",
                    "product": "Product",
                    "blog": "Blog",
                    "contact": "Contact",
                    "title": "SALE OFF! UP TO 70%",
                    "postertxt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "shop": "SHOP NOW",
                    "all": "ALL PRODUCTS",
                    "name1": "Cuffed Beanie",
                    "name2": "Calvin Klein Sweatpants",
                    "name3": "Pink Leather Watch",
                    "name4": "Cyan Boheme",
                    "name5": "Woleen Tee",
                    "name6": "Denim Shell Top Ruffle",
                    "name7": "Cluse La Bohème Rose",
                    "name8": "Cuffed Beanie",
                    "name9": "Asos Ridley High Waist",
                    "name10": "Analogue Resin Strap",
                    "name11": "Ridley High Waist",
                    "name12": "Shell Top with Ruffle Front",
                    "add": "ADD TO CART"
                },
                "georgian": {
                    "home": "მთავარი",
                    "product": "პროდუქტი",
                    "blog": "ბლოგი",
                    "contact": "კონტაქტები",
                    "title": "SALE OFF! UP TO 70%",
                    "postertxt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "shop": "SHOP NOW",
                    "all": "ALL PRODUCTS",
                    "name1": "Cuffed Beanie",
                    "name2": "Calvin Klein Sweatpants",
                    "name3": "Pink Leather Watch",
                    "name4": "Cyan Boheme",
                    "name5": "Woleen Tee",
                    "name6": "Denim Shell Top Ruffle",
                    "name7": "Cluse La Bohème Rose",
                    "name8": "Cuffed Beanie",
                    "name9": "Asos Ridley High Waist",
                    "name10": "Analogue Resin Strap",
                    "name11": "Ridley High Waist",
                    "name12": "Shell Top with Ruffle Front",
                    "add": "ADD TO CART"
                },
                "german": {
                    "home": "Zuhause",
                    "product": "Produkt",
                    "blog": "bloggen",
                    "contact": "Kontakt",
                    "title": "70%_მდე ფასდაკლება!",
                    "postertxt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "shop": "SHOP NOW",
                    "all": "ALL PRODUCTS",
                    "name1": "Cuffed Beanie",
                    "name2": "Calvin Klein Sweatpants",
                    "name3": "Pink Leather Watch",
                    "name4": "Cyan Boheme",
                    "name5": "Woleen Tee",
                    "name6": "Denim Shell Top Ruffle",
                    "name7": "Cluse La Bohème Rose",
                    "name8": "Cuffed Beanie",
                    "name9": "Asos Ridley High Waist",
                    "name10": "Analogue Resin Strap",
                    "name11": "Ridley High Waist",
                    "name12": "Shell Top with Ruffle Front",
                    "add": "ADD TO CART"
                }
            }