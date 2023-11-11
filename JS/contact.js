const btn = document.getElementById("submit_btn");

document
  .getElementById("mail_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Wysyłanie...";

    const serviceID = "default_service";
    const templateID = "template_2erkvvc";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Wyślij";
        alert("Wysłano, dziękujemy!");
      },
      (err) => {
        btn.value = "Wyślij";
        alert("Błąd, nie wysłano, przepraszamy.");
        console.log(JSON.stringify(err));
      }
    );
  });
