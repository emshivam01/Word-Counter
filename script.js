let text = document.getElementById("text");
let word = document.getElementById("word");
let char = document.getElementById("char");
let arr = [];
text.addEventListener("input", () => {
  let val = text.value;
  let newVal = val.replace(/\s+/g, " ").trim();
  arr = newVal.split(" ");
  if (arr[0] == "") {
    word.textContent = 0;
  } else {
    word.textContent = arr.length;
  }
  let arr2 = val.split(" ");
  char.textContent = arr2.join(" ").length;
});
