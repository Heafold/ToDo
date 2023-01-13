
$(document).ready(() => {
    $('.delete').click(event => {
      const id = $(event.target).data('id');
      $.ajax({
        url: `/delete/${id}`,
        type: 'DELETE',
        success: (response) => {
          console.log("Données supprimée")
          $(event.target).prev().remove()
          $(event.target).remove()
        },
        error: (error) => {
          console.error('La suppression a échoué.');
          console.error(error);
        }
      });
    });
  });
  