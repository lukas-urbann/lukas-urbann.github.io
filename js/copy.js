function CopyToClipboard(text)
{
  const inp = document.createElement('textarea');
  inp.value = text;
  document.body.appendChild(inp);
  inp.select();
  document.execCommand('copy');
  document.body.removeChild(inp);
  showDiag(text);
}
