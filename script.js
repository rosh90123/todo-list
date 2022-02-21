

async function fetchDataAsync(url) {
    const response = await fetch(url);
    return response.json();
}



(async function renderUserData() {
    const userData = await fetchDataAsync("https://jsonplaceholder.typicode.com/todos");
    // console.log(userData);
    // Use the userData

    const requiredCheckedItems = 5;
    let checkedItemCount = 0;
    const successMessage = "Congrats! 5 tasks have been successfully completed.";

    const rootElement = document.getElementById("todo-list");
    userData.forEach((item) => {
        const input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("change", (event) => {
            // console.log("On change triggered for ", item.title);
            if (event.target.checked) {
                checkedItemCount++;
            } else {
                if (checkedItemCount > 0) {
                    checkedItemCount--;
                }
            }
            // console.log("Count is now", checkedItemCount);
            if (checkedItemCount >= requiredCheckedItems) {
                alert(successMessage);
            }
        });
        const label = document.createElement("label");
        label.innerText = item.title;
        label.prepend(input);
        rootElement.append(label);
    });
})();
