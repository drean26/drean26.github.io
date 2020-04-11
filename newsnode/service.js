var express = require('express');//引入express模块
var bodyParser = require('body-parser')
var fs = require('fs');
var app = express();
// var axios = require('axios')
var multiparty = require("multiparty");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())  
//定义方法
app.get('/',function(req,res){
    res.send('HellowWorld')
});
//设置跨域请求头  一个中间件设置跨域  主要是Access-Control-Allow-Origin字段 允许的访问源
app.all('*', function (req, res, next) {    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//响应接口 --  
// 获取栏目接口
app.get('/list/titles',function(req,res){
//数据
    console.log(req.query)
    let titledata = fs.readFileSync('./newdata/title.json').toString()
    res.send(titledata);

})
// 获取栏目数据
app.get('/list/sections',function(req,res){
//数据
    let titledata = fs.readFileSync('./newdata/newtilesect.json').toString()
    res.send(titledata);
})

// 添加栏目数据
app.post('/list/addsectList',function(req,res,next){
    try {
    // console.log(req.body);
    let data;
    // var jsonData = data.forEach((value, key) => jsonData[key] = value);
    // console.log(jsonData)
    var form = new multiparty.Form({ uploadDir: './public/images' });
    form.parse(req, function(err, fields, files) {
        // console.log(fields)
        let titledata = JSON.parse(fs.readFileSync('./newdata/title.json').toString());
        let sectiondata = JSON.parse(fs.readFileSync('./newdata/newtilesect.json').toString());
        // console.log(titledata,sectiondata)
        // console.log(fields)
        let imgData = fields.img[0];
        var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer.from(base64Data, 'base64');
        let imgName = new Date().getTime()+'.'+fields.imgType[0].split('/')[1];;
        let imgaddres = './newdata/images/'+imgName

        fs.writeFile(imgaddres, dataBuffer, function(err) {
            if(err){
                console.log(err)
            }else{
                // console.log("保存成功！");
                // for(let it in titledata){
                if(fields.column_type[0] != 2){
                    titledata.push({name:fields.title_column[0]});
                    sectiondata[fields.title_column[0]] = [];
                    sectiondata[fields.title_column[0]].push(
                        {
                                imgUrl: "http://www.rzkchina.com/newsnode/newdata/images/"+imgName, 
                                caseName:fields.caseTitle[0],
                                caseText:fields.caseText[0],
                                caseTitle:fields.caseTitle[0],
                                caseBtn:""
                        }  
                    )
                    
                    
                }else{
                        sectiondata[fields.title_column[0]].push({
                            imgUrl: "http://www.rzkchina.com/newsnode/newdata/images/"+imgName, 
                            caseName:fields.caseTitle[0],
                            caseText:fields.caseText[0],
                            caseTitle:fields.caseTitle[0],
                            caseBtn:""
                    })
                } 
                let sect = JSON.stringify(sectiondata)
                fs.writeFile('./newdata/newtilesect.json',sect ,function(err){
                    if(err){
                        console.error(err);
                    }
                })
                let titled = JSON.stringify(titledata)
                fs.writeFile('./newdata/title.json',titled,function(err){
                    if(err){
                        console.error(err);
                    }
                })
                let dats = {
                    code:200,
                    msg:'编辑成功！'
                }
                res.send(dats)
                // }
            }
        });

       
    });
    // console.log(data)
    } catch (error) {
        let dats = {
            code:500,
            msg:'编辑失败！'
        }
        res.send(dats)
    }
})
app.post('/list/editsectlist',function(req,res){
    try {
        var form = new multiparty.Form({ uploadDir: './public/images' });
        form.parse(req, function(err, fields, files) {
            console.log(fields)
            let titledata = JSON.parse(fs.readFileSync('./newdata/title.json').toString());
            let sectiondata = JSON.parse(fs.readFileSync('./newdata/newtilesect.json').toString());
            if(fields.img[0].length>100){
                let imgData = fields.img[0];
                var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
                var dataBuffer = new Buffer.from(base64Data, 'base64');
                let imgName = new Date().getTime()+'.'+fields.imgType[0].split('/')[1];;
                let imgaddres = './newdata/images/'+imgName

                fs.writeFile(imgaddres, dataBuffer, function(err) {
                    if(err){
                        console.log(err)
                    }else{
                        let detelimg = sectiondata[fields.title_column[0]][fields.column_index[0]].imgUrl;
                        sectiondata[fields.title_column[0]][fields.column_index[0]]={
                             imgUrl: "http://www.rzkchina.com/newsnode/newdata/images/"+imgName, 
                            caseName:fields.caseTitle[0],
                            caseText:fields.caseText[0],
                            caseTitle:fields.caseTitle[0],
                            caseBtn:""
                        }

                        let sect = JSON.stringify(sectiondata)
                        fs.writeFile('./newdata/newtilesect.json',sect ,function(err){
                            if(err){
                                console.error(err);
                            }
                        })
                        detelimg = detelimg.split('http://www.rzkchina.com/newsnode/newdata/images/')[1];
                        fs.exists('./newdata/images/'+detelimg, function(e){
                            if(e){
                                fs.unlink('./newdata/images/'+detelimg, (err) => {
                                    if(err) throw err;
                                    console.log('删除成功');
                                });
                            }
                        })
                       
                        let dats = {
                            code:200,
                            msg:'编辑成功！'
                        }
                        res.send(dats)
                    }
                })
            }else{
                 sectiondata[fields.title_column[0]][fields.column_index[0]]={
                    imgUrl: fields.img[0],
                    caseName:fields.caseTitle[0],
                    caseText:fields.caseText[0],
                    caseTitle:fields.caseTitle[0],
                    caseBtn:""
                }

                let sect = JSON.stringify(sectiondata)
                fs.writeFile('./newdata/newtilesect.json',sect ,function(err){
                    if(err){
                        console.error(err);
                    }
                })
                let dats = {
                    code:200,
                    msg:'编辑成功！'
                }
                res.send(dats)
            }
        })
    } catch (error) {
        let dats = {
            code:500,
            msg:jsonDataerror
        }
        res.send(dats)
    }
})
app.post('/list/deletesectlist',function(req,res){
    try {
        var form = new multiparty.Form({ uploadDir: './public/images' });
        form.parse(req, function(err, fields, files) {
            let titledata = JSON.parse(fs.readFileSync('./newdata/title.json').toString());
            let sectiondata = JSON.parse(fs.readFileSync('./newdata/newtilesect.json').toString());
            if(sectiondata[fields.title_column[0]].length == 1){
                delete sectiondata[fields.title_column[0]];
                titledata.splice(fields.title_index[0],1);
            }else{
                sectiondata[fields.title_column[0]].splice(fields.column_index[0],1)
            }
            let sect = JSON.stringify(sectiondata)
            fs.writeFile('./newdata/newtilesect.json',sect ,function(err){
                if(err){
                    console.error(err);
                }
            })
            let titled = JSON.stringify(titledata)
            fs.writeFile('./newdata/title.json',titled,function(err){
                if(err){
                    console.error(err);
                }
            })
            let dats = {
                code:200,
                msg:'删除成功！'
            }
            res.send(dats)
        })
    } catch (error) {
        let dats = {
            code:500,
            msg:'删除失败！'
        }
        res.send(dats)
    }
})
//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000,function(){
    console.log('服务启动成功 prot:3000...');
})