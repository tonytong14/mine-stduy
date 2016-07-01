//query string 模块用于实现URL参数字符串与参数对象的互相转换，
    //parse(str);将字符串转换成参数对象
        var queStr=require('querystring');
        var paramObj=queStr.parse('foo=bar&baz=qux&baz=quux&corge');
        console.log(paramObj);
    //stringify(obj);
        var str=queStr.stringify({ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' });
        console.log(str);
        //stringify(obj,键值连接符); 参数二默认值 &
        var keyValue=queStr.stringify({ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' },'$');
        console.log(keyValue);
        //stringify(obj,键值连接符，键和值之间连接符);  参数三默认值 =
        var keyAndValue=queStr.stringify({ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' },'','*');
        console.log(keyAndValue);

        //parse();参数二  参数三 和stringify一样
        console.log(queStr.parse(keyValue,'$'));
        console.log(queStr.parse(keyAndValue,'','*'));
