const hideEob = () => {
  for (let i = 1; i < 10; i++) {
    const tgt = document.getElementById(`eob_${i}`);
    if (tgt) {
      tgt.style.display = 'none';
      const idiv = tgt.parentNode;
      // idiv.style.display = 'none';
      idiv.parentNode.parentNode.style.height = 'auto';
      idiv.parentNode.parentNode.parentNode.style.height = 'auto';
    } else {
      return;
    }
  }
}


hideEob();