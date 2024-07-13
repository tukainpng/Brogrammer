function copy(id)
{
  let content = document.getElementById(id)
  navigator.clipboard.writeText(content.innerText)

  let notify = content.innerText + " was copied to the clipboard."

  if (Notification.permission === "granted")
  {
    new Notification(notify)
  }
  else if (Notification.permission !== "denied")
  {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          new Notification(notify)
        }
      })
  }
}
