function createUser(name = "Dev", age = "18", role = "user") {
    const user = {
        name: name,
        age: age,
        role: role
    };
    console.log(user);
}

createUser("dev");
createUser("Nguyen Van A", "20", "Admin");