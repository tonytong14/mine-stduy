//url模块（资源定位符模块）
    //url的构成
    /*
                                href
        -----------------------------------------------------------------
                                       host              path
                                 --------------- ----------------------------
            http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
            -----    ---------   --------   ---- -------- ------------- -----
            protocol     auth     hostname   port pathname     search     hash
                                                           ------------
                                                                query
    */

    //url.parse(string,boolean,boolean);
    /*
        url.parse方法来将一个URL字符串转换为URL对象，
            第一个参数是url的字符串形式
            第二参数 默认值是false，解析query为字符串 设置是true  query返回的是一个参数对象
            第三参数 默认值是false， 可以带协议头部分    设置true  可以解析不带协议头部分
     */
    //引入url模块
    var url=require('url');

    //使用url.parse方法解析url
    var baiDU=url.parse('https://www.baidu.com/');
    console.log(baiDU);

        /*
            Url {
                    protocol: 'https:',         协议
                    slashes: true,              是否有//线
                    auth: null,                 授权
                    host: 'www.baidu.com',      主机
                    port: null,                 端口
                    hostname: 'www.baidu.com',  主机名
                    hash: null,                 hash
                    search: null,               搜索字段
                    query: null,                查询字段
                    pathname: '/',              资源路径名
                    path: '/',                  路径
                    href: 'https://www.baidu.com/'  url
            }
        */
    //ur.parse(string,true) 设置第二个参数
     var taoBao=url.parse('https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.754894437.3.0MFAcc&ad_id=&am_id=&cm_id',true);
     console.log(taoBao);
        /*
         Url {
             protocol: 'https:',
             slashes: true,
             auth: null,
             host: 'i.taobao.com',
             port: null,
             hostname: 'i.taobao.com',
             hash: null,
             search: '?spm=a21bo.50862.754894437.3.0MFAcc&ad_id=&am_id=&cm_id',
             query:
             { spm: 'a21bo.50862.754894437.3.0MFAcc',  //query部分返回为参数对象
             ad_id: '',
             am_id: '',
             cm_id: '' },
             pathname: '/my_taobao.htm',
             path: '/my_taobao.htm?spm=a21bo.50862.754894437.3.0MFAcc&ad_id=&am_id=&cm_id',
             href: 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.754894437.3.0MFAcc&ad_id=&am_id=&cm_id'
            }
         */
     //url.parse(string,false,true);设置第三个参数
     var taoBao1=url.parse('//i.taobao.com/my_taobao.htm?spm=a21bo.50862.754894437.3.0MFAcc&ad_id=&am_id=&cm_id',false,true);
     console.log(taoBao1);


    //url.format() 允许将一个URL对象转换为URL字符串
        var urlStr=url.format({
            protocol: 'https:',
            slashes: true,
            auth: null,
            host: 'www.baidu.com',
            port: null,
            hostname: 'www.baidu.com',
            hash: null,
            search: null,
            query: null,
            pathname: '/',
            path: '/',
            href: 'https://www.baidu.com/'
        });
        console.log(urlStr);

    //url.resolve();用于拼接URL，
        var urlConcat=url.resolve('https://www.baidu.com/','/path1/path2?user=134&pass=321');
        console.log(urlConcat);