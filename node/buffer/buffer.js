//buffer缓存区，因为js的数据是字符串数据类型，没有二进制数据类型。
//nodeJs 定义了buffer类用来专门存储二进制数据
    //创建buffer类 实例化buffer
        //方式1  定义字节长度
            var buf=new Buffer(40);

        //方式2 给定的数组定义实例
            var buf1=new Buffer([10,30,40,50,60]);
        //方式3 通过字符串定义实例
            var buf2=new Buffer('天青色等烟雨，而我在等你。你眼带笑意。');


    //Buffer.write(string[, offset[, length]][, encoding])方法 写入方法
    /*
        string - 写入缓冲区的字符串。
        offset - 缓冲区开始写入的索引值，默认为 0 。
        length - 写入的字节数，默认为 buffer.length
        encoding - 使用的编码。默认为 'utf8' 。
        返回值：返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串
    */
        var len=buf.write('吻别');
        console.log('写入字节的长度' + len);

    //Buffer.toString([encoding[, start[, end]]]);从缓存区读取数据
    /*
        参数
        参数描述如下：
        encoding - 使用的编码。默认为 'utf8' 。
        start - 指定开始读取的索引位置，默认为 0。
        end - 结束位置，默认为缓冲区的末尾。
        返回值
        解码缓冲区数据并使用指定的编码返回字符串。
     */
        var str=buf.toString('utf8');
        console.log(str);

    //Buffer.toJson();将 Node Buffer 转换为 JSON 对象
        var jsn=buf.toJSON();
        console.log(jsn);

    //缓存区合并 Buffer.concat(list[, totalLength])
    /*
        参数
        参数描述如下：
        list - 用于合并的 Buffer 对象数组列表。
        totalLength - 指定合并后Buffer对象的总长度。
        返回值
        返回一个多个成员合并的新 Buffer 对象。
    */
        var buf3=Buffer.concat([buf,buf1,buf2]);
        console.log(buf3.toString('utf8'));

    //缓存区比较 buf.compare(otherBuffer);
    /*
        参数
        参数描述如下：
        otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
        返回值
        返回一个数字，表示 buf 在 otherBuffer  -1之前， 1之后或 0相同。
    */
        var info=buf.compare(buf);
        console.log(info);

    //拷贝缓存区 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
    /*参数
        参数描述如下：
        targetBuffer - 要拷贝的 Buffer 对象。
        targetStart - 数字, 可选, 默认: 0
        sourceStart - 数字, 可选, 默认: 0
        sourceEnd - 数字, 可选, 默认: buffer.length
        返回值
        没有返回值。
    */
        buf.copy(buf1);
        console.log(buf.toString());

    //缓存区裁剪 Buffer.slice([start[, end]])
    /*
        参数
        参数描述如下：
        start - 数字, 可选, 默认: 0
        end - 数字, 可选, 默认: buffer.length
        返回值
        返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。位置是按字节存储的位置计算
    */

        var clp=buf.slice(0,6);
        console.log(clp.toString());
        console.log(buf.length);