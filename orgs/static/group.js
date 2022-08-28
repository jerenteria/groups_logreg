<script>
$('form').submit(function(e){
    e.preventDefault();
    console.log(e)
    console.log("Form was submitted");
    console.log(this)
    $.ajax({
        url: '/create_org',
        method: 'post',
        data: $(this).serialize(),
        success: function(serverResponse){
        console.log("this is ajax working")
        console.log(serverResponse);
        $('#groups').append(serverResponse);
        }
    })
    $(this).reset();
})
</script>