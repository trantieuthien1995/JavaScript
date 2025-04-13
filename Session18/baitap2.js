let products = [
    {id: 1, name: "Milk", count: 100},
    {id: 2, name: "Orange", count: 100},
    {id: 3, name: "Butter", count: 100},
];
    
    products.push({id: 4, name: "Apple", count: 100}),
    console.log(products);
    

    let index =products.findIndex(function(el, i){
        return el.id == 2;
    });
        products.splice(index,1);
        console.log(products);
   

    let index2 =products.findIndex(function(el, i){
            return el.id == 3;
        });
       products[index2].count = 0;
       console.log(products);

    let product = products.find((s) => s.name === "Butter");
    console.log(product);


    let index3 =products.findIndex(function(el, i){
        return el.name == "Butter";
    });
    if(index3=== -1){
        console.log("Không có dữ liệu bạn tìm kiếm");
    } else{
        console.log(products[index3]);
    }

/*bai 2 em đọc không hiểu đề bài ạ*/