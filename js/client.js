alert("ok")

$(document).ready(function () {
        
    $('.delete').click(async function (event) {
        
        try {
            const dataId = $(this).data('dataId');
            const response = await $.ajax({
                url: `/remove/${dataId}`,
                type: 'DELETE'
            });
            if (response.success) {
                $(this).parent().remove();
                console.log("ok");
            } else {
                alert(response.error);
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    });
});
