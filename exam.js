function openExam() {
  const code = prompt("Enter Exam Access Code");
  if (code === "SWRN@2385") {
    alert("Access Granted! Exam Portal Opening...");
    window.location.href = "exam.html"; // connect your exam page here
  } else {
    alert("Invalid Code! Access Denied");
  }
}
