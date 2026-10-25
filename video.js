(function(){
  var q=new URLSearchParams(location.search),id=q.get("id")||"sign",back=q.get("back")||("case.html?id="+id);
  var items={
    sign:{title:"杏云同学｜AI 手语翻译 APP",description:"HarmonyOS / ETS 手语识别与语音转译 MVP。",src:"assets/videos/sign-language-web.mp4",poster:"assets/sign-language-preview.webp"},
    funding:{title:"资助政策智能体｜功能演示",description:"政策知识检索、Agent 工作流与工具调用演示。",src:"assets/videos/funding-agent-demo.mp4",poster:"assets/funding-agent-preview.webp"},
    "funding-module":{title:"资助政策智能体｜视频生成模块",description:"视频生成模块操作演示。",src:"assets/videos/funding-video-module.mp4",poster:"assets/funding-agent-preview.webp"},
    "funding-output":{title:"资助政策智能体｜宣传视频生成",description:"助学金主题宣传视频生成作品。",src:"assets/videos/funding-video-output.mp4",poster:"assets/aid-promo-preview.webp"},
    iot:{title:"硬云物联网管理平台｜项目演示",description:"设备管理、任务配置与 Vue 管理端演示。",src:"assets/videos/iot-platform-demo.mp4?v=20261026",poster:"assets/iot-platform-preview.webp"},
    water:{title:"公园河道水质异常检测｜系统演示",description:"水质异常检测系统成果展示。",src:"assets/videos/water-quality-demo.mp4",poster:"assets/water-quality-preview.webp"},
    face:{title:"人脸情绪识别系统｜项目演示",description:"模型训练与 Web 服务演示。",src:"assets/videos/face-recognition-demo.mp4",poster:"assets/face-recognition-preview.webp"},
    pcb:{title:"PCB 缺陷检测系统｜项目演示",description:"PCB 缺陷检测流程与结果演示。",src:"assets/videos/pcb-defect-demo.mp4",poster:"assets/pcb-sample.png"},
    longgang:{title:"龙岗宣传片｜龙起龙岗：一围阅百年",description:"宣传视频作品。",src:"assets/videos/longgang-promo-web.mp4",poster:"assets/longgang-promo-preview.webp"},
    "aid-promo":{title:"资助宣传片｜身承风雨，心赴山海",description:"国家资助政策主题宣传视频作品。",src:"assets/videos/aid-promo-web.mp4",poster:"assets/aid-promo-preview.webp"}
  };
  var item=items[id];
  if(!item){document.getElementById("video-title").textContent="暂无完整视频";document.getElementById("video-description").textContent="";return}
  document.title=item.title+"｜马子欣作品集";
  document.getElementById("video-title").textContent=item.title;
  document.getElementById("video-description").textContent=item.description;
  document.getElementById("video-back").href=back;
  document.getElementById("video-footer-back").href=back;
  var video=document.getElementById("project-video");
  video.poster=item.poster;video.muted=false;video.volume=1;
  document.getElementById("video-source").src=item.src;video.load();
  document.getElementById("playback-rate").addEventListener("change",function(){video.playbackRate=Number(this.value)});
  video.addEventListener("error",function(){var note=document.getElementById("video-note");note.textContent="视频文件无法加载。";note.hidden=false});
})();
