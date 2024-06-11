function mostrarNotificacao() {
  if ("Notification" in window) {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var options = {
          body: "Notificação ativada!",
          icon: "path/to/notification-icon.png",
        };
        var notification = new Notification("Localização", options);
      }
      else if(permission !== "denied" || permission !== "default") {
        console.log("Permissão de notificação não concedida");
      }
      else if (permission === "denied") {
        console.log("Permissão de notificação negada");
      }
    });
  } else {
    console.log("Notification API not available");
  }
}
