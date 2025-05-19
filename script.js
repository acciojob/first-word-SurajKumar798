function firstWord(s) {
  // your code here
	const trimmed = s.trim();
	if(trimmed === "") return "";
	const spaceIndex = trimmed.indexOf(" ");
	if(spaceIndex === -1) return trimmed;
	return trimmed.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));  
