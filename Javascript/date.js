var datum = new Date()
var den = datum.getDate()
var mesiac = datum.getMonth()+1
var rok = datum.getFullYear()
document.write("<b> Dnes je: " + den + ". " + mesiac + ". " + rok + "</b>")