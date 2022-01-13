document.registrationForm.addEventListener("submit", async(event) => {
    event.preventDefault();

    const { method, action } = event.target;

    const body = {
        name: event.target.username.value,
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
});

document.regDevForm.addEventListener("submit", async(event) => {
    event.preventDefault();

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
});