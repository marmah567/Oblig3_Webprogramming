$(function () {
    saveMovies();
});

// Fetch movies dropdown list from server
function saveMovies() {
    $.get("/saveMovies", function (movies) {
        formatMovies(movies);
    });
}

// Format movies dropdown list
function formatMovies(movies) {
    let defaultValue = "Choose movie here";
    let out = "<select id='selectedMovie' onchange='validateMovies()'>";
    out += "<option value='default'>" + defaultValue + "</option>";

    for (const movie of movies) {
        out += "<option>"+movie.movie+"</option>";
    }
    out += "</select>";
    $("#movies").html(out);
}

// Input validation and check for empty fields
function validateMovies(input) {
    if (input === "" || input === "default") {
        $("#errorMovie").text("Movie is required");
        return false;
    } else {
        $("#errorMovie").text("");
        return true;
    }
}

function validateNumber(input) {
    if (input === "") {
        $("#errorNumber").text("Quantity is required");
        return false;
    } else if (isNaN(input) || input < 1) {
        $("#errorNumber").text("Enter numbers");
        return false;
    } else {
        $("#errorNumber").text("");
        return true;
    }
}

function validateFname(input) {
    if (input === "") {
        $("#errorFirstname").text("Firstname is required");
        return false;
    } else {
        $("#errorFirstname").text("");
        return true;
    }
}

function validateSname(input) {
    if (input === "") {
        $("#errorLastname").text("Lastname is required");
        return false;
    } else {
        $("#errorLastname").text("");
        return true;
    }
}

function validateTel(input) {
    const telRegex = /^[0-9]{8}$/;
    const ok = telRegex.test(input);
    if(input === "") {
        $("#errorTlf").text("Phone number is required");
        return false;
    } else if (!ok) {
        $("#errorTlf").text("Enter a valid phone number");
        return false;
    } else {
        $("#errorTlf").text("");
        return true;
    }
}

function validateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._%&+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ok = emailRegex.test(input);
    if(input === "") {
        $("#errorEmail").text("Email is required");
        return false;
    } else if (!ok) {
        $("#errorEmail").text("Enter a valid email");
        return false;
    } else {
        $("#errorEmail").text("");
        return true;
    }
}

function validateandsave(){
    const movieOK = validateMovies($("#selectedMovie").val());
    const numberOK = validateNumber($("#number").val());
    const fnameOK = validateFname($("#firstname").val());
    const lnameOK = validateSname($("#lastname").val());
    const telOK = validateTel($("#phone").val());
    const emailOK = validateEmail($("#email").val());
    if (movieOK && numberOK && fnameOK && lnameOK && telOK && emailOK) {
        buyTicket();
    }
}

// Function to handle the purchase of tickets
function buyTicket() {
    // Creates a ticket object and sends it to the server
    const ticket = {
        movie: $("#selectedMovie").val(),
        number: $("#number").val(),
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
    };
    $.post("/saveTickets", ticket, function (tickets) {
        getTickets(tickets);
    });
    // Resets input fields after sending the ticket
    $("#selectedMovie").val("default");
    $("#number").val("");
    $("#firstname").val("");
    $("#lastname").val("");
    $("#phone").val("");
    $("#email").val("");
}

// Fetch tickets from server
function getTickets() {
    $.get("/getTickets", function (tickets) {
        formatTickets(tickets);
    });
}

// Function to format tickets and display them
function formatTickets(tickets) {
    let out = "<table>" +
        "<tr><th>Movies</th><th>Number of tickets</th>" + "<th>Firstname</th>" +
        "<th>Lastname</th><th>Phone number</th><th>Email</th></tr>";
    for (let pers of tickets) {
        out += "<tr>" +
            "<td>" + pers.movie + "</td>" +
            "<td>" + pers.number + "</td>" +
            "<td>" + pers.firstname + "</td>" +
            "<td>" + pers.lastname + "</td>" +
            "<td>" + pers.phone + "</td>" +
            "<td>" + pers.email + "</td>" +
            "</tr>";
    }
    $("#allTickets").html(out);
}

// Deletes all tickets
function deleteTickets() {
    $.get("/deleteTickets", function () {
        getTickets();
    });
}