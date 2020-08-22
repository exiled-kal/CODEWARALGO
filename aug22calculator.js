function formatDuration (secs) {
    if (secs <= 0) return "now";
    
    // Format Logic
      const yrs = Math.floor(secs / 31536000);
      secs -= yrs * 31536000;
      const days = Math.floor(secs / 86400);
      secs -= days * 86400;
      const hrs = Math.floor(secs / 3600);
      secs -= hrs * 3600;
      const mins = Math.floor(secs / 60);
      secs -= mins * 60;
  
      // singular/plural - of time
      let arr = [];
      if (yrs > 0) arr.push(`${yrs} ${yrs === 1 ? 'year' : 'years'}`);
      if (days > 0) arr.push(`${days} ${days === 1 ? 'day' : 'days'}`);
      if (hrs > 0) arr.push(`${hrs} ${hrs === 1 ? 'hour' : 'hours'}`);
      if (mins > 0) arr.push(`${mins} ${mins === 1 ? 'minute' : 'minutes'}`);
      if (secs > 0) arr.push(`${secs} ${secs === 1 ? 'second' : 'seconds'}`);
  
      // Grammer & syntax
      let output = '';
      for (let i = 0, j = arr.length; i < j; i++) {
          if (i >= j - 2 && i !== j - 1) output += `${arr[i]} and `;
          else if (i < j - 2) output += `${arr[i]}, `;
          else output += `${arr[i]}`;
      }
      return output;
  }
console.log(formatDuration(1));
