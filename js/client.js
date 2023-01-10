document.addEventListener('DOMContentLoaded', () => {

document.querySelectorAll('.delete').forEach(button => {
  button.addEventListener('click', event => {
    const id = button.dataset.id;
    fetch(`/delete/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        console.log("Données supprimée")
        button.previousElementSibling.remove()
        button.remove()

      } else {
        console.error('La suppression a échoué.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  });
});


});
