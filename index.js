function toggleResumePage() {
    var display = document.getElementById("page1").style.display;
    if (display === "none") {
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        document.getElementById("btnPage").textContent = 'Page2';
    }
    else {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
        document.getElementById("btnPage").textContent = 'Page 1';
    }
}