## 算法通关练习


### 如何分析、统计算法的执行效率和资源消耗？

我们都知道，数据结构和算法本身解决的是“快”和“省”的问题，即如何让代码运行得更快，如何让代码更省存储空间。所以，执行效率是算法一个非常重要的考量指标。

那如何来衡量你编写的算法代码的执行效率呢？答案就是：**时间**、**空间复杂度分析**。

#### 时间复杂度

**大 O 复杂度表示法** 即 **T(n) = O(f(n))**


- T(n)：代码的执行时间 
- n   ：表示数据的规模大小
- f(n)：表示每行代码执行的次数总和

公式中的 O，表示代码的执行时间 T(n) 与 f(n) 表达式成正比。


算法的执行效率，粗略地讲，就是算法代码执行的时间。但是，如何在不运行代码的情况下，用“肉眼”得到一段代码的执行时间呢？

```js
let sum = 0; // 第一行
for(let i = 0; i < n; ++i) { // 第二行
  sum = sum + i;  //  第三行
} // 第四行
```
> 从 CPU 的角度来看，这段代码的每一行都执行着类似的操作：**读数据**-**运算**-**写数据**。尽管每行代码对应的 CPU 执行的个数、执行的时间都不一样，但是，我们这里只是粗略估计，所以可以假设每行代码执行的时间都一样，为 `time`。在这个假设的基础之上，这段代码的总执行时间是多少呢？

- 第一行`let sum = 0`只会运行一次，所以只需要1个`time`的时间
- 第二行、第三行都分别运行了n次，所以需要 `2n*time`的时间
- 所以，整段代码总的执行时间是 `T(n) = (2n + 1) * time`

**可以看出来，所有代码的执行时间 T(n) 与每行代码的执行次数成正比。** 所以，可以得知上面 `T(n) = O(2n + 2)`。

> 大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是**表示代码执行时间随数据规模增长的变化趋势**，所以，也叫作**渐进时间复杂度**，简称**时间复杂度**。






--prefix=/usr/share/nginx // 把nginx安装到哪个目录下
--sbin-path=/usr/sbin/nginx // 可执行文件路径
--modules-path=/usr/lib64/nginx/modules // 安装的额外模块路径
--conf-path=/etc/nginx/nginx.conf // 配置文件路径
--error-log-path=/var/log/nginx/error.log // 错误日志路径
--http-log-path=/var/log/nginx/access.log // 普通日志路径
--pid-path=/run/nginx.pid  // 进程id
--lock-path=/run/lock/subsys/nginx // 枷锁文件

--http-client-body-temp-path=/var/lib/nginx/tmp/client_body
--http-proxy-temp-path=/var/lib/nginx/tmp/proxy
--http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi
--http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi
--http-scgi-temp-path=/var/lib/nginx/tmp/scgi
--user=nginx
--group=nginx
--with-file-aio
--with-ipv6
--with-http_ssl_module
--with-http_v2_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module=dynamic --with-http_auth_request_module --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-debug --with-cc-opt='-O2 -g -pipe -Wall -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -Wp,-D_GLIBCXX_ASSERTIONS -fexceptions -fstack-protector-strong -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -specs=/usr/lib/rpm/redhat/redhat-annobin-cc1 -m64 -mtune=generic -fasynchronous-unwind-tables -fstack-clash-protection -fcf-protection' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E'
