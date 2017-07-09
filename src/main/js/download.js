var htmlJson = {};
htmlJson.title = document.getElementsByTagName('title')[0].text;
var html = '';
html += 'TITLE:';
html += document.getElementsByTagName('title')[0].text;
html += '<br>';
var fields = document.getElementsByTagName('input');
htmlJson.fields = [ fields.length ];
for (var i = 0; i < fields.length; i++) {
	htmlJson.fields[i] = {};
	htmlJson.fields[i].type = fields[i].type;
	htmlJson.fields[i].name = fields[i].name;
	htmlJson.fields[i].placeholder = fields[i].placeholder;
	htmlJson.fields[i].formtarget = fields[i].formtarget;
	htmlJson.fields[i].value = fields[i].value;
}
console.log(JSON.stringify(htmlJson));

//DOWNLOAD FILE JSON
var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(htmlJson));
var a = document.createElement('a');
a.href = 'data:' + data;
a.download = 'data.json';
a.innerHTML = 'download JSON';
document.getElementsByTagName("body")[0].appendChild(a);
