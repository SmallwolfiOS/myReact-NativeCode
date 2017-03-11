/**
 * Created by Jason on 16/7/29.
 */

import React ,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
}from 'react-native';

class Helloworld extends Component{
    render(){
        const a = [];
        a.push('Hello'); // 可执行
        length =  a.push('world','!')//添加一个或多个元素到数组的末尾，并返回数组新的长度
        last = a.pop()  //删除一个数组中的最后一个元素，并且返回这个元素
        a.reverse()//前后颠倒数组中元素的位置，第一个元素会成为最后一个
        first = a.shift() //删除数组的第一个元素，并返回这个元素
        newLength = a.unshift('Hi','im mhp')//在数组的开头插入一个或多个元素，并返回数组的新长度
        b = a.sort()//array.sort([function(a, b)]) 对数组的元素做原地的排序，并返回这个数组。sort可能不稳定，默认按照字符串的unicode码位点排序
        /*
        记a和b是两个将要被比较的元素：
        如果函数function（a， b）返回值小于0， 则a会排在b之前
        如何函数返回值等于0， 则a和b的相对位置不变（并不被保证）
        如果函数返回值大于0，则a会排在b之后
        比较函数输出结果必须稳定，否则排序的结果将是不确定的*/

        c = a.splice(1,1,'123','456',)
        /*array.splice(start, deleteCount[, item1[, item2...])
        在任意的位置给数组添加或删除任意个元素（拼接），返回被删除的元素组成的数组，没有则返回空数组

        start: 开始操作的索引
        deleteCount：要移除的数组元素的个数
        itemN:要添加进数组的元素，如果不指定，则splice只删除数组元素*/

        //不会改变自身的方法
        d = a.concat('addone','addTwo')//将传入的数组或非数组值与原数组合并，组成一个新的数组并返回
        e = a.concat(2,'addThree')
        /*注意：concat方法在拷贝原数组的过程中，

        对象引用（非对象直接量）：concat方法会复制对象引用放到组合的新数组里，原数组和新数组中的对象引用都指向同一个实际的对象，所以，当实际的对象被修改时，两个数组也同时被修改
        字符串和数字（是原始值，而不是包装原始值的string和number对象）：concat方法会复制字符串和数字的值放到新数组里*/

        f = a.slice(1,3)//slice(start,end)从某个已有的数组返回选定的元素
        g = a.includes('123')
        /*array.includes(searchElement, [, fromIndex])[实验性质，es7，可能会改变或删除]
        // 用来判断当前数组是否包含某指定的值，如果是，则返回true，否则false*/

        h = a.indexOf('123',2)
       /* 可以用数组的indexOf函数，方法arr.indexOf(find,start);
        find:要找的内容，必须；
        start:查找开始下标，可选；
        返回：查找数据所在的下标，如果没找到，返回-1*/
        /*array.indexOf(searchElement[, fromIndex = 0])
        返回指定元素能在数组中找到的第一个索引值，否则返回-1
        fromIndex可以为负，表示从倒数第n个开始（此时仍然从前向后查询数组）
        使用“严格相等”（===）进行匹配*/
        /*array.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
        返回指定元素在数组中的最后一个的索引，如果不存在则返回-1， 从数组的后面向前查找
        同上*/

        i = a.join(1)
        /*array.join([separator = ','])
        将数组中的所有元素连接成一个字符串(默认用逗号作为分隔符，如果separator是一个空字符串，那么数组中的所有元素将被直接连接)
        如果元素是undefined或者null，则会转化成空字符串*/

        j = a.slice(0,3)
        /*array.slice([begin = 0 [, end = this.length - 1]])
        把数组中一部分的浅复制（shallow copy）存入一个新的数组对象中，并返回这个新的数组
        不修改原数组，只会返回一个包含了原数组中提取的部分元素的一个新数组
        具体拷贝规则同concat函数*/

        k = a.toString()
        /*array.toString()
        返回一个字符串，该字符串由数组中的每个元素的toString（）返回值经调用join（）方法连接（由逗号隔开）组成。*/

        l = a.toLocaleString()
        /*array.toLocaleString()
        返回一个字符串表示数组中的元素。数组中的元素将使用各自的toLocaleString方法转化成字符串，这些字符串将使用一个特定语言环境的字符串（例如逗号）隔开*/


        // 遍历方法
        a.forEach((v,i,a) =>{
            console.warn(v,i,a)
        })
        /*array.forEach((v, i, a) => {})
        让数组的每一项都执行一次给定的函数
        v表示当前项的值，i表示当前索引，a表示数组本身
        forEach遍历的范围在第一次调用 callback前就会确定。调用forEach后添加到数组中的项不会被 callback访问到。如果已经存在的值被改变，则传递给 callback的值是 forEach遍历到他们那一刻的值。已删除的项不会被遍历到。*/


        var eArr = a.entries();
       // 返回一个Array Iterator对象，该对象包含数组中每一个索引的键值对
        console.log(eArr.next().value);
        console.log(eArr.next().value);
        console.log(eArr.next().value);


        /*array.every(callback(v, i, a){})
        callback只会为那些已经被赋值的索引调用，不会为那些被删除或从来没有被赋值的索引调用
        和forEach函数类似
        注意：array.every()返回一个布尔值，即对每个元素的callback函数结果作逻辑“&”操作*/


        a.map((v, i, a) => {
            console.warn(v,i,a,'map')
        })




        // a.length = 0;    // 可执行
        console.log(j);
        console.log(a.length);
        console.log(k);
        console.log(l);


        // a = ['Dave'];    // 报错
        return(
            <View></View>
        );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
})
AppRegistry.registerComponent('Helloworld', ()=>Helloworld);