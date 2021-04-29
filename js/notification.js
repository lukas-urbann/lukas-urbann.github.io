var notification_popup = document.getElementById("notification");
var notification_text = document.getElementById("notification-text");
var span = document.getElementById("notification-close");

function show_notification (text)
{
  notification_text.innerHTML = text;
  notification_popup.style.display = "block";
}

span.onclick = function()
{
  notification_popup.style.display = "none";
}