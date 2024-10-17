const notification_popup = document.getElementById("notification");
const notification_content = document.getElementsByClassName("notification-content");
const notification_text = document.getElementById("notification-text");
const span = document.getElementById("notification-close");

function show_notification(type) {
    if (typeof type === "undefined") {
        notification_popup.style.display = "block";
        notification_content[0].style.display = "none";
    } else {
        notification_popup.style.display = "block";
        notification_text.innerHTML = type;
    }
}

span.onclick = function () {
    notification_popup.style.display = "none";
}