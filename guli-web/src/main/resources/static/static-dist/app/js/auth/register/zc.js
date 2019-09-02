$(function(){

    var mobile_name = false;
    var error_name = false;
    var error_pwd = false;
    var error_email = false;
    var error_allow = false;

    // 输入框获取焦点时 其它输入框验证
    // 失去焦点
    $('#register_mobile').blur(function(){
        register_mobile();
    });

    // 隐藏提示信息
    // 获取焦点
    $('#register_mobile').focus(function(){
        $(this).next().hide();
        $(this).parent().parent().removeClass('has-error');
    });

    // 输入框获取焦点时 其它输入框验证
    // 失去焦点
    $('#register_nickname').blur(function(){
        check_username();
    });

    // 隐藏提示信息
    // 获取焦点
    $('#register_nickname').focus(function(){
        $(this).next().hide();
        $(this).parent().parent().removeClass('has-error');
    });

    // 密码
    // 输入框获取焦点时 其它输入框验证
    // 失去焦点
    $('#register_password').blur(function(){
        check_pwd();
    });

    // 隐藏提示信息
    // 获取焦点
    $('#register_password').focus(function(){
        $(this).next().hide();
        $(this).parent().parent().removeClass('has-error');
    });



    // 是否同意协议
    // $('#allow').click(function(){
    //     if($(this).prop('checked') == true){
    //         error_allow = false;
    //         $('.error_tip2').hide();
    //     }
    //     else{
    //         error_allow = true;
    //         $('.error_tip2').html('请勾选同意').show();
    //     }
    // });

    //手机号
    function register_mobile(){
        var val = $('#register_mobile').val();
        // 开发文档要求
        var re = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
        if(val == ''){
            $('#register_mobile').next().html('手机号不能为空!');
            $('#register_mobile').next().show();
            $('#register_mobile').parent().parent().addClass('has-error');
            return;
        }

        if(re.test(val)){
            error_name = false;
        }
        else{
            error_name = true;
            $('#register_mobile').next().html('手机号格式格式不正确!');
            $('#register_mobile').next().show();
            $('#register_mobile').parent().parent().addClass('has-error');
            return;
        }
    }


    function check_username(){
        var val = $('#register_nickname').val();
        // 开发文档要求
        var re = /^\w{0,18}$/i;
        if(val == ''){
            $('#register_nickname').next().html('用户名不能为空!');
            $('#register_nickname').next().show();
            $('#register_nickname').parent().parent().addClass('has-error');
            return;
        }

        if(re.test(val)){
            error_name = false;
        }
        else{
            error_name = true;
            $('#register_nickname').next().html('用户名是包含数字、字母。下划线的5到15位字符!');
            $('#register_nickname').next().show();
            $('#register_nickname').parent().parent().addClass('has-error');
            return;
        }
    }


    function check_pwd(){
        var val = $('#register_password').val();
        // 开发文档要求
        var re = /^\W\@\$\*\.\!\?{5,20}$/;
        if(val == ''){
            $('#register_password').next().html('密码不能为空!');
            $('#register_password').next().show();
            $('#register_password').parent().parent().addClass('has-error');
            return;
        }
        if(re.test(val)){
            error_name = false;
        }
        else{
            error_name = true;
            $('#register_password').next().html('密码是包含数字、字母,还包含@$*.!?的6到16位字符!');
            $('#register_password').next().show();
            $('#register_password').parent().parent().addClass('has-error');
            return;
        }
    }

    // function check_email(){
    //     var val = $('#email').val();
    //     // 开发文档要求
    //     var re = /^[\W][\w\.]*@[\w](\.[\w]{2,3})$/;
    //     if(val == ''){
    //         $('#email').next().html('邮箱不能为空!');
    //         $('#email').next().show();
    //         $('#email').parent().parent().addClass('has-error');
    //         return;
    //     }
    //
    //     if(re.test(val)){
    //         error_name = false;
    //     }
    //     else{
    //         error_name = true;
    //         $('#email').next().html('邮箱输入错误!');
    //         $('#email').next().show();
    //         $('#email').parent().parent().addClass('has-error');
    //         return;
    //     }
    // }


    $('#register-form').submit(function(){
        register_mobile();
        check_username();
        check_pwd();
        // check_email();

        if(mobile_name == false || error_name == false || error_pwd == false){
            return false;
        }
    });

})
