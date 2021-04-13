import React, { useState, useRef } from "react";
import "./index.css";
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'


const Editor = () => {
  // 
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''))
  const handleEditorChange = (editorState) => {
    console.log(editorState);
    setEditorState(editorState)
  }
  const submitContent = () => {
    // const htmlContent = editorState.toHTML()
    // const rowContent = editorState.toRAW()
  }
  const uploadFn = (param) => {

    const serverURL = 'http://47.117.49.82:3001/v1/upload'
    const xhr = new XMLHttpRequest()
    const fd = new FormData()

    const successFn = (response) => {
      // 假设服务端直接返回文件上传后的地址
      // 上传成功后调用param.success并传入上传后的文件地址
      param.success({
        url: JSON.parse(xhr.responseText).data.url,
        meta: {
          id: +new Date(),
          // title: 'xxx',
          // alt: 'xxx',
          loop: true, // 指定音视频是否循环播放
          autoPlay: true, // 指定音视频是否自动播放
          controls: true, // 指定音视频是否显示控制栏
          // poster: 'http://xxx/xx.png', // 指定视频播放器的封面
        }
      })
    }

    const progressFn = (event) => {
      // 上传进度发生变化时调用param.progress
      param.progress(event.loaded / event.total * 100)
    }

    const errorFn = (response) => {
      // 上传发生错误时调用param.error
      param.error({
        msg: 'unable to upload.'
      })
    }

    xhr.upload.addEventListener("progress", progressFn, false)
    xhr.addEventListener("load", successFn, false)
    xhr.addEventListener("error", errorFn, false)
    xhr.addEventListener("abort", errorFn, false)

    fd.append('file', param.file)
    xhr.open('POST', serverURL, true)
    xhr.send(fd)

  }
  return (
    <div className="Editor" >
      <BraftEditor
        value={editorState}
        excludeControls={['emoji']}
        onChange={handleEditorChange}
        media={{ uploadFn }}
        onSave={submitContent}
      />
    </div >
  );
};

export default Editor