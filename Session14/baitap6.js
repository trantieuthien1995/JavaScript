let booktList = [
    {   
        id: 123,
        tenSach: "Đắc nhân tâm",
        tacGia: "Tran Van A",
        xuatBan: 2000,
    },
    {
        id: 456,
        tenSach: "Cuốn theo chiều gió",
        tacGia: "Nguyen Van B",
        xuatBan: 1990,
    },
    {
        id: 789,
        tenSach: "Nhà giả kim",
        tacGia: "Vo Van C",
        xuatBan: 1890,
    }
];
while(true){
let input = prompt("Hãy nhập vào tác vụ add/list/search/delete/exit");
if(input === "add"){
    let tenSach = prompt("Mời bạn nhập tên sách mới");
    let tacGia = prompt(`Mời bạn nhập tác giả cho ${tenSach}`);
    let xuatBan = prompt(`Mời bạn nhập năm xuất bản cho ${tenSach}`);
    let id = prompt(`Mời bạn nhập id mới cho ${tenSach}`);
    let contact = {
        tenSach: tenSach,
        tacGia: tacGia,
        xuatBan: xuatBan,
        id: id,
    }
    booktList.push(contact);
    displayContact();
} else if(input === "list"){
    displayContact();
    } else if(input === "search"){
        let tenSach = prompt("Mời bạn nhập tên sách muốn tìm kiếm");
        let index =booktList.findIndex(function(el, i){
            return el.tenSach == tenSach;
        });
        if(index=== -1){
            console.log("Bạn nhập sai, vui lòng nhập lại");
        } else{
            console.log("Tên sách:", booktList[index].tenSach);
            console.log("Tác giả:", booktList[index].tacGia);
            console.log("Năm xuất bản:", booktList[index].xuatBan);
            console.log("ID:", booktList[index].id);
            console.log("----------------------------");
        }
    }
        else if(input === "delete"){
        let id = Number(prompt("Mời bạn nhập ID muốn xóa"));
        let index =booktList.findIndex(function(el, i){
            return el.id == id;
        });
        if(index=== -1){
            console.log("Bạn nhập sai, vui lòng nhập lại");
        } else{
            booktList.splice(index,1);
            displayContact();
        }
    } else if(input === "exit"){
        console.log("Cảm ơn bạn đã sử dụng app của chúng tôi");
        break;
    } else{
        console.log("Bạn nhập sai, vui lòng nhập lại");
    }
}
    
    function displayContact(){
        console.log("Your BookList:");
        for(let index in booktList){
            console.log("Tên sách:", booktList[index].tenSach);
            console.log("Tác giả:", booktList[index].tacGia);
            console.log("Năm xuất bản:", booktList[index].xuatBan);
            console.log("ID:", booktList[index].id);
            console.log("-----------------------------");
        }
    }