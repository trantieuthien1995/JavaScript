let temp = Number(prompt("Nhập nhiệt độ cần chuyển"));
let result = (temp*1.8 + 32);
alert("Nhiệt độ chuyển sang độ F là:" + " "+(result));

let met = Number(prompt("Nhập số mét cần chuyển"));
let feet = (met*3.2808398950131);
alert("Kết quả chuyển từ mét sang feet là:" + " "+(feet));

let a = Number(prompt("Nhập chiều dài cạnh a"));
alert("Diện tích hình vuông là:" + " "+(a*a));

let width = Number(prompt("Nhập chiều dài hình chữ nhật"));
let height = Number(prompt("Nhập chiều rộng hình chữ nhật"));
alert("Diện tích hình chữ nhật là:" + " "+(width*height));

let canhA = Number(prompt("Nhập chiều dài cạnh a"));
let canhB = Number(prompt("Nhập chiều dài cạnh b"));
alert("Diện tích tam giác vuông là:" + " "+(canhA*canhB*0.5));

let soA = Number(prompt("Nhập một số a bất kì"));
let soB = Number(prompt("Nhập một số b bất kì"));
let ptbac1 = (-soB/soA);
if(soA !== 0){
    alert("Phương trình có một nghiệm duy nhất x ="+ " " + ptbac1);
} else if(soA === 0 && soB !== 0){
    alert("Phương trình vô nghiệm");
} else if(soA === 0 && soB === 0){
    alert("Phương trình vô số nghiệm");
}

let so1 = Number(prompt("Nhập một số a bất kì"));
let so2 = Number(prompt("Nhập một số b bất kì"));
let so3 = Number(prompt("Nhập một số c bất kì"));
let delta = (so2*so2-4*so1*so3);
if(delta < 0){
    alert("Phương trình vô nghiệm");
} else if(delta === 0){
    alert("Phương trình có 1 nghiệm kép x =" + (-so2/2*so1));
} else if(delta > 0) {
    let x1 = (-so2+Math.sqrt(delta))/2*so1;
    let x2 = (-so2-Math.sqrt(delta))/2*so1;
    alert ("Phương trình có 2 nghiệm x1 =" + x1 + "và x2 =" + x2);
}
    
let tuoi = Number(prompt("Nhập một số yêu thích"));
if(tuoi === parseInt(tuoi) && tuoi > 0 && tuoi <=120){
    alert("Đây là số tuổi của một người");
} else{
    alert("Đây không phải là số tuổi của một người");
}

let canha = parseFloat(prompt("Nhập một số a bất kì"));
let canhb = parseFloat(prompt("Nhập một số b bất kì"));
let canhc = parseFloat(prompt("Nhập một số c bất kì"));
if(canha+canhb>canhc && canha+canhc>canhb && canhb+canhc>canha){
    if(canha*canha==canhb*canhb+canhc*canhc || canhb*canhb==canha*canha+canhc*canhc || canhc*canhc==canha*canha+canhb*canhb){
        alert("Đây là 3 cạnh của tam giác vuông");
        }
    if(canha==canhb && canhb==canhc){
        alert("Đây là 3 cạnh của tam giác đều");
    }
    if(canha==canhb||canha==canhc||canhb==canhc){
        alert("Đây là 3 cạnh của tam giác cân");
    }
    else {
        alert("Đây không phải 3 cạnh của tam giác");
    }
}