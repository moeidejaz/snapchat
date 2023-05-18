const apps = document.getElementById("apps")
// console.log(navigator.getInstalledRelatedApps())

// const app = navigator.getInstalledRelatedApps()



navigator.getInstalledRelatedApps()
  .then(function(relatedApps) {
    // Access the list of installed related apps
    console.log(relatedApps);
    apps.innerHTML = `<p>${relatedApps.length}</p>`
    // Iterate over each installed app
    relatedApps.forEach(function(app) {
      console.log(app.platform);
      console.log(app.url);
      // Access other properties of the app as needed
    });
  })
  .catch(function(error) {
    // Handle any errors that occurred while retrieving the list of apps
    console.error(error);
  });