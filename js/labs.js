
function checkIPAnswer() {

    const selected = document.querySelector(
        'input[name="ipAddress"]:checked'
    );

    const result = document.getElementById("ipResult");

    result.className = "quiz-result";

    if (!selected) {
        result.textContent = "Please select an answer first.";
        result.classList.add("quiz-warning");
        return;
    }

    if (selected.value === "correct") {
        result.textContent =
            "Correct! 192.168.1.25 is a valid IPv4 address.";
        result.classList.add("quiz-correct");
    } else {
        result.textContent =
            "Not quite. An IPv4 address contains four numbers, each from 0 to 255.";
        result.classList.add("quiz-wrong");
    }
}
function checkLinuxCommand() {

    const selected = document.querySelector(
        'input[name="linuxCommand"]:checked'
    );

    const result = document.getElementById("linuxCommandResult");

    result.className = "quiz-result";

    if (!selected) {
        result.textContent = "Please select an answer first.";
        result.classList.add("quiz-warning");
        return;
    }

    if (selected.value === "correct") {
        result.textContent =
            "Correct! The ip addr command displays network interfaces and IP addressing information.";
        result.classList.add("quiz-correct");
    } else {
        result.textContent =
            "Not quite. Try again. The correct command is ip addr.";
        result.classList.add("quiz-wrong");
    }
}
function checkSSHPort() {

    const selected = document.querySelector(
        'input[name="sshPort"]:checked'
    );

    const result = document.getElementById("sshPortResult");

    result.className = "quiz-result";

    if (!selected) {
        result.textContent = "Please select an answer first.";
        result.classList.add("quiz-warning");
        return;
    }

    if (selected.value === "correct") {
        result.textContent =
            "Correct! SSH commonly uses port 22.";
        result.classList.add("quiz-correct");
    } else {
        result.textContent =
            "Not quite. SSH commonly uses port 22.";
        result.classList.add("quiz-wrong");
    }
}
function checkProtocol() {

    const selected = document.querySelector(
        'input[name="protocol"]:checked'
    );

    const result = document.getElementById("protocolResult");

    result.className = "quiz-result";

    if (!selected) {
        result.textContent = "Please select an answer first.";
        result.classList.add("quiz-warning");
        return;
    }

    if (selected.value === "correct") {
        result.textContent =
            "Correct! TCP is connection-oriented and designed for reliable delivery.";
        result.classList.add("quiz-correct");
    } else {
        result.textContent =
            "Not quite. UDP is connectionless. The correct answer is TCP.";
        result.classList.add("quiz-wrong");
    }
}
function checkNetworkTool() {

    const selected = document.querySelector(
        'input[name="networkTool"]:checked'
    );

    const result = document.getElementById("networkToolResult");

    result.className = "quiz-result";

    if (!selected) {
        result.textContent = "Please select an answer first.";
        result.classList.add("quiz-warning");
        return;
    }

    if (selected.value === "correct") {
        result.textContent =
            "Correct! ping is commonly used to test basic network connectivity.";
        result.classList.add("quiz-correct");
    } else {
        result.textContent =
            "Not quite. The correct answer is ping.";
        result.classList.add("quiz-wrong");
    }
}
function checkSecurityAction() {

    const selected = document.querySelector(
        'input[name="securityAction"]:checked'
    );

    const result = document.getElementById("securityActionResult");

    result.className = "quiz-result";

    if (!selected) {
        result.textContent = "Please select an answer first.";
        result.classList.add("quiz-warning");
        return;
    }

    if (selected.value === "correct") {
        result.textContent =
            "Correct! Identify and document the service before making changes.";
        result.classList.add("quiz-correct");
    } else {
        result.textContent =
            "Not quite. A security professional should first identify and document the service within the authorized scope.";
        result.classList.add("quiz-wrong");
    }
}