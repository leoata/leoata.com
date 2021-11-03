var fileViewModalOpen = false;
var typed;

$(document).ready(function () {
  $("div[data-includeHTML]").each(function () {
    $(this).load($(this).attr("data-includeHTML"));
  });
});

function openFileViewModal(modalId) {
  if (!anime){
    return;
  }
  fileViewModalOpen = true;
  typed?.stop()
  anime({
    targets: `#${modalId}`,
    opacity: 1,
    width: 650,
    height: 541,
    maxWidth: 650,
    maxHeight: 541,
    easing: 'spring(1, 100, 100, 0)'
  })
}
function closeFileViewModal() {
  if (!anime){
    return;
  }
  typed?.start()

  fileViewModalOpen = false;
  let modals = ["overflowme-modal"];
  for (let i = 0; i < 3; i++) {
    var modalId = modals[i];
    anime({
      targets: `#${modalId}`,
      opacity: 0,
      width: 0,
      height: 0,
      maxWidth: 0,
      maxHeight: 0,
      easing: 'spring(1, 100, 100, 0)'
    })
  }
}

