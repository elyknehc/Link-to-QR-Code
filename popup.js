document.getElementById("generate").addEventListener("click", () => {
	const text = document.getElementById("textInput").value.trim();

	if (!text) {
		alert("Please enter text first.");
		return;
	}

	const canvas = document.getElementById("qrCanvas");

	QRCode.toCanvas(canvas, text, { width: 215 }, function (error) {
		if (error) {
			console.error("Error generating QR code:", error);
			alert("Failed to generate QR code.");
		}
	});
});
