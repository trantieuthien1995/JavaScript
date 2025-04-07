function processConfirm() {
    let result;
    let choice = confirm("Mời bạn xác nhận");
    if (choice == true) {
        result = "Excellent. We 'll play a nice game of chess."
        console.log(result);
    } else {
        result = "Maybe later then."
        console.log(result);
    }
        return result;
}
processConfirm();
