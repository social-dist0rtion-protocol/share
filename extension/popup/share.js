console.log("extension loaded!");

const onSubmit = () => {
  const { title } = document;
  const location = window.location.href;
  const comment = document.getElementById("comment").value;

  console.log(`current URL: ${location}, comment: ${comment}, title: ${title}`);

  fetch("https://share.dist0rtion.com/api/v1/add", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url: window.location.href,
      title,
      comment
    })
  }).then(response => console.log(response.status));
};

document.addEventListener("click", e => {
  if (e.target.id === "dist0rtion-submit") onSubmit();
});

document.addEventListener("keypress", e => {
  if (e.keyCode === 13) onSubmit();
});
