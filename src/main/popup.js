/**
 * Listener for event on POPUP page.
 */
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('consoleBtn').addEventListener('click', printPage);
	document.getElementById('downloadBtn').addEventListener('click', downloadPage);
});

function printPage(e) {
	chrome.tabs.executeScript(null, {
		file : "js/console.js"
	});

}
function downloadPage(e) {
	chrome.tabs.executeScript(null, {
		file : "js/download.js"
	})
};