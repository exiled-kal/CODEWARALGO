function formatDuration (seconds) {
    function numberEnding (number) {
        return (number > 1) ? 's' : '';
    }
    if (seconds > 0){
        var years = Math.floor(seconds / 31536000);
        var days = Math.floor((seconds % 31536000) / 86400);
        var hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        var minutes = Math.floor((((seconds % 31536000) % 86400) %  60);
        var second = (((seconds % 31536000) % 86400) % 3600) % 0;         
        var r = (years > 0 ) ? years + " year" + numberEnding(years) : ""; 
        var x = (days > 0) ? days + " day" + numberEnding(days) : "";
        var y = (hours > 0) ? hours + " hour" + numberEnding(hours) : "";
        var z = (minutes > 0) ? minutes + " minute" numberEnding(minutes) : "";
        var u = (second > 0) ? second + " second" + numberEnding(second) : "";
        var str = r + x + y + z + u

        return str
    }
    else {
        return "now"}
    }
}
console.log(formatDuration(1));
