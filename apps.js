const appsContainer = document.getElementById("apps");

function displayInstalledApps(apps) {
  let htmlContent = "";

  apps.forEach(function(app) {
    htmlContent += `<p>Platform: ${app.platform}</p>`;
    htmlContent += `<p>URL: <a href="${app.url}">${app.url}</a></p>`;
    htmlContent += "<br>";
  });

  appsContainer.innerHTML = htmlContent;
}

if ('getInstalledRelatedApps' in navigator) {
  navigator.getInstalledRelatedApps()
    .then(function(relatedApps) {
      console.log(relatedApps);
      appsContainer.innerHTML = `<p>${relatedApps.length} apps found</p>`;
      displayInstalledApps(relatedApps);
    })
    .catch(function(error) {
      console.error(error);
      appsContainer.innerHTML = "Error retrieving the list of installed apps.";
    });
} else {
  appsContainer.innerHTML = "The getInstalledRelatedApps API is not supported in this browser.";
}
