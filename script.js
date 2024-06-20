function openForm() {
    document.getElementById("contact-us").style.display = "block";
  }

  const para = document.query(".hidden-b");


  document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
      if (view(paragraph)) {
        paragraph.classList.add("hidden-b--visible")
      }
    })
  })

  function view(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  }