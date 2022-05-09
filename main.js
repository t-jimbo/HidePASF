const hideEob = () => {
  for (let i = 1; i < 10; i++) {
    const tgt = document.getElementById(`eob_${i}`);
    const div = tgt.parentNode;
    div.style.display = 'none';
    div.parentNode.parentNode.parentNode.style.height = 'auto';
  }
}

hideEob();