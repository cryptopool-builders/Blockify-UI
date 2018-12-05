


/*
*
* Any HTML obj can drop a cookie
*
* <div class="some_existing_div">
* <a class="some_existing_a">
*
* Becomes
*
* <div class="some_existing_div add_to_cookie" data-cname="A_COOKIE_NAME" data-cvalue="A_COOKIE_VALUE">
* <a class="some_existing_a add_to_cookie" data-cname="A_COOKIE_NAME" data-cvalue="A_COOKIE_VALUE">
*
* */

// $('body').on('change','.select_id_here',function(e){
$('body').on('click','.add_to_cookie',function(e){
    // Getting the values for the HTML
    var get_cookie_name = $(this).attr('data-cname');// Get the cookie NAME form HTML
    var get_cookie_value = $(this).attr('data-cvalue'); // get the cookie value form HTML
    var append_cookie_value = $(this).attr('data-cappend') ? 0 : 1;// controle the reset of the cookie
    var joiner = '';
    var new_cookie_value = '';

    console.log(get_cookie_name,get_cookie_value);

    // Get the current cookie value
    var real_cookie_value =  Cookies.get(get_cookie_name);

    if(append_cookie_value){
        if(real_cookie_value!==''){
            joiner = ',';
        }
        // Append the new value to the old value (creates a CSV)
        new_cookie_value = real_cookie_value+joiner+get_cookie_value;
    }else{
        // or replaces the old cookie value
        new_cookie_value = get_cookie_value;
    }

    // Attually save the new cookie value into cookies expires in 180 days.
    Cookies.set(get_cookie_name, new_cookie_value, { expires: 180, path: '' });

    console.log(get_cookie_name,new_cookie_value);

});





