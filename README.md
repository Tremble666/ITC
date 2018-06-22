# ITC
Internet Technology Community 

This is our Python final task.

Team member

* WuKangjun
* ZhangHao
* ChenJin
* XuYanan
* DaXinyong

Notice:
* 项目运行入口为manage.py
    * PyCharm直接右键run
    * 命令行下 $ python manage.py runserver
* 项目结构
![image][tmp]
* 缺失的config.py在群文件中下载

项目结构说明
* 最外层的requirements.txt是该项目的Python依赖库, 可使用 $ python install -r requirements.txt进行所有依赖库的安装或直接使用PyCharm进行安装
* migrations文件夹存放数据库相关迁移文件，**勿动**
* app
    * \_\_init__.py存放app的构造工厂函数，其包含对app的配置加载以及Blueprint的注册
    * email.py用于处理邮件相关的功能模块
    * exts.py用于解除包之间的循环依赖
    * models.py用于存放数据库模型
    * static用来存放相关静态资源, 相应的用途见各文件夹的README
    * templates用来存放相关模板，子目录名称与相应的Web模块对应
    * admin, article, auth, main为相应的Web模块，均使用Blueprint实现, url前缀与模块名对应
        * admin对应管理员模块
        * article对应文章模块
        * auth对应用户认证模块(登录、注册等)
        * main对应主页模块
    
    
* 对于Web模块目录，以main举例
    * \_\_init__.py用于对该模块的蓝图进行初始化
    * views.py用于存放视图函数
    * errors.py用于处理错误页面(404, 500等, 如果有需要的话...)


[tmp]:data:data:image/png;base64,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

