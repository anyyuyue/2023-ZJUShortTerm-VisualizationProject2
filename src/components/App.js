// 本文件是界面UI的根目录

import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import AssistView from "./AssistView";
import ControlPanel from "./ControlPanel";
import OverView from "./Overview";
import DetailView from "./DetailView";
import DetailTypeView from "./DetailTypeView";
import Title from "./Title";

// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    view: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        //borderImage: 'linear-gradient(to bottom, #fff, #999) 1',
        textShadow: '1px 1px 1px #333',
        boxShadow: '0 0 10px #999',
    },
    controlPanel: {
        position: 'absolute',
        top: '15.5%',
        height: '39%',
        left: '5.25%',
        width: '50%',
    },
    overView: {
        position: 'absolute',
        top: '15.5%',
        height: '39%',
        right: '5.25%',
        width: '39%',
    },
    detailView: {
        position: 'absolute',
        top:'55.5%',
        bottom: '8.5%',
        left: '5.25%',
        width: '35%',
    },
    assistView: {
        position: 'absolute',
        top: '55.5%',
        bottom: '8.5%',
        left: '40.75%',
        width: '26.5%',
    },
    detailtypeView: {
        position: 'absolute',
        top:'55.5%',
        bottom: '8.5%',
        width: '27%',
        right: '5.25%',
    },
    title: {
        position: 'absolute',
        top:'1%',
        bottom: '89%',
        left: '5%',
        right: '5%',
    },
}))

// App组件

function App() {
    // 使用上述的css样式
    const classes = useStyles();
    
    // 使用classes.root使用样式中定义的root类
    // 可视化项目中，若干视图一般采用绝对布局，方便后续调整各个视图的位置与大小
    // 目前四个视图都是一样的，查看AssistView的注释
    return <div className={classes.root}>
                <hr></hr>
        <div className={clsx(classes.view, classes.controlPanel)}><ControlPanel/></div>
        <div className={clsx(classes.view, classes.assistView)}><AssistView/></div>
        <div className={clsx(classes.view, classes.overView)}><OverView/></div>
        <div className={clsx(classes.view, classes.detailView)}><DetailView/></div>
        <div className={clsx(classes.view, classes.detailtypeView)}><DetailTypeView/></div>
        <div className={clsx(classes.title)}><Title/></div>
    </div>;
}

export default App;
