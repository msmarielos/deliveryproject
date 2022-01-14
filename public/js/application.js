const arr = document.getElementById("123")

document.registrationForm?.addEventListener("submit", async(event) => {
    event.preventDefault();
    
    if(arr.value ==="user") {
            const { method, action } = event.target;
            const role = event.target.dataset.role;
        
            const body = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
                address: event.target.address.value,
            };
            const response = await fetch(action, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
        
            const user = await response.json();
        
            // console.log(user);
            if (user) {
                window.location.href = user.url;
            }
        
    }
    if (arr.value ==="delivery") {
        const { method, action } = event.target;

        const body = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };
    
        const response = await fetch(action, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    
        const delivery = await response.json();
        if (delivery) {
            window.location.href = delivery.url
        }
    }
})





